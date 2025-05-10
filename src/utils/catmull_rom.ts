import { CatmullRomCurve3, ExtrudeGeometry, ExtrudeGeometryOptions, Shape, Vector3 } from "three";

interface CurveParams {
    controlPoints: number[][];
}

type ExtrudeSettings = Omit<ExtrudeGeometryOptions, "depth" | "extrudePath">;

class CatmullRom {
    private curve;

    constructor(data: CurveParams) {
        this.curve = this.createPath(data);
    }

    createPath(data: CurveParams) {
        const controlPoints = data.controlPoints.map((point) => new Vector3(...point));
        const curve = new CatmullRomCurve3(controlPoints, true, "catmullrom");
        return curve;
    }

    extrude(shape: Shape | Shape[], extrudeSettings: ExtrudeSettings) {
        const geometry = new ExtrudeGeometry(shape, { ...extrudeSettings, extrudePath: this.curve });
        return geometry;
    }
}

export { CatmullRom };
export type { ExtrudeSettings };
