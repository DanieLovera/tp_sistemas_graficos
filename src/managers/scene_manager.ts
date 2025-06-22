import {
    BoxGeometry,
    CylinderGeometry,
    Mesh,
    MeshPhongMaterial,
    PerspectiveCamera,
    Vector3,
    WebGLRenderer,
} from "three";
import { RoadStructureManager } from "./road_structure_manager";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { ThreeManager } from "./three_manager";
import { GroundManager } from "./ground_manager";
import { BuildingsManager } from "./buildings_manager";
import { SkyManager } from "./sky_manager";
import GUI from "lil-gui";

import Stats from "three/addons/libs/stats.module.js";
import { PhysicsSimulator } from "../physics/PhysicsSimulator";
import { CarManager } from "./car_manager";

class SceneManager {
    private static GRID_SIZE = 300;
    private static LOT_SIZE = 10;
    private camera: PerspectiveCamera;
    private renderer;
    private scene;

    private skyManager;
    private buildingsManager;
    private roadStructureManager;
    private carManager;

    private physicsSimulator!: PhysicsSimulator;
    private stats;
    private controls!: OrbitControls;

    constructor(physicsSimulator: PhysicsSimulator) {
        const threeManager = ThreeManager.getInstance();
        this.camera = this.createCamera(threeManager.renderer);
        this.renderer = threeManager.renderer;
        this.scene = threeManager.scene;
        this.physicsSimulator = physicsSimulator;
        this.createMenu();

        this.skyManager = new SkyManager();
        const groundManager = new GroundManager(SceneManager.GRID_SIZE, SceneManager.LOT_SIZE);
        this.roadStructureManager = new RoadStructureManager(groundManager);
        this.buildingsManager = new BuildingsManager(groundManager);
        this.skyManager.render();
        groundManager.render();
        this.roadStructureManager.render();
        this.buildingsManager.render();

        const canvasContainer = threeManager.canvasContainer;
        const stats = new Stats();
        canvasContainer.appendChild(stats.dom);
        this.stats = stats;

        this.carManager = new CarManager(this.physicsSimulator);
        this.carManager.render();

        // this.createPhysicObjets();
    }

    render = () => {
        this.renderer.render(this.scene, this.camera);
        this.resize();
        this.animate();
        window.requestAnimationFrame(this.render);
    };

    private resize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.camera.aspect = width / height;
        this.renderer.setSize(width, height);
    };

    private animate = () => {
        this.carManager.animate();
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
        this.stats.update();
    };

    private createCamera(renderer: WebGLRenderer) {
        const fov = 75;
        const near = 0.1;
        const far = 1000;
        const aspect = window.innerWidth / window.innerHeight;

        const camera = new PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 6, 6);
        camera.lookAt(0, 0, 0);
        const canvas = renderer.domElement;

        const controls = new OrbitControls(camera, canvas);
        controls.target = new Vector3(0, 2, 0);
        controls.update();

        this.controls = controls;
        return camera;
    }

    // createPhysicObjets() {
    //     // cylinder obstacle
    //     const geometry = new CylinderGeometry(2, 2, 10, 16);
    //     geometry.translate(0, 5, 0);
    //     const material = new MeshPhongMaterial({ color: "#666699" });
    //     const column = new Mesh(geometry, material);
    //     column.position.set(-10, 0.5, 0);

    //     this.scene.add(column);
    //     this.physicsSimulator.addRigidBody(column, 0, 0.01);

    //     // ramp obstacle (should be a BoxGeometry)
    //     const rampGeometry = new BoxGeometry(10, 1, 20);
    //     const rampMaterial = new MeshPhongMaterial({ color: 0x999999 });
    //     const ramp = new Mesh(rampGeometry, rampMaterial);
    //     ramp.position.set(0, 1, -30);
    //     ramp.rotation.x = Math.PI / 12;
    //     this.scene.add(ramp);

    //     this.physicsSimulator.addRigidBody(ramp);
    // }

    private createMenu() {
        const gui = new GUI();

        // MODOS
        const modoTitle = "Modo";
        const modoMenu = {
            [modoTitle]: "Día",
        };
        const modoOptions = ["Día", "Noche"];
        gui.add(modoMenu, modoTitle, modoOptions).onChange((value: string) => {
            if (value === "Día") {
                this.skyManager.setDaylightTheme();
                this.buildingsManager.setDaylightTheme();
                this.roadStructureManager.setDaylightTheme();
            } else {
                this.skyManager.setNightlightTheme();
                this.buildingsManager.setNightlightTheme();
                this.roadStructureManager.setNightlightTheme();
            }
        });

        // CAMARAS
        const camaraTitle = "Camara";
        const camaraMenu = {
            [camaraTitle]: "Orbital",
        };
        const camaraOptions = ["Interior vehiculo", "Seguimiento vehiculo", "Orbital", "Peaton"];
        gui.add(camaraMenu, camaraTitle, camaraOptions).onChange((value: string) => {
            if (value === "Interior vehiculo") {
                console.log("Interior vehiculo");
            } else if (value === "Seguimiento vehiculo") {
                console.log("Seguimiento vehiculo");
            } else if (value === "Orbital") {
                console.log("ORBITAL");
            } else {
                console.log("Peaton");
            }
        });
    }
}

export { SceneManager };
