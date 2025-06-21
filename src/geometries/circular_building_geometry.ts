import { RadialBuildingGeometry } from "./radial_building_geometry";
import { RadialBuildingGeometryParams } from "./radial_building_geometry";

interface CircularBuildingGeometryParams extends Omit<RadialBuildingGeometryParams, "a" | "b" | "radialSegments"> {
    radius?: number;
}

class CircularBuildingGeometry {
    private static readonly DEFAULT_RADIUS = 1;
    private static readonly RADIAL_SEGMENTS = 1000;
    public bodyGeometry;
    public capGeometry;

    constructor(optionalParams: CircularBuildingGeometryParams) {
        const params = this.setParams(optionalParams);
        const building = new RadialBuildingGeometry({
            a: params.radius,
            b: params.radius,
            radialSegments: CircularBuildingGeometry.RADIAL_SEGMENTS,
            axialSegments: params.axialSegments,
            axialSegmentsHeight: params.axialSegmentsHeight,
            scaleFn: params.scaleFn,
            torsionFn: params.torsionFn,
        });
        this.bodyGeometry = building.bodyGeometry;
        this.capGeometry = building.capGeometry;
    }

    private setParams(params: CircularBuildingGeometryParams) {
        return {
            radius: params.radius ?? CircularBuildingGeometry.DEFAULT_RADIUS,
            ...params,
        };
    }
}

export { CircularBuildingGeometry };
