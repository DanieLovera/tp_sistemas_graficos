import { RadialBuildingGeometry } from "./radial_building_geometry";
import { RadialBuildingGeometryParams } from "./radial_building_geometry";

type EllipticalBuildingGeometryParams = Omit<RadialBuildingGeometryParams, "radialSegments">;

class EllipticalBuildingGeometry {
    private static readonly DEFAULT_A = 1;
    private static readonly DEFAULT_B = 2;
    private static readonly RADIAL_SEGMENTS = 1000;
    public bodyGeometry;
    public capGeometry;

    constructor(optionalParams: EllipticalBuildingGeometryParams) {
        const params = this.setParams(optionalParams);
        const building = new RadialBuildingGeometry({
            a: params.a,
            b: params.b,
            radialSegments: EllipticalBuildingGeometry.RADIAL_SEGMENTS,
            axialSegments: params.axialSegments,
            axialSegmentsHeight: params.axialSegmentsHeight,
            scaleFn: params.scaleFn,
            torsionFn: params.torsionFn,
        });
        this.bodyGeometry = building.bodyGeometry;
        this.capGeometry = building.capGeometry;
    }

    private setParams(params: EllipticalBuildingGeometryParams) {
        return {
            a: params.a ?? EllipticalBuildingGeometry.DEFAULT_A,
            b: params.b ?? EllipticalBuildingGeometry.DEFAULT_B,
            ...params,
        };
    }
}

export { EllipticalBuildingGeometry };
