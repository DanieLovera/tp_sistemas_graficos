import * as config from "../config/road_structure.json";
import { MeshBasicMaterial, Mesh } from "three";
import { RoadGeometry } from "../geometries/road_geometry";
import { RoadRampGeometry } from "../geometries/road_ramp_geometry";
import { ThreeManager } from "./three_manager";

export class RoadRampsManager {
    private meshes;
    private scene;

    constructor(roadGeometry: RoadGeometry) {
        const threeManager = ThreeManager.getInstance();
        const geometries = this.createGeometries(roadGeometry);
        this.meshes = this.createMeshes(geometries);
        this.scene = threeManager.scene;
    }

    private createGeometries(roadGeometry: RoadGeometry) {
        const ramps = config.ramps;
        const geometries = [];
        for (const ramp of ramps) {
            const subroad = roadGeometry.createSubroad(ramp.from, ramp.to);
            const geometry = new RoadRampGeometry({
                curve: subroad,
                width: ramp.width,
                height: ramp.height,
                reverse: ramp.reverse,
            });
            geometries.push(geometry);
        }
        return geometries;
    }

    createMeshes(geometries: RoadRampGeometry[]) {
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
