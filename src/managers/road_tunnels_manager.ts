import * as config from "../config/road_structure.json";
import { MeshBasicMaterial, Mesh } from "three";
import { RoadGeometry } from "../geometries/road_geometry";
import { RoadTunnelGeometry } from "../geometries/road_tunnel_geometry";
import { ThreeManager } from "./three_manager";

export class RoadTunnelsManager {
    private meshes;
    private scene;

    constructor(roadGeometry: RoadGeometry) {
        const threeManager = ThreeManager.getInstance();
        const geometries = this.createGeometries(roadGeometry);
        this.meshes = this.createMeshes(geometries);
        this.scene = threeManager.scene;
    }

    private createGeometries(roadGeometry: RoadGeometry) {
        const tunnels = config.tunnels;
        const geometries = [];
        for (const tunnel of tunnels) {
            const subroad = roadGeometry.createSubroad(tunnel.from, tunnel.to);
            const geometry = new RoadTunnelGeometry({
                curve: subroad,
                width: tunnel.width,
                height: tunnel.height,
                radius: config.road.width,
            });
            geometries.push(geometry);
        }
        return geometries;
    }

    createMeshes(geometries: RoadTunnelGeometry[]) {
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
