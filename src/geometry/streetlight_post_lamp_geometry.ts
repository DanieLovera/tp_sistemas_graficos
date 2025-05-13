import { BoxGeometry } from "three";

interface StreetlightPostLampGeometryParams {
    width?: number;
    height?: number;
    depth?: number;
}

export class StreetlightPostLampGeometry {
    private static readonly DEFAULT_WIDTH = 2;
    private static readonly DEFAULT_HEIGHT = 0.25;
    private static readonly DEFAULT_DEPTH = 0.5;
    public geometry;

    constructor(optionalParams: StreetlightPostLampGeometryParams) {
        const params = this.setParams(optionalParams);
        this.geometry = new BoxGeometry(params.width, params.height, params.depth);
    }

    private setParams(params: StreetlightPostLampGeometryParams) {
        return {
            width: params.width ?? StreetlightPostLampGeometry.DEFAULT_WIDTH,
            height: params.height ?? StreetlightPostLampGeometry.DEFAULT_HEIGHT,
            depth: params.depth ?? StreetlightPostLampGeometry.DEFAULT_DEPTH,
        };
    }
}
