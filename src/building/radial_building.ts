import { Material, MeshBasicMaterial, Vector3 } from "three";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { zero, one } from "../functions";

interface RadialBuildingParams {
    a: number;
    b: number;
    radialSegments: number;
    axialSegments: number;
    axialSegmentsHeight: number;
    scaleFn: (u: number) => number;
    torsionFn: (u: number) => number;
    material: Material;
}

type OptionalRadialBuildingParams = Partial<RadialBuildingParams>;

class RadialBuilding {
    private static readonly DEFAULT_A = 1;
    private static readonly DEFAULT_B = 1;
    private static readonly DEFAULT_RADIAL_SEGMENTS = 10;
    private static readonly DEFAULT_AXIAL_SEGMENTS = 5;
    private static readonly DEFAULT_AXIAL_SEGMENTS_HEIGHT = 1;
    private static readonly DEFAULT_MATERIAL = new MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
    private a;
    private b;
    private axialSegments;
    private axialSegmentsHeight;
    private scaleFn;
    private torsionFn;
    public geometry;
    public material;

    constructor(optionalParams: OptionalRadialBuildingParams) {
        const params = this.setParams(optionalParams);
        this.a = params.a;
        this.b = params.b;
        this.axialSegments = params.axialSegments;
        this.axialSegmentsHeight = params.axialSegmentsHeight;
        this.scaleFn = params.scaleFn;
        this.torsionFn = params.torsionFn;
        this.geometry = new ParametricGeometry(this.mappingFn, params.radialSegments, this.axialSegments);
        this.material = params.material;
    }

    private setParams(params: OptionalRadialBuildingParams) {
        return {
            a: params.a ?? RadialBuilding.DEFAULT_A,
            b: params.b ?? RadialBuilding.DEFAULT_B,
            axialSegmentsHeight: params.axialSegmentsHeight ?? RadialBuilding.DEFAULT_AXIAL_SEGMENTS_HEIGHT,
            radialSegments: params.radialSegments ?? RadialBuilding.DEFAULT_RADIAL_SEGMENTS,
            axialSegments: params.axialSegments ?? RadialBuilding.DEFAULT_AXIAL_SEGMENTS,
            scaleFn: params.scaleFn ?? one,
            torsionFn: params.torsionFn ?? zero,
            material: params.material ?? RadialBuilding.DEFAULT_MATERIAL,
        };
    }

    private mappingFn = (u: number, v: number, target: Vector3) => {
        const [x, z] = this.ellipticalProfile(u);
        const scale = this.scaleFn(v);
        const torsion = this.torsionFn(v);
        const xt = scale * (x * Math.cos(torsion) - z * Math.sin(torsion));
        const zt = scale * (x * Math.sin(torsion) + z * Math.cos(torsion));
        const y = v * this.axialSegments * this.axialSegmentsHeight;

        target.set(xt, y, zt);
    };

    private ellipticalProfile(u: number) {
        const x = this.a * Math.cos(2 * Math.PI * u);
        const y = this.b * Math.sin(2 * Math.PI * u);
        return [x, y];
    }
}

export { RadialBuilding };
export type { RadialBuildingParams };
