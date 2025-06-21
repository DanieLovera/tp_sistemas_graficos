import { Float32BufferAttribute, ShapeGeometry, Vector3 } from "three";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { zero, one } from "../utils/functions";
// import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import { ParametricShape } from "../utils/parametric_shape";

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
    private static readonly PARAMETER_END = 1;
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
    public bodyGeometry;
    public capGeometry;

    constructor(optionalParams: RadialBuildingGeometryParams) {
        const params = this.setParams(optionalParams);
        this.a = params.a;
        this.b = params.b;
        this.axialSegments = params.axialSegments;
        this.axialSegmentsHeight = params.axialSegmentsHeight;
        this.scaleFn = params.scaleFn;
        this.torsionFn = params.torsionFn;

        const bodyGeometry = this.createBodyGeometry(params.radialSegments, params.axialSegments);
        const capGeometry = this.createCapGeometry(
            params.radialSegments,
            params.axialSegments,
            params.axialSegmentsHeight,
        );
        this.bodyGeometry = bodyGeometry;
        this.capGeometry = capGeometry;
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

    private createBodyGeometry(radialSegments: number, axialSegments: number) {
        const mappingFn = (u: number, v: number, target: Vector3) => {
            const [x, z] = this.ellipticalProfile(u);
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

    private createCapGeometry(radialSegments: number, axialSegments: number, axialSegmentsHeight: number) {
        const profileShape = new ParametricShape({
            mappingFn: this.ellipticalProfile,
            segments: radialSegments,
        });

        const geometry = new ShapeGeometry(profileShape.shape);
        const scale = this.scaleFn(RadialBuildingGeometry.PARAMETER_END);
        const torsion = this.torsionFn(RadialBuildingGeometry.PARAMETER_END);
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

    private ellipticalProfile = (u: number): [number, number] => {
        const x = this.a * Math.cos(-2 * Math.PI * u);
        const y = this.b * Math.sin(-2 * Math.PI * u);
        return [x, y];
    };
}

export { RadialBuildingGeometry };
export type { RadialBuildingGeometryParams };
