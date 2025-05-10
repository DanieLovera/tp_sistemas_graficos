import { Vector3, CurvePath, CubicBezierCurve3, QuadraticBezierCurve3 } from "three";

interface CurveParams {
    points: number[][][];
}

export class BezierCurve {
    private path;

    constructor(data: CurveParams) {
        this.path = this.createPath(data);
    }

    private createPath(data: CurveParams): CurvePath<Vector3> {
        const path = new CurvePath<Vector3>();
        for (const curvePoints of data.points) {
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

    getPoints(segments = 200): Vector3[] {
        return this.path.getPoints(segments);
    }
}
