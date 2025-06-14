import { BezierCurve } from "../utils/bezier_curve";

interface PostGeometryParams {
    width?: number;
    height?: number;
    radius?: number;
}

export class PostGeometry {
    private static readonly K = 0.8;
    private static readonly RADIUS = 0.1;
    private static readonly RADIAL_SEGMENTS = 10;
    private static readonly CURVE_SEGMENTS = 50;
    private static readonly DEFAULT_WIDTH = 1;
    private static readonly DEFAULT_HEIGHT = 4;
    public width;
    public height;
    public radius;
    public geometry;

    constructor(optionalParams: PostGeometryParams) {
        const params = this.setParams(optionalParams);
        this.width = params.width;
        this.height = params.height;
        this.radius = params.radius;
        const curve = this.createPostCurve(params.width, params.height);
        const geometry = this.createParametricGeometry(params.radius, curve);
        this.geometry = geometry;
    }

    private setParams(params: PostGeometryParams) {
        return {
            width: params.width ?? PostGeometry.DEFAULT_WIDTH,
            height: params.height ?? PostGeometry.DEFAULT_HEIGHT,
            radius: params.radius ?? PostGeometry.RADIUS,
        };
    }

    private createPostCurve(width: number, height: number) {
        const controlPoints = [
            [
                [0, 0, 0],
                [0, height * PostGeometry.K, 0],
                [0, height * PostGeometry.K, 0],
            ],
            [
                [0, height * PostGeometry.K, 0],
                [0, height, 0],
                [0, height, 0],
                [width, height, 0],
            ],
        ];

        const postCurve = new BezierCurve({
            points: controlPoints,
            segments: PostGeometry.CURVE_SEGMENTS,
            closed: false,
        });
        return postCurve;
    }

    private createParametricGeometry(radius: number, curve: BezierCurve) {
        const mappingFn = (u: number, _v: number): [number, number, number] => {
            const x = radius * Math.cos(2 * Math.PI * u);
            const y = radius * Math.sin(2 * Math.PI * u);
            return [x, y, 0];
        };

        const geometry = curve.parametricSwept(mappingFn, PostGeometry.RADIAL_SEGMENTS);
        return geometry;
    }
}
