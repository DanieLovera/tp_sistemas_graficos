import { RadialBuildingGeometry } from "./radial_building_geometry";
import { RadialBuildingGeometryParams } from "./radial_building_geometry";

interface HexagonalBuildingParams extends Omit<RadialBuildingGeometryParams, "a" | "b" | "radialSegments"> {
    radius?: number;
}

class HexagonalBuildingGeometry {
    private static readonly DEFAULT_RADIUS = 1;
    private static readonly RADIAL_SEGMENTS = 6;
    public bodyGeometry;
    public capGeometry;

    constructor(optionalParams: HexagonalBuildingParams) {
        const params = this.setParams(optionalParams);
        const building = new RadialBuildingGeometry({
            a: params.radius,
            b: params.radius,
            radialSegments: HexagonalBuildingGeometry.RADIAL_SEGMENTS,
            axialSegments: params.axialSegments,
            axialSegmentsHeight: params.axialSegmentsHeight,
            scaleFn: params.scaleFn,
            torsionFn: params.torsionFn,
        });
        this.bodyGeometry = building.bodyGeometry;
        this.capGeometry = building.capGeometry;
    }

    private setParams(params: HexagonalBuildingParams) {
        return {
            radius: params.radius ?? HexagonalBuildingGeometry.DEFAULT_RADIUS,
            ...params,
        };
    }
}

export { HexagonalBuildingGeometry };
