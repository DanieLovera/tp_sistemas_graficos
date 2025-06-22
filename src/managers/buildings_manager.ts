import {
    Mesh,
    BufferGeometry,
    TextureLoader,
    RepeatWrapping,
    MeshStandardMaterial,
    Texture,
    Color,
} from "three";
import { ThreeManager } from "./three_manager";
import { GroundManager } from "./ground_manager";
import { CircularBuildingGeometry } from "../geometries/circular_building_geometry";
import { EllipticalBuildingGeometry } from "../geometries/elliptical_building_geometry";
import { HexagonalBuildingGeometry } from "../geometries/hexagonal_building_geometry";
import { RectangularBuildingGeometry } from "../geometries/rectangular_building_geometry";
import { cuadratic, linear, one, sinusoidal, twist, zero } from "../utils/functions";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";
import * as config from "../config/buidling_textures.json";

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

interface BuildingTextures {
    daylight: TextureSet[];
    nightlight: TextureSet[];
}

interface TextureSet {
    colorMap?: Texture;
    emissionMap?: Texture;
    normalMap?: Texture;
    roughnessMap?: Texture;
    metalnessMap?: Texture;
    color?: Color;
}

interface BuildingsBuffer {
    bodies: BufferGeometry[];
    caps: BufferGeometry[];
}

export class BuildingsManager {
    private scene;
    private meshes;
    private buildingTextures;
    private buildingsBuffer;

    constructor(ground: GroundManager) {
        const threeManager = ThreeManager.getInstance();
        this.buildingTextures = this.createBuildingTextures();
        this.buildingsBuffer = this.createBuildingsGeometry(ground);
        this.meshes = this.createDaylightMeshes();
        this.scene = threeManager.scene;
    }

    private createBuildingsGeometry(ground: GroundManager) {
        const buildingLots = this.shuffle(ground.getEmptyLots());
        const buildings: BuildingsBuffer = {
            bodies: [],
            caps: [],
        };

        for (const lot of buildingLots) {
            const buildingParams = this.generateRandomBuildingParams();
            const buildingGeometry = this.createBuildingGeometry(buildingParams);
            if (!buildingGeometry) {
                continue;
            }

            const bodyGeometry = buildingGeometry.bodyGeometry;
            const capGeometry = buildingGeometry.capGeometry;

            lot.placeGeometry([bodyGeometry, capGeometry], 0.8);
            buildings.bodies.push(bodyGeometry);
            buildings.caps.push(capGeometry);
        }
        return buildings;
    }

