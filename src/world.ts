import { DirectionalLight, AmbientLight, Scene, AxesHelper } from "three";
import { Ground } from "./ground";
import { CircularBuilding } from "./building/circular_building";
// import { Lot } from "./lot";

class World {
    constructor(scene: Scene) {
        const light = new DirectionalLight(0xffffff, 1);

        light.position.set(1, 1, 1);
        scene.add(light);

        const ambientLight = new AmbientLight(0x666666);
        scene.add(ambientLight);

        const ground = new Ground(100, 100);
        ground.insert(scene);

        const axes = new AxesHelper(3);
        scene.add(axes);

        const circularBuilding = new CircularBuilding({
            radius: 4,
            axialSegments: 10,
            axialSegmentsHeight: 2,
            // torsionFn: twist(3),
            // torsionFn: sinusoidal(3, 1),
            // scaleFn: sinusoidal(0.1, 7, 0.2),
        });
        circularBuilding.insert(scene);

        // new Lot(circularBuilding.mesh);

    }

    animate() {
        return;
    }
}

export { World };
