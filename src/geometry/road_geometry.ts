import { Shape } from "three";
import { CatmullRom, ExtrudeSettings, Orientation } from "../utils/catmull_rom";

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
        const shape = this.createShapeForExtrusion(params.width, params.height);
        this.width = params.width;
        this.segments = params.segments;
        this.curve = new CatmullRom({ controlPoints: params.controlPoints, segments: params.segments });
        this.geometry = this.createExtrudeGeometry(shape, this.curve, {
            bevelEnabled: false,
        });
    }

    private setParams(params: RoadGeometryParams) {
        return {
            controlPoints: params.controlPoints,
            width: params.width ?? RoadGeometry.DEFAULT_WIDTH,
            height: params.height ?? RoadGeometry.DEFAULT_HEIGHT,
            segments: params.segments ?? RoadGeometry.DEFAULT_SEGMENTS,
        };
    }

    private createShapeForExtrusion(width: number, height: number): Shape {
        const shape = new Shape();
        shape.moveTo(-height, -width);
        shape.lineTo(0, -width);
        shape.lineTo(0, width);
        shape.lineTo(-height, width);
        shape.lineTo(-height, -width);
        return shape;
    }

    private createExtrudeGeometry(shape: Shape, curve: CatmullRom, extrudeSettings: ExtrudeSettings) {
        return curve.extrude(shape, extrudeSettings);
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
        return this.getSweptMatrix(u, this.width + distance, Orientation.Inside);
    }

    getSweptMatrixFromOutside(u: number, distance = 0) {
        return this.getSweptMatrix(u, this.width + distance, Orientation.Outside);
    }

    getSweptMatrix(u: number, distance = 0, orientation : Orientation) {
        const matrix = this.curve.getSweptMatrix(u, distance, orientation);
        return matrix;
    }
}

export { RoadGeometry };
export type { RoadGeometryParams };
