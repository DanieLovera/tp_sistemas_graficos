import { MeshBasicMaterial, Mesh, FrontSide, BufferGeometry } from "three";
import { ThreeManager } from "./three_manager";
import { GroundManager } from "./ground_manager";
import { CircularBuildingGeometry } from "../geometries/circular_building_geometry";
import { EllipticalBuildingGeometry } from "../geometries/elliptical_building_geometry";
import { HexagonalBuildingGeometry } from "../geometries/hexagonal_building_geometry";
import { RectangularBuildingGeometry } from "../geometries/rectangular_building_geometry";
import { cuadratic, linear, one, sinusoidal, twist, zero } from "../utils/functions";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

interface BuildingParams {
    width?: number;
    depth?: number;
    radius?: number;
    floors: number;
    floorsHeight: number;
    type: BuildingType;
    scaleFn?: (u: number) => number;
    torsionFn?: (u: number) => number;
}

type BuildingType = "circular" | "elliptical" | "hexagonal" | "rectangular" | "none";

export class BuildingsManager {
    private scene;
    private meshes;

    constructor(ground: GroundManager) {
        const threeManager = ThreeManager.getInstance();
        const geometries = this.createBuildingsGeometry(ground);
        this.meshes = this.createMeshes(geometries);
        this.scene = threeManager.scene;
    }

    private createBuildingsGeometry(ground: GroundManager) {
        const buildingLots = ground.getEmptyLots();
        const geometries = [];

        for (const lot of buildingLots) {
            const buildingParams = this.generateRandomBuildingParams();
            const buildingGeometry = this.createBuildingGeometry(buildingParams);
            if (!buildingGeometry) {
                continue;
            }
            lot.placeGeometry(buildingGeometry.geometry, 0.8);
            geometries.push(buildingGeometry.geometry);
        }
        return geometries;
    }

    private createMeshes(geometries: BufferGeometry[]) {
        const buildingGeometries = mergeGeometries(geometries);
        const buildingMaterial = new MeshBasicMaterial({ color: 0xffff, wireframe: true, side: FrontSide });
        const buldingMesh = new Mesh(buildingGeometries, buildingMaterial);
        return buldingMesh;
    }

    private generateRandomBuildingParams(): BuildingParams {
        const widthOptions = [5, 6, 7, 8, 9, 10];
        const depthOptions = [5, 6, 7, 8, 9, 10];
        const radiusOptions = [3, 4, 5, 6];
        const floorsOptions = [10, 15, 20, 25, 30];
        const floorsHeightOptions = [3, 3, 3, 3, 6];
        const typeOptions = ["circular", "elliptical", "hexagonal", "rectangular", "none"];
        const scaleFnOptions = [linear(1, 0.5), sinusoidal(1, 1, 4), one];
        const torsionFnOptions = [twist(0.5), cuadratic(2, 0), zero];

        const type = this.getRandomElement(typeOptions) as BuildingType;
        return {
            type,
            width: this.getRandomElement(widthOptions),
            depth: this.getRandomElement(depthOptions),
            radius: this.getRandomElement(radiusOptions),
            floors: this.getRandomElement(floorsOptions),
            floorsHeight: this.getRandomElement(floorsHeightOptions),
            scaleFn: this.getRandomElement(scaleFnOptions),
            torsionFn: this.getRandomElement(torsionFnOptions),
        };
    }

    private getRandomElement<T>(array: T[]): T {
        const index = Math.floor(Math.random() * array.length);
        return array[index];
    }

    private createBuildingGeometry(buildingParams: BuildingParams) {
        if (buildingParams.type === "circular") {
            const circularBuildingGeometry = new CircularBuildingGeometry({
                radius: buildingParams.radius,
                axialSegments: buildingParams.floors,
                axialSegmentsHeight: buildingParams.floorsHeight,
                scaleFn: buildingParams.scaleFn,
                torsionFn: buildingParams.torsionFn,
            });

            return circularBuildingGeometry;
        }
        if (buildingParams.type === "elliptical") {
            const ellipticalBuildingGeometry = new EllipticalBuildingGeometry({
                a: buildingParams.width,
                b: buildingParams.depth,
                axialSegments: buildingParams.floors,
                axialSegmentsHeight: buildingParams.floorsHeight,
                scaleFn: buildingParams.scaleFn,
                torsionFn: buildingParams.torsionFn,
            });
            return ellipticalBuildingGeometry;
        }
        if (buildingParams.type === "hexagonal") {
            const hexagonalBuildingGeometry = new HexagonalBuildingGeometry({
                radius: buildingParams.radius,
                axialSegments: buildingParams.floors,
                axialSegmentsHeight: buildingParams.floorsHeight,
                scaleFn: buildingParams.scaleFn,
                torsionFn: buildingParams.torsionFn,
            });
            return hexagonalBuildingGeometry;
        }
        if (buildingParams.type === "rectangular") {
            const rectangularBuildingGeometry = new RectangularBuildingGeometry({
                width: buildingParams.width,
                depth: buildingParams.depth,
                axialSegments: buildingParams.floors,
                axialSegmentsHeight: buildingParams.floorsHeight,
                scaleFn: buildingParams.scaleFn,
                torsionFn: buildingParams.torsionFn,
            });
            return rectangularBuildingGeometry;
        }
    }

    render() {
        this.scene.add(this.meshes);
    }
}
