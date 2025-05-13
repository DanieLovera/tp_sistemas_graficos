import { CatmullRomCurve3, ExtrudeGeometry, ExtrudeGeometryOptions, Matrix4, Shape, Vector3 } from "three";
import { ParametricGeometry } from "three/examples/jsm/Addons.js";

interface CurveParams {
    controlPoints: number[][];
    segments?: number;
    closed?: boolean;
}

type ExtrudeSettings = Omit<ExtrudeGeometryOptions, "steps | depth" | "extrudePath">;

class CatmullRom {
    private static readonly DEFAULT_CLOSED = true;
    private static readonly DEFAULT_SEGMENTS = 200;
    private segments;
    private closed;
    public curve;

    constructor(optionalParams: CurveParams) {
        const params = this.setParams(optionalParams);
        this.segments = params.segments;
        this.closed = params.closed;
        this.curve = this.createPath(params);
    }

    setParams(params: CurveParams) {
        return {
            controlPoints: params.controlPoints,
            segments: params.segments ?? CatmullRom.DEFAULT_SEGMENTS,
            closed: params.closed ?? CatmullRom.DEFAULT_CLOSED,
        };
    }

    createPath(params: CurveParams) {
        const controlPoints = params.controlPoints.map((point) => new Vector3(...point));
        const curve = new CatmullRomCurve3(controlPoints, params.closed, "catmullrom");
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
        const { tangents, normals, binormals } = this.curve.computeFrenetFrames(this.segments, this.closed);
        const sweptFn = (u: number, v: number, target: Vector3) => {
            const index = Math.floor(v * this.segments);
            const tangent = tangents[index];
            const normal = normals[index];
            const binormal = binormals[index];
            const curvePoint = this.curve.getPointAt(v);
            const sweptMatrix = new Matrix4()
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

    getPointAt(u: number) {
        return this.curve.getPointAt(u);
    }
}

export { CatmullRom };
export type { ExtrudeSettings };
