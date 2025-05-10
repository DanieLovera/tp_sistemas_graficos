import { ExtrudeGeometry, ExtrudeGeometryOptions, Shape } from "three";

interface RoadRampGeometryParams {
    width?: number;
    height?: number;
    depth?: number;
}

export class RoadRampGeometry {
    private static readonly DEFAULT_WIDTH = 4;
    private static readonly DEFAULT_HEIGHT = 1;
    private static readonly DEFAULT_DEPTH = 3;
    public geometry;

    constructor(optionalParams: RoadRampGeometryParams) {
        const params = this.setParams(optionalParams);
        const shape = this.createShapeForExtrusion(params.depth, params.height);
        this.geometry = this.createExtrudeGeometry(shape, {
            depth: params.width,
            bevelEnabled: false,
        });
    }

    setParams(params: RoadRampGeometryParams) {
        return {
            width: params.width ?? RoadRampGeometry.DEFAULT_WIDTH,
            height: params.height ?? RoadRampGeometry.DEFAULT_HEIGHT,
            depth: params.depth ?? RoadRampGeometry.DEFAULT_DEPTH,
        };
    }

    private createShapeForExtrusion(width: number, height: number) {
        const shape = new Shape();
        shape.moveTo(0, 0);
        shape.lineTo(0, height);
        shape.lineTo(width, 0);
        shape.lineTo(0, 0);
        return shape;
    }

    private createExtrudeGeometry(shape: Shape, extrudeSettings: ExtrudeGeometryOptions) {
        const geometry = new ExtrudeGeometry(shape, extrudeSettings);
        return geometry;
    }
}
