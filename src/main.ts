import { SceneManager } from "./managers/scene_manager";
import { PhysicsSimulator } from "./physics/PhysicsSimulator";

const physicsSimulator = new PhysicsSimulator();
await physicsSimulator.initSimulation();

const sceneManager = new SceneManager(physicsSimulator);
sceneManager.render();
