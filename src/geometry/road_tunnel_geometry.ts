import { ExtrudeGeometry, ExtrudeGeometryOptions, Shape } from "three";

interface RoadTunnelGeometryParams {
    width?: number;
    height?: number;
    depth?: number;
    radius?: number;
}

export class RoadTunnelGeometry {
    private static readonly DEFAULT_WIDTH = 2;
    private static readonly DEFAULT_HEIGHT = 4;
    private static readonly DEFAULT_DEPTH = 8;
    private static readonly DEFAULT_RADIUS = 3;
    public geometry;

    constructor(optionalParams: RoadTunnelGeometryParams) {
        const params = this.setParams(optionalParams);
        const shape = this.createShapeForExtrusion(params.width, params.height, params.radius);
        this.geometry = this.createExtrudeGeometry(shape, {
            depth: params.depth,
            bevelEnabled: false,
        });
    }

    private setParams(params: RoadTunnelGeometryParams) {
        return {
            width: params.width ?? RoadTunnelGeometry.DEFAULT_WIDTH,
            height: params.height ?? RoadTunnelGeometry.DEFAULT_HEIGHT,
            depth: params.depth ?? RoadTunnelGeometry.DEFAULT_DEPTH,
            radius: params.radius ?? RoadTunnelGeometry.DEFAULT_RADIUS,
        };
    }

    private createShapeForExtrusion(width: number, height: number, radius: number) {
        const shape = new Shape();
        shape.moveTo(-(radius + width), 0);
        shape.lineTo(-(radius + width) + width, 0);
        shape.absarc(0, 0, radius, Math.PI, 0, true); // inner arc, clockwise
        shape.lineTo(radius + width, 0); // close the shape manually
        shape.lineTo(radius + width, height); // close the shape manually
        shape.lineTo(-(radius + width), height); // close the shape manually
        shape.lineTo(-(radius + width), 0); // close the shape manually
        return shape;
    }

    private createExtrudeGeometry(shape: Shape, extrudeSettings: ExtrudeGeometryOptions) {
        return new ExtrudeGeometry(shape, extrudeSettings);
    }
}
