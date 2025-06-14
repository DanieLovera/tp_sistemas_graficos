import * as config from "../config/road_structure.json";
import { MeshBasicMaterial, Mesh } from "three";
import { RoadGeometry } from "../geometries/road_geometry";
import { RoadArchGeometry } from "../geometries/road_arch_geometry";
import { ThreeManager } from "./three_manager";

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
        for (const ramp of archs) {
            const subroad = roadGeometry.createSubroad(ramp.from, ramp.to);
            const geometry = new RoadArchGeometry({
                curve: subroad,
                radius: config.road.width,
            });
            geometries.push(geometry);
        }
        return geometries;
    }

    createMeshes(geometries: RoadArchGeometry[]) {
        const meshes = [];
        for (const geometry of geometries) {
            const material = new MeshBasicMaterial({ color: 0xffff, wireframe: true });
            const mesh = new Mesh(geometry.geometry, material);
            meshes.push(mesh);
        }

        return meshes;
    }

    render() {
        this.scene.add(...this.meshes);
    }
}
