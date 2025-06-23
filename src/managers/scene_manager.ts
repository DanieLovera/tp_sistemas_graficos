import { PerspectiveCamera, Vector3, WebGLRenderer } from "three";
import { RoadStructureManager } from "./road_structure_manager";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { ThreeManager } from "./three_manager";
import { GroundManager } from "./ground_manager";
import { BuildingsManager } from "./buildings_manager";
import { SkyManager } from "./sky_manager";
import { CarManager } from "./car_manager";
import { PhysicsSimulator } from "../physics/PhysicsSimulator";
import GUI from "lil-gui";

class SceneManager {
    private static GRID_SIZE = 300;
    private static LOT_SIZE = 10;
    private orbitCamera: PerspectiveCamera;
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
        this.orbitCamera = this.createCamera();
        this.camera = this.orbitCamera;
        this.controls = this.createOrbitControls(this.orbitCamera, threeManager.renderer);
        this.renderer = threeManager.renderer;
        this.scene = threeManager.scene;
        this.stats = threeManager.stats;
        this.physicsSimulator = physicsSimulator;
        this.createMenu();

        const groundManager = new GroundManager(SceneManager.GRID_SIZE, SceneManager.LOT_SIZE);
        this.skyManager = new SkyManager();
        this.roadStructureManager = new RoadStructureManager(groundManager);
        this.buildingsManager = new BuildingsManager(groundManager);
        this.carManager = new CarManager(this.physicsSimulator);
        groundManager.render();
        this.skyManager.render();
        this.roadStructureManager.render();
        this.buildingsManager.render();
        this.carManager.render();
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
        // this.controls.update();
        this.renderer.render(this.scene, this.camera);
        this.stats.update();
    };

    private createCamera() {
        const fov = 75;
        const near = 0.1;
        const far = 1000;
        const aspect = window.innerWidth / window.innerHeight;

        const camera = new PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 6, 6);
        camera.lookAt(0, 0, 0);
        return camera;
    }

    private createOrbitControls(camera: PerspectiveCamera, renderer: WebGLRenderer) {
        const canvas = renderer.domElement;
        const controls = new OrbitControls(camera, canvas);
        controls.target = new Vector3(0, 2, 0);
        controls.update();
        return controls;
    }

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
                this.controls.enabled = false;
                this.camera = this.carManager.getCamera();
            } else if (value === "Orbital") {
                this.controls.enabled = true;
                this.controls.update();
                this.camera = this.orbitCamera;
            } else {
                console.log("Peaton");
            }
        });
    }
}

export { SceneManager };
