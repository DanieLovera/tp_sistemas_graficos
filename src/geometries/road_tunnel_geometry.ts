import { ExtrudeGeometryOptions, Shape } from "three";
import { CatmullRom } from "../utils/catmull_rom";

interface RoadTunnelGeometryParams {
    curve: CatmullRom;
    width?: number;
    height?: number;
    radius?: number;
}

export class RoadTunnelGeometry {
    private static readonly DEFAULT_WIDTH = 2;
    private static readonly DEFAULT_HEIGHT = 4;
    private static readonly DEFAULT_RADIUS = 3;
    public geometry;

    constructor(optionalParams: RoadTunnelGeometryParams) {
        const params = this.setParams(optionalParams);
        const shape = this.createShapeForExtrusion(params.width, params.height, params.radius);
        this.geometry = this.createExtrudeGeometry(shape, params.curve, {
            bevelEnabled: false,
        });
    }

    private setParams(params: RoadTunnelGeometryParams) {
        return {
            curve: params.curve,
            width: params.width ?? RoadTunnelGeometry.DEFAULT_WIDTH,
            height: params.height ?? RoadTunnelGeometry.DEFAULT_HEIGHT,
            radius: params.radius ?? RoadTunnelGeometry.DEFAULT_RADIUS,
        };
    }

    private createShapeForExtrusion(width: number, height: number, radius: number) {
        const shape = new Shape();
        shape.moveTo(0, radius + width);
        shape.lineTo(0, radius + width - width);
        shape.absarc(0, 0, radius, Math.PI / 2, -Math.PI / 2, false);
        shape.lineTo(0, -(radius + width));
        shape.lineTo(-height, -(radius + width));
        shape.lineTo(-height, radius + width);
        shape.lineTo(0, radius + width);
        return shape;
    }

    private createExtrudeGeometry(shape: Shape, curve: CatmullRom, extrudeSettings: ExtrudeGeometryOptions) {
        const geometry = curve.extrude(shape, extrudeSettings);
        return geometry;
    }
}
