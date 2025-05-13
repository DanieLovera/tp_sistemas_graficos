import { BezierCurve } from "../utils/bezier_curve";

interface StreetlightPostGeometryParams {
    width?: number;
    height?: number;
}

export class StreetlightPostGeometry {
    private static readonly K = 0.8;
    private static readonly RADIUS = 0.1;
    private static readonly RADIAL_SEGMENTS = 10;
    private static readonly CURVE_SEGMENTS = 50;
    private static readonly DEFAULT_WIDTH = 1;
    private static readonly DEFAULT_HEIGHT = 4;
    public geometry;

    constructor(optionalParams: StreetlightPostGeometryParams) {
        const params = this.setParams(optionalParams);
        const curve = this.createPostCurve(params.width, params.height);
        this.geometry = this.createParametricGeometry(curve);
    }

    private setParams(params: StreetlightPostGeometryParams) {
        return {
            width: params.width ?? StreetlightPostGeometry.DEFAULT_WIDTH,
            height: params.height ?? StreetlightPostGeometry.DEFAULT_HEIGHT,
        };
    }

    private createPostCurve(width: number, height: number) {
        const controlPoints = [
            [
                [0, 0, 0],
                [0, height * StreetlightPostGeometry.K, 0],
                [0, height * StreetlightPostGeometry.K, 0],
            ],
            [
                [0, height * StreetlightPostGeometry.K, 0],
                [0, height, 0],
                [0, height, 0],
                [width, height, 0],
            ],
        ];

        const postCurve = new BezierCurve({
            points: controlPoints,
            segments: StreetlightPostGeometry.CURVE_SEGMENTS,
            closed: false,
        });
        return postCurve;
    }

    private createParametricGeometry(curve: BezierCurve) {
        const mappingFn = (u: number, _v: number): [number, number, number] => {
            const x = StreetlightPostGeometry.RADIUS * Math.cos(2 * Math.PI * u);
            const y = StreetlightPostGeometry.RADIUS * Math.sin(2 * Math.PI * u);
            return [x, y, 0];
        };

        const geometry = curve.parametricSwept(mappingFn, StreetlightPostGeometry.RADIAL_SEGMENTS);
        return geometry;
    }
}
