import { Vector3, CurvePath, CubicBezierCurve3, QuadraticBezierCurve3, Matrix4 } from "three";
import { ParametricGeometry } from "three/examples/jsm/Addons.js";

interface CurveParams {
    points: number[][][];
    segments?: number;
    closed?: boolean;
}

export class BezierCurve {
    private static readonly DEFAULT_CLOSED = true;
    private static readonly DEFAULT_SEGMENTS = 200;
    private segments;
    private closed;
    private path;

    constructor(optionalParams: CurveParams) {
        const params = this.setParams(optionalParams);
        this.segments = params.segments;
        this.closed = params.closed;
        this.path = this.createPath(params.points);
    }

    private setParams(params: CurveParams) {
        return {
            points: params.points,
            segments: params.segments ?? BezierCurve.DEFAULT_SEGMENTS,
            closed: params.closed ?? BezierCurve.DEFAULT_CLOSED,
        };
    }

    private createPath(points: number[][][]): CurvePath<Vector3> {
        const path = new CurvePath<Vector3>();
        for (const curvePoints of points) {
            if (curvePoints.length < 3 || curvePoints.length > 4) {
                throw new Error(`Unexpected number of control points: ${curvePoints.length}. Expected 3 or 4.`);
            }

            if (curvePoints.length === 4) {
                const [p0, p1, p2, p3] = curvePoints;
                const curve = new CubicBezierCurve3(
                    new Vector3(...p0),
                    new Vector3(...p1),
                    new Vector3(...p2),
                    new Vector3(...p3),
                );
                path.add(curve);
            } else {
                const [p0, p1, p2] = curvePoints;
                const curve = new QuadraticBezierCurve3(new Vector3(...p0), new Vector3(...p1), new Vector3(...p2));
                path.add(curve);
            }
        }

        return path;
    }

    parametricSwept(mappingFn: (u: number, v: number) => [number, number, number], slices: number) {
        const { tangents, normals, binormals } = this.path.computeFrenetFrames(this.segments, this.closed);
        const sweptFn = (u: number, v: number, target: Vector3) => {
            const index = Math.floor(v * this.segments);
            const tangent = tangents[index];
            const normal = normals[index];
            const binormal = binormals[index];
            const curvePoint = this.path.getPointAt(v);
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
}
