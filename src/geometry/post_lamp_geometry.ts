import { BoxGeometry } from "three";

interface PostLampGeometryParams {
    width?: number;
    height?: number;
    depth?: number;
}

export class PostLampGeometry {
    private static readonly DEFAULT_WIDTH = 2;
    private static readonly DEFAULT_HEIGHT = 0.25;
    private static readonly DEFAULT_DEPTH = 0.5;
    public width;
    public height;
    public depth;
    public geometry;

    constructor(optionalParams: PostLampGeometryParams) {
        const params = this.setParams(optionalParams);
        this.width = params.width;
        this.height = params.height;
        this.depth = params.depth;
        this.geometry = new BoxGeometry(params.width, params.height, params.depth);
    }

    private setParams(params: PostLampGeometryParams) {
        return {
            width: params.width ?? PostLampGeometry.DEFAULT_WIDTH,
            height: params.height ?? PostLampGeometry.DEFAULT_HEIGHT,
            depth: params.depth ?? PostLampGeometry.DEFAULT_DEPTH,
        };
    }
}
