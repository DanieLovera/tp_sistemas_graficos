import { Mesh, Scene } from "three";
import { RadialBuilding } from "./radial_building";
import { RadialBuildingParams } from "./radial_building";

interface HexagonalBuildingParams extends Omit<RadialBuildingParams, "a" | "b" | "radialSegments"> {
    radius: number;
}

type OptionalHexagonalBuildingParams = Partial<HexagonalBuildingParams>;

class HexagonalBuilding {
    private static readonly DEFAULT_RADIUS = 1;
    private static readonly RADIAL_SEGMENTS = 6;
    private mesh;

    constructor(optionalParams: OptionalHexagonalBuildingParams) {
        const params = this.setParams(optionalParams);
        const building = new RadialBuilding({
            a: params.radius,
            b: params.radius,
            radialSegments: HexagonalBuilding.RADIAL_SEGMENTS,
            axialSegments: params.axialSegments,
            axialSegmentsHeight: params.axialSegmentsHeight,
            scaleFn: params.scaleFn,
            torsionFn: params.torsionFn,
        });
        const geometry = building.geometry;
        const material = building.material;
        this.mesh = new Mesh(geometry, material);
    }

    private setParams(params: OptionalHexagonalBuildingParams) {
        return {
            radius: params.radius ?? HexagonalBuilding.DEFAULT_RADIUS,
            ...params,
        };
    }

    insert(scene: Scene) {
        scene.add(this.mesh);
    }

    translate(x: number, y: number, z: number) {
        this.mesh.position.set(x, y, z);
    }
}

export { HexagonalBuilding };
