import { Shape } from "three";

interface ParametricShapeParams {
    mappingFn: (u: number) => [number, number];
    segments: number;
}

class ParametricShape {
    public shape;

    constructor(params: ParametricShapeParams) {
        const points = this.createPointsProfile(params.mappingFn, params.segments);
        this.shape = this.createShape(points);
    }

    private createPointsProfile(mappingFn: (u: number) => [number, number], segments: number, ) {
        const points = [];
        for (let i = 0; i <= segments; ++i) {
            const [x, y] = mappingFn(i / segments);
            points.push({ x, y });
        }
        return points;
    }

    private createShape(points: { x: number; y: number }[]) {
        const shape = new Shape();
        shape.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            shape.lineTo(points[i].x, points[i].y);
        }
        return shape;
    }
}

export { ParametricShape };
