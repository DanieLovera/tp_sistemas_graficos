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
        const mappingFn = (u: number, v: number): [number, number, number] => {
            const [x, y] = (() => {
                const side = u * RoadRampGeometry.PROFILE_SIDES;
                const scaleFn = linear(height);
                const newHeight = this.reverse ? scaleFn(v) : scaleFn(1 - v);

                if (side < 1) {
                    return [-newHeight * side, -width / 2];
                } else if (side < 2) {
                    return [-newHeight, -width / 2 + width * (side - 1)];
                } else if (side < 3) {
                    return [-newHeight + newHeight * (side - 2), width / 2];
                } else {
                    return [0, width / 2 - width * (side - 3)];
                }
            })();
            return [x, y, 0];
        };

        const geometry = curve.parametricSwept(mappingFn, RoadRampGeometry.PROFILE_SIDES);
        return geometry;
    }
}
