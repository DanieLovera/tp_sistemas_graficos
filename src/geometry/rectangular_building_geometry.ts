import { ShapeGeometry, Vector3 } from "three";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { zero, one } from "../utils/functions";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { ParametricShape } from "../utils/parametric_shape";

interface RectangularBuildingGeometryParams {
    width?: number;
    depth?: number;
    axialSegments?: number;
    axialSegmentsHeight?: number;
    scaleFn?: (v: number) => number;
    torsionFn?: (v: number) => number;
}

class RectangularBuildingGeometry {
    private static readonly PARAMETER_END = 1;
    private static readonly DEFAULT_WIDTH = 1;
    private static readonly DEFAULT_HEIGHT = 1;
    private static readonly RADIAL_SEGMENTS = 4;
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

        const buldingGeometry = this.createBuldingGeometry(
            RectangularBuildingGeometry.RADIAL_SEGMENTS,
            params.axialSegments,
        );
        const capGeometry = this.createCapGeometry(
            RectangularBuildingGeometry.RADIAL_SEGMENTS,
            params.axialSegments,
            params.axialSegmentsHeight,
        );
        this.geometry = mergeGeometries([buldingGeometry, capGeometry]);
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

    private createBuldingGeometry(radialSegments: number, axialSegments: number) {
        const mappingFn = (u: number, v: number, target: Vector3) => {
            const [x, z] = this.rectangularProfile(u);
            const scale = this.scaleFn(v);
            const torsion = this.torsionFn(v);
            const xt = scale * (x * Math.cos(torsion) - z * Math.sin(torsion));
            const zt = scale * (x * Math.sin(torsion) + z * Math.cos(torsion));
            const y = v * this.axialSegments * this.axialSegmentsHeight;

            target.set(xt, y, zt);
        };
        const geometry = new ParametricGeometry(mappingFn, radialSegments, axialSegments);
        return geometry;
    }

    private createCapGeometry(segments: number, axialSegments: number, axialSegmentsHeight: number) {
        const profileShape = new ParametricShape({
            mappingFn: this.rectangularProfile,
            segments: segments,
        });

        const geometry = new ShapeGeometry(profileShape.shape);
        const scale = this.scaleFn(RectangularBuildingGeometry.PARAMETER_END);
        const torsion = this.torsionFn(RectangularBuildingGeometry.PARAMETER_END);
        geometry.rotateX(Math.PI / 2);
        geometry.rotateY(torsion);
        geometry.scale(scale, scale, scale);
        geometry.translate(0, axialSegments * axialSegmentsHeight, 0);
        return geometry;
    }

    private rectangularProfile = (u: number): [number, number] => {
        const rectangleSides = 4;
        const width = this.width;
        const depth = this.depth;
        const side = u * rectangleSides;

        if (side < 1) {
            return [-width / 2 + width * side, -depth / 2];
        } else if (side < 2) {
            return [width / 2, -depth / 2 + depth * (side - 1)];
        } else if (side < 3) {
            return [width / 2 - width * (side - 2), depth / 2];
        } else {
            return [-width / 2, depth / 2 - depth * (side - 3)];
        }
    };
}

export { RectangularBuildingGeometry };
export type { RectangularBuildingGeometryParams };
