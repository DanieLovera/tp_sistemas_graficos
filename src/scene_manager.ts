import { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";
import { World } from "./world";

class SceneManager {
    scene;
    renderer;
    camera!: PerspectiveCamera;
    world!: World;

    constructor() {
        this.renderer = new WebGLRenderer();
        this.scene = new Scene();
        this.insertCanvas();
        this.createCamera();
        this.createScene();
    }

    private insertCanvas() {
        const canvas = this.renderer.domElement;
        const canvasContainer = document.createElement("div");
        canvasContainer.style.width = "100%";
        canvasContainer.style.height = "100%";
        canvasContainer.appendChild(canvas);
        document.body.prepend(canvasContainer);
    }

    private createCamera() {
        const fov = 75;
        const aspect = window.innerWidth / window.innerHeight;
        const near = 0.1;
        const far = 1000;

        const camera = new PerspectiveCamera(fov, aspect, near, far);
        camera.position.set(0, 6, 6);
        camera.lookAt(0, 0, 0);
        const canvas = this.renderer.domElement
        new OrbitControls(camera, canvas);
        this.camera = camera;
    }

    private createScene() {
        this.world = new World(this.scene);
    }

    render = () => {
        this.renderer.render(this.scene, this.camera);
        this.resize();
        this.animate();
        window.requestAnimationFrame(this.render);
    };

    private animate = () => {
        this.world.animate();
    };

    private resize = () => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        this.camera.aspect = width / height;
        this.renderer.setSize(width, height);
    };
}

export { SceneManager }