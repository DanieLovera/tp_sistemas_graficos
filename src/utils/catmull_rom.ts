import { CatmullRomCurve3, ExtrudeGeometry, ExtrudeGeometryOptions, Shape, Vector3 } from "three";
import { ParametricGeometry } from "three/examples/jsm/Addons.js";

interface CurveParams {
    controlPoints: number[][];
    segments?: number;
    closed?: boolean;
}

type ExtrudeSettings = Omit<ExtrudeGeometryOptions, "steps | depth" | "extrudePath">;

class CatmullRom {
    private static readonly DEFAULT_CLOSED = true;
    private static readonly DEFAULT_SEGMENTS = 200;
    private segments;
    private closed;
    private curve;

    constructor(optionalParams: CurveParams) {
        const params = this.setParams(optionalParams);
        this.segments = params.segments;
        this.closed = params.closed;
        this.curve = this.createPath(params);
    }

    setParams(params: CurveParams) {
        return {
            controlPoints: params.controlPoints,
            segments: params.segments ?? CatmullRom.DEFAULT_SEGMENTS,
            closed: params.closed ?? CatmullRom.DEFAULT_CLOSED,
        };
    }

    createPath(params: CurveParams) {
        const controlPoints = params.controlPoints.map((point) => new Vector3(...point));
        const curve = new CatmullRomCurve3(controlPoints, params.closed, "catmullrom");
        return curve;
    }

    extrude(shape: Shape, extrudeSettings: ExtrudeSettings) {
        const geometry = new ExtrudeGeometry(shape, {
            ...extrudeSettings,
            steps: this.segments,
            extrudePath: this.curve,
        });
        return geometry;
    }

    parametricSwept(mappingFn: (u: number, v: number, target: Vector3) => void, slices: number) {
        const geometry = new ParametricGeometry(mappingFn, slices, this.segments);
        return geometry;
    }

    computeFrenetFrames() {
        const vectors = this.curve.computeFrenetFrames(this.segments, this.closed);
        return { ...vectors, segments: this.segments };
    }

    getPointAt(u: number) {
        return this.curve.getPointAt(u);
    }
}

export { CatmullRom };
export type { ExtrudeSettings };
