import { ShapeGeometry } from "three";
import { CatmullRom, Orientation } from "../utils/catmull_rom";
import { linear } from "../utils/functions";
import { ParametricShape } from "../utils/parametric_shape";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

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
        const bodyGeometry = this.createParametricGeometry(params.width, params.height, params.curve);
        const capGeometry = this.createCapGeometry(params.curve, params.width, params.height);
        this.geometry = mergeGeometries([bodyGeometry, capGeometry]);
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

    private createCapGeometry(curve: CatmullRom, width: number, height: number) {
        const profileShape = new ParametricShape({
            mappingFn: this.rectangularProfile(width, height),
            segments: RoadRampGeometry.PROFILE_SIDES,
        });

        const geometry = new ShapeGeometry(profileShape.shape);
        const m = curve.getSweptMatrix(this.reverse ? 0 : 1, 0, Orientation.Inside);
        geometry.applyMatrix4(m);
        return geometry;
    }

    private rectangularProfile = (width: number, height: number) => {
        return (u: number): [number, number] => {
            const side = u * RoadRampGeometry.PROFILE_SIDES;
            if (side < 1) {
                return [-width / 2, height * side];
            } else if (side < 2) {
                return [-width / 2 + width * (side - 1), height];
            } else if (side < 3) {
                return [width / 2, height - height * (-side + 2)];
            } else {
                return [width / 2 - width * (side - 3), 0];
            }
        };
    };
}
