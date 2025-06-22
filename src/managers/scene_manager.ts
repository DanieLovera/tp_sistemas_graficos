import {
    AxesHelper,
    BoxGeometry,
    CylinderGeometry,
    Mesh,
    MeshPhongMaterial,
    Object3DEventMap,
    PerspectiveCamera,
    SpotLight,
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

class SceneManager {
    private static GRID_SIZE = 300;
    private static LOT_SIZE = 10;
    private camera: PerspectiveCamera;
    private renderer;
    private scene;

    private skyManager;
    private buildingsManager;
    private roadStructureManager;

    private chassis!: Mesh<BoxGeometry, MeshPhongMaterial, Object3DEventMap>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private wheels!: any[];
    private physicsSimulator!: PhysicsSimulator;
    private stats;
    private controls!: OrbitControls;

    constructor() {
        const threeManager = ThreeManager.getInstance();
        this.camera = this.createCamera(threeManager.renderer);
        this.renderer = threeManager.renderer;
        this.scene = threeManager.scene;
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

        this.createPhysicObjets();
        this.renderer.setAnimationLoop(this.animate);
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
        this.physicsSimulator.update();
        this.updateVehicleTransforms();
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

    async createPhysicObjets() {
        this.physicsSimulator = new PhysicsSimulator();
        await this.physicsSimulator.initSimulation();

        this.createCarModel();

        // cylinder obstacle
        const geometry = new CylinderGeometry(2, 2, 10, 16);
        geometry.translate(0, 5, 0);
        const material = new MeshPhongMaterial({ color: "#666699" });
        const column = new Mesh(geometry, material);
        column.position.set(-10, 0.5, 0);

        this.scene.add(column);
        this.physicsSimulator.addRigidBody(column, 0, 0.01);

        // ramp obstacle (should be a BoxGeometry)
        const rampGeometry = new BoxGeometry(10, 1, 20);
        const rampMaterial = new MeshPhongMaterial({ color: 0x999999 });
        const ramp = new Mesh(rampGeometry, rampMaterial);
        ramp.position.set(0, 1, -30);
        ramp.rotation.x = Math.PI / 12;
        this.scene.add(ramp);

        this.physicsSimulator.addRigidBody(ramp);
    }

    createCarModel() {
        // chassis
        const geometry = new BoxGeometry(2, 1, 4);
        const material = new MeshPhongMaterial({ color: 0xff0000 });
        const chassis = new Mesh(geometry, material);
        this.scene.add(chassis);

        // axes helper
        const axesHelper = new AxesHelper(5);
        chassis.add(axesHelper);

        // add spolight on the front of the car
        const light = new SpotLight(0xffdd99, 100);
        light.decay = 1;
        light.penumbra = 0.5;

        light.position.set(0, 0, -2);
        light.target.position.set(0, 0, -10);
        chassis.add(light.target);

        // add spotlight helper
        //const lightHelper = new SpotLightHelper(light);
        //light.add(lightHelper);

        chassis.add(light);

        // wheels
        const wheelGeometry = new CylinderGeometry(0.6, 0.6, 0.4, 16);
        wheelGeometry.rotateZ(Math.PI * 0.5);
        const wheelMaterial = new MeshPhongMaterial({ color: 0x000000, wireframe: true });

        const wheels = [];
        for (let i = 0; i < 4; i++) {
            const wheel = new Mesh(wheelGeometry, wheelMaterial);
            chassis.add(wheel);
            wheel.position.set(10 * i, 2, 20 * i);
            wheels.push(wheel);
        }

        this.wheels = wheels;
        this.chassis = chassis;
    }

    updateVehicleTransforms() {
        const vt = this.physicsSimulator.getVehicleTransform();
        if (this.chassis && vt) {
            const { position, quaternion } = vt;
            this.chassis.position.set(position.x, position.y, position.z);
            this.chassis.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.wheels.forEach((wheel: any, index: any) => {
                const wheelTransform = this.physicsSimulator.getWheelTransform(index);
                if (wheelTransform) {
                    const { position, quaternion } = wheelTransform;
                    wheel.position.set(position.x, position.y, position.z);
                    wheel.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
                }
            });
        }
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