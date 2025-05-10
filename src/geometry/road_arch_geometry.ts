import { ExtrudeGeometry, ExtrudeGeometryOptions, Shape } from "three";

interface RoadArchGeometryParams {
    radius?: number;
    depth?: number;
}

export class RoadArchGeometry {
    private static readonly DEFAULT_RADIUS = 2;
    private static readonly DEFAULT_DEPTH = 1;
    private static readonly DELTA = 0.01;
    public geometry;

    constructor(optionalParams: RoadArchGeometryParams) {
        const params = this.setParams(optionalParams);
        const shape = this.createShapeForExtrusion(params.radius);
        this.geometry = this.createExtrudeGeometry(shape, {
            depth: params.depth,
            bevelEnabled: false,
        });
    }

    private setParams(params: RoadArchGeometryParams) {
        return {
            radius: params.radius ?? RoadArchGeometry.DEFAULT_RADIUS,
            depth: params.depth ?? RoadArchGeometry.DEFAULT_DEPTH,
        };
    }

    private createShapeForExtrusion(radius: number) {
        const shape = new Shape();
        const delta = RoadArchGeometry.DELTA;
        shape.moveTo(-radius + delta, 0);
        shape.absarc(0, 0, radius + delta, Math.PI, 0, true);
        shape.lineTo(radius, 0);
        shape.absarc(0, 0, radius, 0, Math.PI);
        shape.lineTo(-radius - delta, 0);
        return shape;
    }

    private createExtrudeGeometry(shape: Shape, extrudeSettings: ExtrudeGeometryOptions) {
        return new ExtrudeGeometry(shape, extrudeSettings);
    }
}
