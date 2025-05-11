import { Shape } from "three";
import { CatmullRom, ExtrudeSettings } from "../utils/catmull_rom";

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
    private curve;
    public geometry;

    constructor(optionalParams: RoadGeometryParams) {
        const params = this.setParams(optionalParams);
        const shape = this.createShapeForExtrusion(params.width, params.height);
        this.curve = new CatmullRom({ controlPoints: params.controlPoints });
        this.geometry = this.createExtrudeGeometry(shape, this.curve, {
            steps: params.segments,
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
        const halfWidth = height / 2;
        const halfHeight = width / 2;
        shape.moveTo(-halfWidth, -halfHeight);
        shape.lineTo(halfWidth, -halfHeight);
        shape.lineTo(halfWidth, halfHeight);
        shape.lineTo(-halfWidth, halfHeight);
        return shape;
    }

    private createExtrudeGeometry(shape: Shape, curve: CatmullRom, extrudeSettings: ExtrudeSettings) {
        return curve.extrude(shape, extrudeSettings);
    }

    createSubroad(from: number, to: number, segments: number) {
        const controlPoints = [];
        for (let i = 0; i <= segments; ++i) {
            const u = from + i * ((to - from) / segments);
            const point = this.curve.getPointAt(u).toArray();
            controlPoints.push(point);
        }
        const subcurve = new CatmullRom({ controlPoints: controlPoints, segments, closed: false });
        return subcurve;
    }
}

export { RoadGeometry };
export type { RoadGeometryParams };
