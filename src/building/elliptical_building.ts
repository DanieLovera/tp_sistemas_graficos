import { Mesh, Scene } from "three";
import { RadialBuilding } from "./radial_building";
import { RadialBuildingParams } from "./radial_building";

type ElipticalBuildingParams = Omit<RadialBuildingParams, "radialSegments">;

type OptionalElipticalBuildingParams = Partial<ElipticalBuildingParams>;

class ElipticalBuilding {
    private static readonly DEFAULT_A = 1;
    private static readonly DEFAULT_B = 2;
    private static readonly RADIAL_SEGMENTS = 50;
    private mesh;

    constructor(optionalParams: OptionalElipticalBuildingParams) {
        const params = this.setParams(optionalParams);
        const building = new RadialBuilding({
            a: params.a,
            b: params.b,
            radialSegments: ElipticalBuilding.RADIAL_SEGMENTS,
            axialSegments: params.axialSegments,
            axialSegmentsHeight: params.axialSegmentsHeight,
            scaleFn: params.scaleFn,
            torsionFn: params.torsionFn,
        });
        const geometry = building.geometry;
        const material = building.material;
        this.mesh = new Mesh(geometry, material);
    }

    private setParams(params: OptionalElipticalBuildingParams) {
        return {
            a: params.a ?? ElipticalBuilding.DEFAULT_A,
            b: params.b ?? ElipticalBuilding.DEFAULT_B,
            ...params,
        };
    }

    insert(scene: Scene) {
        scene.add(this.mesh);
    }
}

export { ElipticalBuilding };
