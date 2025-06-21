import * as config from "../config/road_structure.json";
import { Mesh, MeshStandardMaterial } from "three";
import { RoadGeometry } from "../geometries/road_geometry";
import { RoadArchGeometry } from "../geometries/road_arch_geometry";
import { ThreeManager } from "./three_manager";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

export class RoadArchsManager {
    private meshes;
    private scene;

    constructor(roadGeometry: RoadGeometry) {
        const threeManager = ThreeManager.getInstance();
        const geometries = this.createGeometries(roadGeometry);
        this.meshes = this.createMeshes(geometries);
        this.scene = threeManager.scene;
    }

    private createGeometries(roadGeometry: RoadGeometry) {
        const archs = config.archs;
        const geometries = [];
        for (const arch of archs) {
            const subroad = roadGeometry.createSubroad(arch.from, arch.to);
            const geometry = new RoadArchGeometry({
                curve: subroad,
                radius: config.road.width,
            });
            geometries.push(geometry);
        }
        return geometries;
    }

    createMeshes(geometries: RoadArchGeometry[]) {
        const rawGeometries = [];
        for (const geometry of geometries) {
            rawGeometries.push(geometry.geometry);
        }

        const rawGeometry = mergeGeometries(rawGeometries);
        const material = new MeshStandardMaterial({ color: 0xffff });
        const mesh = new Mesh(rawGeometry, material);
        return [mesh];
    }

    render() {
        this.scene.add(...this.meshes);
    }
}
