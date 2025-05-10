import { Vector3 } from "three";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { zero, one } from "../utils/functions";

interface RectangularBuildingGeometryParams {
    width?: number;
    depth?: number;
    axialSegments?: number;
    axialSegmentsHeight?: number;
    scaleFn?: (v: number) => number;
    torsionFn?: (v: number) => number;
}

class RectangularBuildingGeometry {
    private static readonly DEFAULT_WIDTH = 1;
    private static readonly DEFAULT_HEIGHT = 1;
    private static readonly DEFAULT_RADIAL_SEGMENTS = 4;
    private static readonly DEFAULT_AXIAL_SEGMENTS = 5;
    private static readonly DEFAULT_AXIAL_SEGMENTS_HEIGHT = 1;
    private width;
    private depth;
    private axialSegments;
    private axialSegmentsHeight;
    private scaleFn;
    private torsionFn;
    public geometry;

    constructor(optionalParams: RectangularBuildingGeometryParams) {
        const params = this.setParams(optionalParams);
        this.width = params.width;
        this.depth = params.depth;
        this.axialSegments = params.axialSegments;
        this.axialSegmentsHeight = params.axialSegmentsHeight;
        this.scaleFn = params.scaleFn;
        this.torsionFn = params.torsionFn;

        this.geometry = new ParametricGeometry(
            this.mappingFn,
            RectangularBuildingGeometry.DEFAULT_RADIAL_SEGMENTS,
            this.axialSegments,
        );
    }

    private setParams(params: RectangularBuildingGeometryParams) {
        return {
            width: params.width ?? RectangularBuildingGeometry.DEFAULT_WIDTH,
            depth: params.depth ?? RectangularBuildingGeometry.DEFAULT_HEIGHT,
            axialSegments: params.axialSegments ?? RectangularBuildingGeometry.DEFAULT_AXIAL_SEGMENTS,
            axialSegmentsHeight:
                params.axialSegmentsHeight ?? RectangularBuildingGeometry.DEFAULT_AXIAL_SEGMENTS_HEIGHT,
            scaleFn: params.scaleFn ?? one,
            torsionFn: params.torsionFn ?? zero,
        };
    }

    private rectangularProfile(u: number): [number, number] {
        const rectangleSides = 4;
        const width = this.width;
        const depth = this.depth;
        const corner = u * rectangleSides;

        if (corner < 1) {
            return [-width / 2 + width * corner, -depth / 2];
        } else if (corner < 2) {
            return [width / 2, -depth / 2 + depth * (corner - 1)];
        } else if (corner < 3) {
            return [width / 2 - width * (corner - 2), depth / 2];
        } else {
            return [-width / 2, depth / 2 - depth * (corner - 3)];
        }
    }

    private mappingFn = (u: number, v: number, target: Vector3) => {
        const [x, z] = this.rectangularProfile(u);
        const scale = this.scaleFn(v);
        const torsion = this.torsionFn(v);
        const xt = scale * (x * Math.cos(torsion) - z * Math.sin(torsion));
        const zt = scale * (x * Math.sin(torsion) + z * Math.cos(torsion));
        const y = v * this.axialSegments * this.axialSegmentsHeight;

        target.set(xt, y, zt);
    };
}

export { RectangularBuildingGeometry };
export type { RectangularBuildingGeometryParams };
