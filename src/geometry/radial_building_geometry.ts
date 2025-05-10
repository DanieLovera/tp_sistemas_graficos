import { Vector3 } from "three";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { zero, one } from "../utils/functions";

interface RadialBuildingGeometryParams {
    a?: number;
    b?: number;
    radialSegments?: number;
    axialSegments?: number;
    axialSegmentsHeight?: number;
    scaleFn?: (u: number) => number;
    torsionFn?: (u: number) => number;
}

class RadialBuildingGeometry {
    private static readonly DEFAULT_A = 1;
    private static readonly DEFAULT_B = 1;
    private static readonly DEFAULT_RADIAL_SEGMENTS = 10;
    private static readonly DEFAULT_AXIAL_SEGMENTS = 5;
    private static readonly DEFAULT_AXIAL_SEGMENTS_HEIGHT = 1;
    private a;
    private b;
    private axialSegments;
    private axialSegmentsHeight;
    private scaleFn;
    private torsionFn;
    public geometry;

    constructor(optionalParams: RadialBuildingGeometryParams) {
        const params = this.setParams(optionalParams);
        this.a = params.a;
        this.b = params.b;
        this.axialSegments = params.axialSegments;
        this.axialSegmentsHeight = params.axialSegmentsHeight;
        this.scaleFn = params.scaleFn;
        this.torsionFn = params.torsionFn;
        this.geometry = new ParametricGeometry(this.mappingFn, params.radialSegments, this.axialSegments);
    }

    private setParams(params: RadialBuildingGeometryParams) {
        return {
            a: params.a ?? RadialBuildingGeometry.DEFAULT_A,
            b: params.b ?? RadialBuildingGeometry.DEFAULT_B,
            axialSegmentsHeight: params.axialSegmentsHeight ?? RadialBuildingGeometry.DEFAULT_AXIAL_SEGMENTS_HEIGHT,
            radialSegments: params.radialSegments ?? RadialBuildingGeometry.DEFAULT_RADIAL_SEGMENTS,
            axialSegments: params.axialSegments ?? RadialBuildingGeometry.DEFAULT_AXIAL_SEGMENTS,
            scaleFn: params.scaleFn ?? one,
            torsionFn: params.torsionFn ?? zero,
        };
    }

    private mappingFn = (u: number, v: number, target: Vector3) => {
        const [x, z] = this.ellipticalProfile(u);
        const scale = this.scaleFn(v);
        const torsion = this.torsionFn(v);
        const xt = scale * (x * Math.cos(torsion) - z * Math.sin(torsion));
        const zt = scale * (x * Math.sin(torsion) + z * Math.cos(torsion));
        const y = v * this.axialSegments * this.axialSegmentsHeight;

        target.set(xt, y, zt);
    };

    private ellipticalProfile(u: number) {
        const x = this.a * Math.cos(2 * Math.PI * u);
        const y = this.b * Math.sin(2 * Math.PI * u);
        return [x, y];
    }
}

export { RadialBuildingGeometry };
export type { RadialBuildingGeometryParams };
