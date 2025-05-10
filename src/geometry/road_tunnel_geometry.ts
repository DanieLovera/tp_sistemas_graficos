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
        const full = radius + width;
        shape.moveTo(-full, 0);
        shape.lineTo(-radius, 0);
        shape.absarc(0, 0, radius, Math.PI, 0, true);
        shape.lineTo(full, 0);
        shape.lineTo(full, height);
        shape.lineTo(-full, height);
        shape.lineTo(-full, 0);
        return shape;
    }

    private createExtrudeGeometry(shape: Shape, extrudeSettings: ExtrudeGeometryOptions) {
        return new ExtrudeGeometry(shape, extrudeSettings);
    }
}
