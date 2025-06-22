import { Scene, WebGLRenderer } from "three";
import { PhysicsSimulator } from "../physics/PhysicsSimulator";

export class ThreeManager {
    private static instance: ThreeManager;
    public renderer;
    public scene;
    public canvasContainer!: HTMLDivElement;
    // public physicsSimulator!: PhysicsSimulator;

    private constructor() {
        this.renderer = new WebGLRenderer();
        this.scene = new Scene();
        this.insertCanvas(this.renderer);
        // this.initPhysics();
    }

    static getInstance(): ThreeManager {
        if (!ThreeManager.instance) {
            ThreeManager.instance = new ThreeManager();
        }
        return ThreeManager.instance;
    }

    // async initPhysics() {
    //     const physicsSimulator = new PhysicsSimulator();
    //     await physicsSimulator.initSimulation();
    //     this.physicsSimulator = physicsSimulator;
    // }    

    private insertCanvas(renderer: WebGLRenderer) {
        const canvas = renderer.domElement;
        const canvasContainer = document.createElement("div");
        canvasContainer.style.width = "100%";
        canvasContainer.style.height = "100%";
        canvasContainer.appendChild(canvas);
        document.body.prepend(canvasContainer);
        this.canvasContainer = canvasContainer;
    }
}
