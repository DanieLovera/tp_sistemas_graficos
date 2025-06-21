import { Float32BufferAttribute, ShapeGeometry, Vector3 } from "three";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { zero, one } from "../utils/functions";
// import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
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
    public bodyGeometry;
    public capGeometry;

    constructor(optionalParams: RectangularBuildingGeometryParams) {
        const params = this.setParams(optionalParams);
        this.width = params.width;
        this.depth = params.depth;
        this.axialSegments = params.axialSegments;
        this.axialSegmentsHeight = params.axialSegmentsHeight;
        this.scaleFn = params.scaleFn;
        this.torsionFn = params.torsionFn;

        const bodyGeometry = this.createBodyGeometry(RectangularBuildingGeometry.RADIAL_SEGMENTS, params.axialSegments);
        const capGeometry = this.createCapGeometry(
            RectangularBuildingGeometry.RADIAL_SEGMENTS,
            params.axialSegments,
            params.axialSegmentsHeight,
        );
        this.bodyGeometry = bodyGeometry;
        this.capGeometry = capGeometry;
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

    private createBodyGeometry(radialSegments: number, axialSegments: number) {
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
        geometry.rotateX(-Math.PI / 2);
        geometry.rotateY(-torsion);
        geometry.scale(scale, scale, scale);
        geometry.translate(0, axialSegments * axialSegmentsHeight, 0);
        this.setUVsCoordinates(geometry);

        return geometry;
    }

    private setUVsCoordinates(geometry: ShapeGeometry) {
        geometry.computeBoundingBox();
        const boundingBox = geometry.boundingBox;
        if (boundingBox) {
            const max = boundingBox.max;
            const min = boundingBox.min;
            const offset = [0 - min.x, 0 - min.z];
            const range = [max.x - min.x, max.z - min.z];

            const positions = geometry.attributes.position.array;
            const uvs: number[] = [];

            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const z = positions[i + 2];
                uvs.push((x + offset[0]) / range[0], 1 - (z + offset[1]) / range[1]);
            }
            geometry.setAttribute("uv", new Float32BufferAttribute(uvs, 2));
        }
    }

    private rectangularProfile = (u: number): [number, number] => {
        const rectangleSides = 4;
        const width = this.width;
        const depth = this.depth;
        const side = u * rectangleSides;

        if (side < 1) {
            return [-width / 2 + width * side, depth / 2];
        } else if (side < 2) {
            return [width / 2, depth / 2 - depth * (side - 1)];
        } else if (side < 3) {
            return [width / 2 - width * (side - 2), -depth / 2];
        } else {
            return [-width / 2, -depth / 2 + depth * (side - 3)];
        }
    };
}

export { RectangularBuildingGeometry };
export type { RectangularBuildingGeometryParams };
