import * as config from "../config/road_structure.json";
import { MeshStandardMaterial, Mesh, Matrix4, PointLight, Vector3 } from "three";
import { RoadGeometry } from "../geometries/road_geometry";
import { RoadStreetlightGeometry } from "../geometries/road_streetlight_geometry";
import { ThreeManager } from "./three_manager";
import BigNumber from "bignumber.js";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export class RoadStreetlightsManager {
    private scene;
    private meshes;
    private daylightMeshes;
    private nightlightMeshes;
    private pointLights!: PointLight[];

    constructor(roadGeometry: RoadGeometry) {
        const threeManager = ThreeManager.getInstance();
        this.scene = threeManager.scene;
        const geometries = this.createGeometries(roadGeometry);
        this.setPointLights(geometries);
        this.daylightMeshes = this.createDaylightMeshes(geometries);
        this.nightlightMeshes = this.createNightlightMeshes(geometries);
        this.meshes = this.daylightMeshes;
    }

    private createGeometries(roadGeometry: RoadGeometry) {
        const streetlight = config.streetlight;
        const geometries = [];
        for (const range of streetlight.inners) {
            const from = new BigNumber(range.from);
            const to = new BigNumber(range.to);
            const steps = new BigNumber(streetlight.steps);
            for (let u = from; u.isLessThanOrEqualTo(to); u = u.plus(steps)) {
                const streetlightGeometry = new RoadStreetlightGeometry({
                    postWidth: streetlight.postWidth,
                    postHeight: streetlight.postHeight,
                    postLampWidth: streetlight.postLampWidth,
                    postLampHeight: streetlight.postLampHeight,
                    postLampDepth: streetlight.postLampDepth,
                });

                const matrixRy = new Matrix4();
                matrixRy.makeRotationY(Math.PI);
                const sweptMatrix = roadGeometry.getSweptMatrixFromInside(u.toNumber(), streetlight.distance);

                streetlightGeometry.applyMatrix(sweptMatrix.multiply(matrixRy));
                geometries.push(streetlightGeometry);
            }
        }

        for (const range of streetlight.outers) {
            const from = new BigNumber(range.from);
            const to = new BigNumber(range.to);
            const steps = new BigNumber(streetlight.steps);
            for (let u = from; u.isLessThanOrEqualTo(to); u = u.plus(steps)) {
                const streetlightGeometry = new RoadStreetlightGeometry({
                    postWidth: streetlight.postWidth,
                    postHeight: streetlight.postHeight,
                    postLampWidth: streetlight.postLampWidth,
                    postLampHeight: streetlight.postLampHeight,
                    postLampDepth: streetlight.postLampDepth,
                });

                const sweptMatrix = roadGeometry.getSweptMatrixFromOutside(u.toNumber(), streetlight.distance);

                streetlightGeometry.applyMatrix(sweptMatrix);
                geometries.push(streetlightGeometry);
            }
        }
        return geometries;
    }

    private createDaylightMeshes(geometries: RoadStreetlightGeometry[]) {
        const postMaterial = new MeshStandardMaterial({ color: 0x222222 });
        const lampMaterial = new MeshStandardMaterial({
            color: 0xffffff,
        });

        const meshes = [];
        const postGeometries = [];
        const postLampGeometries = [];
        for (const { geometry } of geometries) {
            postGeometries.push(geometry.postGeometry);
            postLampGeometries.push(geometry.postLampGeometry);
        }

        const postMesh = new Mesh(mergeGeometries(postGeometries), postMaterial);
        const lampMesh = new Mesh(mergeGeometries(postLampGeometries), lampMaterial);
        meshes.push(postMesh, lampMesh);
        return meshes;
    }

    private createNightlightMeshes(geometries: RoadStreetlightGeometry[]) {
        const postMaterial = new MeshStandardMaterial({ color: 0x222222 });
        const lampMaterial = new MeshStandardMaterial({
            color: 0xffff00,
            emissive: 0xffff00,
            emissiveIntensity: 1,
        });

        const meshes = [];
        const postGeometries = [];
        const postLampGeometries = [];
        for (const { geometry } of geometries) {
            postGeometries.push(geometry.postGeometry);
            postLampGeometries.push(geometry.postLampGeometry);
        }

        const postMesh = new Mesh(mergeGeometries(postGeometries), postMaterial);
        const lampMesh = new Mesh(mergeGeometries(postLampGeometries), lampMaterial);
        meshes.push(postMesh, lampMesh);
        return meshes;
    }

    private setPointLights(geometries: RoadStreetlightGeometry[]) {
        const pointLights: PointLight[] = [];
        let number = 1;
        for (const { geometry } of geometries) {
            geometry.postLampGeometry.computeBoundingBox();
            const center = new Vector3();
            if (geometry.postLampGeometry.boundingBox) {
                geometry.postLampGeometry.boundingBox.getCenter(center);
            }
            if (number % 6 === 0) {
                const light = new PointLight(0xffffaa, 20, 20, 2);
                light.position.copy(center);
                pointLights.push(light);
            }
            number++;
        }
        this.pointLights = pointLights;
    }

    setDaylightTheme() {
        this.scene.remove(...this.meshes);
        this.scene.remove(...this.pointLights);
        this.meshes = this.daylightMeshes;
        this.render();
    }

    setNightlightTheme() {
        this.scene.remove(...this.meshes);
        this.scene.add(...this.pointLights);
        this.meshes = this.nightlightMeshes;
        this.render();
    }

    render() {
        this.scene.add(...this.meshes);
    }
}
