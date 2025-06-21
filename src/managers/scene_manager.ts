import { PerspectiveCamera, WebGLRenderer } from "three";
import { RoadStructureManager } from "./road_structure_manager";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { ThreeManager } from "./three_manager";
import { GroundManager } from "./ground_manager";
import { BuildingsManager } from "./buildings_manager";
import { SkyManager } from "./sky_manager";
import GUI from "lil-gui";

class SceneManager {
    private static GRID_SIZE = 300;
    private static LOT_SIZE = 10;
    private camera: PerspectiveCamera;
    private renderer;
    private scene;

    private skyManager;
    private buildingsManager;
    private roadStructureManager;

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

    private animate() {
        return;
    }

    private createCamera(renderer: WebGLRenderer) {
        const fov = 75;
        const near = 0.1;
        const far = 1000;
        const aspect = window.innerWidth / window.innerHeight;

        const camera = new PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 6, 6);
        camera.lookAt(0, 0, 0);
        const canvas = renderer.domElement;
        new OrbitControls(camera, canvas);
        return camera;
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