    private generateRandomBuildingParams(): BuildingParams {
        const widthOptions = [5, 6, 7, 8, 9, 10];
        const depthOptions = [5, 6, 7, 8, 9, 10];
        const radiusOptions = [3, 4, 5, 6];
        const floorsHeightOptions = [
            20 * 0.06,
            20 * 0.07,
            20 * 0.08,
            20 * 0.09,
            20 * 0.1,
            20 * 0.11,
            20 * 0.12,
            20 * 0.13,
        ];
        const typeOptions = ["circular", "elliptical", "hexagonal", "rectangular", "none"];
        const scaleFnOptions = [linear(1, 0.5), sinusoidal(1, 1, 4), one];
        const torsionFnOptions = [twist(0.5), cuadratic(2, 0), zero];

        const type = this.getRandomElement(typeOptions) as BuildingType;
        return {
            type,
            width: this.getRandomElement(widthOptions),
            depth: this.getRandomElement(depthOptions),
            radius: this.getRandomElement(radiusOptions),
            floors: 50,
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

    private createBuildingTextures() {
        const textures: BuildingTextures = {
            daylight: [],
            nightlight: [],
        };

        const loader = new TextureLoader();
        for (const textureConfig of config.daylight) {
            const colorMap = textureConfig.colorMapPath ? loader.load(textureConfig.colorMapPath) : undefined;
            const emissionMap = textureConfig.emmisionMapPath ? loader.load(textureConfig.emmisionMapPath) : undefined;
            const normalMap = textureConfig.normalMapPath ? loader.load(textureConfig.normalMapPath) : undefined;
            const roughnessMap = textureConfig.roughnessMapPath
                ? loader.load(textureConfig.roughnessMapPath)
                : undefined;
            const metalnessMap = textureConfig.roughnessMapPath
                ? loader.load(textureConfig.roughnessMapPath)
                : undefined;
            const color = new Color(textureConfig.color);
            textures.daylight.push({
                colorMap,
                emissionMap,
                normalMap,
                roughnessMap,
                metalnessMap,
                color,
            });
        }

        for (const textureConfig of config.nightlight) {
            const colorMap = textureConfig.colorMapPath ? loader.load(textureConfig.colorMapPath) : undefined;
            const emissionMap = textureConfig.emmisionMapPath ? loader.load(textureConfig.emmisionMapPath) : undefined;
            const normalMap = textureConfig.normalMapPath ? loader.load(textureConfig.normalMapPath) : undefined;
            const roughnessMap = textureConfig.roughnessMapPath
                ? loader.load(textureConfig.roughnessMapPath)
                : undefined;
            const metalnessMap = textureConfig.roughnessMapPath
                ? loader.load(textureConfig.roughnessMapPath)
                : undefined;
            const color = new Color(textureConfig.color);
            textures.nightlight.push({
                colorMap,
                emissionMap,
                normalMap,
                roughnessMap,
                metalnessMap,
                color,
            });
        }

        const textureSets = [...textures.daylight, ...textures.nightlight];
        textureSets.forEach((textureSet: TextureSet) => {
            for (const texture of Object.values(textureSet)) {
                if (!(texture instanceof Texture)) {
                    continue;
                }
                texture.wrapS = RepeatWrapping;
                texture.wrapT = RepeatWrapping;
                texture.repeat.set(2, 7);
            }
        });
        return textures;
    }

    private createDaylightMeshes() {
        const daylightTextures = this.buildingTextures.daylight;

        const bodyMaterials = [];
        for (const textureSet of daylightTextures) {
            const bodyNaterial = new MeshStandardMaterial({
                map: textureSet.colorMap,
                normalMap: textureSet.normalMap,
                roughnessMap: textureSet.roughnessMap,
                metalnessMap: textureSet.metalnessMap,
                color: textureSet.color,
            });
            bodyMaterials.push(bodyNaterial);
        }

        const capMaterials = [];
        for (const textureSet of daylightTextures) {
            const capMaterial = new MeshStandardMaterial({ color: textureSet.color });
            capMaterials.push(capMaterial);
        }

        const ntextures = daylightTextures.length;
        const bodyMeshes = [];
        const subBodyGeometries = this.subarray(this.buildingsBuffer.bodies, ntextures);
        for (let i = 0; i < ntextures; ++i) {
            const mesh = new Mesh(mergeGeometries(subBodyGeometries[i]), bodyMaterials[i]);
            bodyMeshes.push(mesh);
        }

        const capMeshes = [];
        const subCapGeometries = this.subarray(this.buildingsBuffer.caps, ntextures);
        for (let i = 0; i < ntextures; ++i) {
            const mesh = new Mesh(mergeGeometries(subCapGeometries[i]), capMaterials[i]);
            capMeshes.push(mesh);
        }
        return [...bodyMeshes, ...capMeshes];
    }

    private createNightlightMeshes() {
        const daylightTextures = this.buildingTextures.nightlight;

        const bodyMaterials = [];
        for (const textureSet of daylightTextures) {
            const bodyNaterial = new MeshStandardMaterial({
                map: textureSet.colorMap,
                emissiveMap: textureSet.emissionMap,
                normalMap: textureSet.normalMap,
                roughnessMap: textureSet.roughnessMap,
                metalnessMap: textureSet.metalnessMap,
                color: textureSet.color,
                emissive: textureSet.emissionMap ? 0xffffff : undefined,
                emissiveIntensity: textureSet.emissionMap ? 0.7 : undefined,
            });
            bodyMaterials.push(bodyNaterial);
        }

        const capMaterials = [];
        for (const textureSet of daylightTextures) {
            const capMaterial = new MeshStandardMaterial({ color: textureSet.color });
            capMaterials.push(capMaterial);
        }

        const ntextures = daylightTextures.length;
        const bodyMeshes = [];
        const subBodyGeometries = this.subarray(this.buildingsBuffer.bodies, ntextures);
        for (let i = 0; i < ntextures; ++i) {
            const mesh = new Mesh(mergeGeometries(subBodyGeometries[i]), bodyMaterials[i]);
            bodyMeshes.push(mesh);
        }

        const capMeshes = [];
        const subCapGeometries = this.subarray(this.buildingsBuffer.caps, ntextures);
        for (let i = 0; i < ntextures; ++i) {
            const mesh = new Mesh(mergeGeometries(subCapGeometries[i]), capMaterials[i]);
            capMeshes.push(mesh);
        }
        return [...bodyMeshes, ...capMeshes];
    }

    private subarray<T>(array: T[], n: number) {
        const arrays = [];
        const size = Math.ceil(array.length / n);

        for (let i = 0; i < array.length; i += size) {
            arrays.push(array.slice(i, i + size));
        }

        return arrays;
    }

    private shuffle<T>(array: T[]) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    setDaylightTheme() {
        this.clearBuildings();
        this.meshes = this.createDaylightMeshes();
        this.render();
    }

    setNightlightTheme() {
        this.clearBuildings();
        this.meshes = this.createNightlightMeshes();
        this.render();
    }

    clearBuildings() {
        this.scene.remove(...this.meshes);
    }

    render() {
        this.scene.add(...this.meshes);
    }
}
