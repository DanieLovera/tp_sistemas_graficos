import { ExtrudeGeometryOptions, Shape } from "three";
import { CatmullRom } from "../utils/catmull_rom";

interface RoadArchGeometryParams {
    curve: CatmullRom;
    radius?: number;
}

export class RoadArchGeometry {
    private static readonly DEFAULT_RADIUS = 2;
    private static readonly DELTA = 0.01;
    public geometry;

    constructor(optionalParams: RoadArchGeometryParams) {
        const params = this.setParams(optionalParams);
        const shape = this.createShapeForExtrusion(params.radius);
        this.geometry = this.createExtrudeGeometry(shape, params.curve, {
            bevelEnabled: false,
        });
    }

    private setParams(params: RoadArchGeometryParams) {
        return {
            curve: params.curve,
            radius: params.radius ?? RoadArchGeometry.DEFAULT_RADIUS,
        };
    }

    private createShapeForExtrusion(radius: number) {
        const shape = new Shape();
        const delta = RoadArchGeometry.DELTA;
        shape.moveTo(0, radius - delta);
        shape.absarc(0, 0, radius + delta, Math.PI / 2, -Math.PI / 2, false);
        shape.lineTo(0, -radius);
        shape.absarc(0, 0, radius, -Math.PI / 2, Math.PI / 2, true);
        shape.lineTo(0, radius + delta);
        return shape;
    }

    private createExtrudeGeometry(shape: Shape, curve: CatmullRom, extrudeSettings: ExtrudeGeometryOptions) {
        const geometry = curve.extrude(shape, extrudeSettings);
        return geometry;
    }
}
