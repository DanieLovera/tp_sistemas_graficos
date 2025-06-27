import { SceneManager } from "./managers/scene_manager";
import { PhysicsSimulator } from "./physics/PhysicsSimulator";

const main = async () => {
    const physicsSimulator = new PhysicsSimulator();
    await physicsSimulator.initSimulation();

    const sceneManager = new SceneManager(physicsSimulator);
    sceneManager.render();
};

main();
