import { CatmullRomCurve3, ExtrudeGeometry, ExtrudeGeometryOptions, Matrix4, Shape, Vector3 } from "three";
import { ParametricGeometry } from "three/examples/jsm/Addons.js";

interface CurveParams {
    controlPoints: number[][];
    segments?: number;
    closed?: boolean;
}

enum Orientation {
    Outside = -1,
    Inside = 1,
}

type ExtrudeSettings = Omit<ExtrudeGeometryOptions, "steps" | "depth" | "extrudePath">;

class CatmullRom {
    private static readonly DEFAULT_CLOSED = true;
    private static readonly DEFAULT_SEGMENTS = 200;
    private segments;
    private closed;
    private tangents;
    private binormals;
    private normals;
    private curve;

    constructor(optionalParams: CurveParams) {
        const params = this.setParams(optionalParams);
        this.segments = params.segments;
        this.closed = params.closed;
        this.curve = this.createPath(params);
        const frenetFrames = this.curve.computeFrenetFrames(this.segments, this.closed);
        this.tangents = frenetFrames.tangents;
        this.binormals = frenetFrames.binormals;
        this.normals = frenetFrames.normals;
    }

    private setParams(params: CurveParams) {
        return {
            controlPoints: params.controlPoints,
            segments: params.segments ?? CatmullRom.DEFAULT_SEGMENTS,
            closed: params.closed ?? CatmullRom.DEFAULT_CLOSED,
        };
    }

    private createPath(params: CurveParams) {
        const controlPoints = params.controlPoints.map((point) => new Vector3(...point));
        const curve = new CatmullRomCurve3(controlPoints, params.closed, "chordal");
        return curve;
    }

    extrude(shape: Shape, extrudeSettings: ExtrudeSettings) {
        const geometry = new ExtrudeGeometry(shape, {
            ...extrudeSettings,
            steps: this.segments,
            extrudePath: this.curve,
        });
        return geometry;
    }

    parametricSwept(mappingFn: (u: number, v: number) => [number, number, number], slices: number) {
        const sweptFn = (u: number, v: number, target: Vector3) => {
            const index = Math.floor(v * this.segments);
            const tangent = this.tangents[index];
            const normal = this.normals[index];
            const binormal = this.binormals[index];
            const curvePoint = this.curve.getPointAt(v);
            const sweptMatrix = new Matrix4();
            sweptMatrix.makeBasis(normal, binormal, tangent);
            sweptMatrix.setPosition(curvePoint);

            const [x, y, z] = mappingFn(u, v);
            const point = new Vector3(x, y, z);
            point.applyMatrix4(sweptMatrix);
            target.set(point.x, point.y, point.z);
        };

        const geometry = new ParametricGeometry(sweptFn, slices, this.segments);
        return geometry;
    }

    getSweptMatrix(u: number, distance = 0, orientation: Orientation) {
        const index = Math.floor(u * this.segments);
        const binormal = this.binormals[index];
        const normal = this.normals[index];
        const tangent = this.tangents[index];

        const matrix = new Matrix4();
        matrix.makeBasis(normal, binormal, tangent);
        const curvePoint = this.curve.getPointAt(u);
        const position = curvePoint.add(binormal.clone().multiplyScalar(orientation * Math.abs(distance)));
        matrix.setPosition(position);

        const matrixRz = new Matrix4();
        matrixRz.makeRotationZ(Math.PI / 2);
        matrix.multiply(matrixRz);
        return matrix;
    }

    getPointAt(u: number) {
        return this.curve.getPointAt(u);
    }
}

export { CatmullRom, Orientation };
export type { ExtrudeSettings };
