import { DirectionalLight, AmbientLight, Scene, AxesHelper } from "three";
import { Ground } from "./ground";
import { RadialBuilding } from "./building/radial_building";
import { cuadratic, pulse, radial, sinusoidal, twist } from "./functions";
import { HexagonalBuilding } from "./building/hexagonal_building";
import { CircularBuilding } from "./building/circular_building";
import { RectangularBuilding } from "./building/rectangular_building";
import { ElipticalBuilding } from "./building/elliptical_building";

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

        // const hexagonalBuilding = new HexagonalBuilding({
        //     radius: 2
        // });
        // hexagonalBuilding.insert(scene);

        const circularBuilding = new CircularBuilding({
            radius: 2,
            axialSegments: 10,
            axialSegmentsHeight: 1,
            // torsionFn: twist(3),
            // torsionFn: sinusoidal(3, 1),
            // scaleFn: sinusoidal(0.1, 7, 0.2),
        });
        circularBuilding.insert(scene);

        // const rectangularBuilding = new RectangularBuilding({
        //     width: 4,
        //     height: 6,
        //     axialSegments: 10,
        //     axialSegmentsHeight: 3,
        //     // scaleFn: cuadratic(2, 1),
        //     // torsionFn: radial(1),
        // });
        // rectangularBuilding.insert(scene);

        // const elipticalBuilding = new ElipticalBuilding({
        //     a: 2,
        //     b: 1,
        //     axialSegments: 3,
        //     axialSegmentsHeight: 3,
        //     scaleFn: cuadratic(2, 1),
        //     torsionFn: radial(1),
        // });
        // elipticalBuilding.insert(scene);
    }

    animate() {
        return;
    }
}

export { World };
