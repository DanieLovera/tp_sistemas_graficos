import { DirectionalLight, AmbientLight, Scene, AxesHelper } from "three";
import { Ground } from "./ground";
import { CircularBuilding } from "./building/circular_building";
import { cuadratic, linear, twist } from "./functions";
import { ElipticalBuilding } from "./building/elliptical_building";
import { HexagonalBuilding } from "./building/hexagonal_building";
import { RectangularBuilding } from "./building/rectangular_building";
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
            radius: 2,
            axialSegments: 10,
            axialSegmentsHeight: 1,
            scaleFn: linear(1, 0.5)
        });
        circularBuilding.translate(10, 0, 0);
        circularBuilding.insert(scene);

        const elipticalBuilding = new ElipticalBuilding({
            a: 1,
            b: 2,
            axialSegments: 10,
            axialSegmentsHeight: 1,
        });
        elipticalBuilding.translate(-10, 0, 0);
        elipticalBuilding.insert(scene);

        const hexagonalBuilding = new HexagonalBuilding({
            radius: 2,
            axialSegments: 10,
            axialSegmentsHeight: 1,
            scaleFn: cuadratic(2, 1)
        });
        hexagonalBuilding.translate(0, 0, 10);
        hexagonalBuilding.insert(scene);

        const rectangularBuilding = new RectangularBuilding({
            width: 2,
            depth: 2,
            axialSegments: 10,
            axialSegmentsHeight: 1,
            torsionFn: twist(0.5)
        });
        rectangularBuilding.translate(0, 0, -10);
        rectangularBuilding.insert(scene);

        // new Lot(circularBuilding.mesh);
    }

    animate() {
        return;
    }
}

export { World };
