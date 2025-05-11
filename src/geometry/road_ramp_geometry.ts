import { Matrix4, Vector3 } from "three";
import { CatmullRom } from "../utils/catmull_rom";
import { linear } from "../utils/functions";

interface RoadRampGeometryParams {
    curve: CatmullRom;
    width?: number;
    height?: number;
    reverse?: boolean;
}

export class RoadRampGeometry {
    private static readonly PROFILE_SIDES = 4;
    private static readonly DEFAULT_WIDTH = 4;
    private static readonly DEFAULT_HEIGHT = 1;
    private static readonly DEFAULT_REVERSE = false;
    private reverse;
    public geometry;

    constructor(optionalParams: RoadRampGeometryParams) {
        const params = this.setParams(optionalParams);
        this.reverse = params.reverse;
        this.geometry = this.createParametricGeometry(params.width, params.height, params.curve);
    }

    private setParams(params: RoadRampGeometryParams) {
        return {
            curve: params.curve,
            width: params.width ?? RoadRampGeometry.DEFAULT_WIDTH,
            height: params.height ?? RoadRampGeometry.DEFAULT_HEIGHT,
            reverse: params.reverse ?? RoadRampGeometry.DEFAULT_REVERSE,
        };
    }

    private createParametricGeometry(width: number, height: number, curve: CatmullRom) {
        const { segments, tangents, normals, binormals } = curve.computeFrenetFrames();
        const geometry = curve.parametricSwept((u: number, v: number, target: Vector3) => {
            const [x, y, z] = this.getRectanglePoint(u, v, width, height);
            const point = new Vector3(x, y, z);

            const index = Math.floor(v * segments);
            const tangent = tangents[index];
            const normal = normals[index];
            const binormal = binormals[index];
            const curvePoint = curve.getPointAt(v);
            const sweptMatrix = new Matrix4().makeBasis(normal, binormal, tangent);
            sweptMatrix.setPosition(curvePoint);
            point.applyMatrix4(sweptMatrix);
            target.set(point.x, point.y, point.z);
        }, RoadRampGeometry.PROFILE_SIDES);

        return geometry;
    }

    private getRectanglePoint(u: number, v: number, width: number, height: number) {
        const [x, y] = (() => {
            const side = u * RoadRampGeometry.PROFILE_SIDES;
            const scaleFn = linear(height);
            height = this.reverse ? scaleFn(v) : scaleFn(1 - v);

            if (side < 1) {
                return [-height * side, -width / 2];
            } else if (side < 2) {
                return [-height, -width / 2 + width * (side - 1)];
            } else if (side < 3) {
                return [-height + height * (side - 2), width / 2];
            } else {
                return [0, width / 2 - width * (side - 3)];
            }
        })();
        return [x, y, 0];
    }
}
