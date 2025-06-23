import { Scene, WebGLRenderer } from "three";
import Stats from "three/addons/libs/stats.module.js";

export class ThreeManager {
    private static instance: ThreeManager;
    public renderer;
    public scene;
    public stats!: Stats;

    private constructor() {
        this.renderer = new WebGLRenderer();
        this.scene = new Scene();
        this.insertCanvas(this.renderer);
    }

    static getInstance(): ThreeManager {
        if (!ThreeManager.instance) {
            ThreeManager.instance = new ThreeManager();
        }
        return ThreeManager.instance;
    }

    private insertCanvas(renderer: WebGLRenderer) {
        const canvas = renderer.domElement;
        const canvasContainer = document.createElement("div");
        canvasContainer.style.width = "100%";
        canvasContainer.style.height = "100%";
        canvasContainer.appendChild(canvas);
        document.body.prepend(canvasContainer);

        const stats = new Stats();
        canvasContainer.appendChild(stats.dom);

        this.stats = stats;
    }
}
