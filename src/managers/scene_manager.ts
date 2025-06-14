import { DirectionalLight, AmbientLight, AxesHelper, PerspectiveCamera, WebGLRenderer } from "three";
import { RoadStructureManager } from "./road_structure_manager";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { ThreeManager } from "./three_manager";
import { GroundManager } from "./ground_manager";
import { BuildingsManager } from "./buildings_manager";

class SceneManager {
    private static GRID_SIZE = 200;
    private static LOT_SIZE = 10;
    private camera: PerspectiveCamera;
    private renderer;
    private scene;

    constructor() {
        const threeManager = ThreeManager.getInstance();
        this.camera = this.createCamera(threeManager.renderer);
        this.renderer = threeManager.renderer;
        this.scene = threeManager.scene;

        const light = new DirectionalLight(0xffffff, 1);
        light.position.set(1, 1, 1);
        this.scene.add(light);
        const ambientLight = new AmbientLight(0x666666);
        this.scene.add(ambientLight);
        const axes = new AxesHelper(3);
        this.scene.add(axes);

        const ground = new GroundManager(SceneManager.GRID_SIZE, SceneManager.LOT_SIZE);
        const roadStructureManager = new RoadStructureManager(ground);
        const buildingsManager = new BuildingsManager(ground);
        ground.render();
        roadStructureManager.render();
        buildingsManager.render();
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
}

export { SceneManager };
