import * as config from "../config/road_structure.json";
import { MeshBasicMaterial, Mesh, Matrix4 } from "three";
import { RoadGeometry } from "../geometries/road_geometry";
import { RoadStreetlightGeometry } from "../geometries/road_streetlight_geometry";
import { ThreeManager } from "./three_manager";
import BigNumber from "bignumber.js";

export class RoadStreetlightsManager {
    private meshes;
    private scene;

    constructor(roadGeometry: RoadGeometry) {
        const threeManager = ThreeManager.getInstance();
        const geometries = this.createGeometries(roadGeometry);
        this.meshes = this.createMeshes(geometries);
        this.scene = threeManager.scene;
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

    createMeshes(geometries: RoadStreetlightGeometry[]) {
        const meshes = [];

        const lampMaterial = new MeshBasicMaterial({ color: 0xffff00, wireframe: true });
        const postMaterial = new MeshBasicMaterial({ color: 0x00ffff, wireframe: true });
        for (const { geometry } of geometries) {
            const lampMesh = new Mesh(geometry.postLampGeometry, lampMaterial);
            const postMesh = new Mesh(geometry.postGeometry, postMaterial);
            postMesh.add(lampMesh);

            meshes.push(postMesh);
        }
        return meshes;
    }

    render() {
        this.scene.add(...this.meshes);
    }
}
