import { CatmullRom, Orientation } from "../utils/catmull_rom";

interface RoadGeometryParams {
    controlPoints: number[][];
    width?: number;
    height?: number;
    segments?: number;
}

class RoadGeometry {
    private static readonly DEFAULT_WIDTH = 4;
    private static readonly DEFAULT_HEIGHT = 0.2;
    private static readonly DEFAULT_SEGMENTS = 200;
    private width;
    private segments;
    private curve;
    public geometry;

    constructor(optionalParams: RoadGeometryParams) {
        const params = this.setParams(optionalParams);
        this.width = params.width;
        this.segments = params.segments;
        this.curve = new CatmullRom({ controlPoints: params.controlPoints, segments: params.segments });
        this.geometry = this.createGeometry(params.width, params.height);
    }

    private setParams(params: RoadGeometryParams) {
        return {
            controlPoints: params.controlPoints,
            width: params.width ?? RoadGeometry.DEFAULT_WIDTH,
            height: params.height ?? RoadGeometry.DEFAULT_HEIGHT,
            segments: params.segments ?? RoadGeometry.DEFAULT_SEGMENTS,
        };
    }

    private createGeometry(width: number, height: number) {
        const mappingFn = (u: number, _v: number): [number, number, number] => {
            const w = -(u - 0.5);
            return [0, 2 * w * width, 0];
        };
        const geometry = this.curve.parametricSwept(mappingFn, 2);
        geometry.translate(0, height, 0);
        return geometry;
    }

    createSubroad(from: number, to: number) {
        const distance = to - from;
        const segments = Math.ceil(distance * this.segments);
        const controlPoints = [];
        for (let i = 0; i <= segments; ++i) {
            const u = from + i * ((to - from) / segments);
            const point = this.curve.getPointAt(u).toArray();
            controlPoints.push(point);
        }
        const subcurve = new CatmullRom({ controlPoints: controlPoints, segments, closed: false });
        return subcurve;
    }

    getSweptMatrixFromInside(u: number, distance = 0) {
        return this.getSweptMatrix(u, Orientation.Inside, this.width + distance);
    }

    getSweptMatrixFromOutside(u: number, distance = 0) {
        return this.getSweptMatrix(u, Orientation.Outside, this.width + distance);
    }

    getSweptMatrix(u: number, orientation: Orientation, distance = 0) {
        const matrix = this.curve.getSweptMatrix(u, distance, orientation);
        return matrix;
    }
}

export { RoadGeometry };
export type { RoadGeometryParams };
