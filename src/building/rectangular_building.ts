import { Material, Mesh, MeshBasicMaterial, Scene, Vector3 } from "three";
import { ParametricGeometry } from "three/addons/geometries/ParametricGeometry.js";
import { zero, one } from "../functions";

interface RectangularBuildingParams {
    width: number;
    height: number;
    axialSegments: number;
    axialSegmentsHeight: number;
    scaleFn: (v: number) => number;
    torsionFn: (v: number) => number;
    material: Material;
}

type OptionalRectangularBuildingParams = Partial<RectangularBuildingParams>;

class RectangularBuilding {
    private static readonly DEFAULT_WIDTH = 1;
    private static readonly DEFAULT_HEIGHT = 1;
    private static readonly DEFAULT_RADIAL_SEGMENTS = 4;
    private static readonly DEFAULT_AXIAL_SEGMENTS = 5;
    private static readonly DEFAULT_AXIAL_SEGMENTS_HEIGHT = 1;
    private static readonly DEFAULT_MATERIAL = new MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
    private width;
    private height;
    private axialSegments;
    private axialSegmentsHeight;
    private scaleFn;
    private torsionFn;
    private mesh;

    constructor(optionalParams: OptionalRectangularBuildingParams) {
        const params = this.setParams(optionalParams);
        this.width = params.width;
        this.height = params.height;
        this.axialSegments = params.axialSegments;
        this.axialSegmentsHeight = params.axialSegmentsHeight;
        this.scaleFn = params.scaleFn;
        this.torsionFn = params.torsionFn;

        const geometry = new ParametricGeometry(
            this.mappingFn,
            RectangularBuilding.DEFAULT_RADIAL_SEGMENTS,
            this.axialSegments,
        );
        this.mesh = new Mesh(geometry, params.material);
    }

    private setParams(params: OptionalRectangularBuildingParams) {
        return {
            width: params.width ?? RectangularBuilding.DEFAULT_WIDTH,
            height: params.height ?? RectangularBuilding.DEFAULT_HEIGHT,
            axialSegments: params.axialSegments ?? RectangularBuilding.DEFAULT_AXIAL_SEGMENTS,
            axialSegmentsHeight: params.axialSegmentsHeight ?? RectangularBuilding.DEFAULT_AXIAL_SEGMENTS_HEIGHT,
            scaleFn: params.scaleFn ?? one,
            torsionFn: params.torsionFn ?? zero,
            material: params.material ?? RectangularBuilding.DEFAULT_MATERIAL,
        };
    }

    private rectangularProfile(u: number): [number, number] {
        const rectangleSides = 4;
        const w = this.width;
        const h = this.height;
        const corner = u * rectangleSides;

        if (corner < 1) {
            return [-w / 2 + w * corner, -h / 2];
        } else if (corner < 2) {
            return [w / 2, -h / 2 + h * (corner - 1)];
        } else if (corner < 3) {
            return [w / 2 - w * (corner - 2), h / 2];
        } else {
            return [-w / 2, h / 2 - h * (corner - 3)];
        }
    }

    private mappingFn = (u: number, v: number, target: Vector3) => {
        const [x, z] = this.rectangularProfile(u);
        const scale = this.scaleFn(v);
        const torsion = this.torsionFn(v);
        const xt = scale * (x * Math.cos(torsion) - z * Math.sin(torsion));
        const zt = scale * (x * Math.sin(torsion) + z * Math.cos(torsion));
        const y = v * this.axialSegments * this.axialSegmentsHeight;

        target.set(xt, y, zt);
    };

    insert(scene: Scene) {
        scene.add(this.mesh);
    }
}

export { RectangularBuilding };
export type { RectangularBuildingParams };
