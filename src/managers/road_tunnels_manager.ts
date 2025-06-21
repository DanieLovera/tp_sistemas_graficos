import * as config from "../config/road_structure.json";
import { Mesh, TextureLoader, RepeatWrapping, MeshStandardMaterial, Vector2 } from "three";
import { RoadGeometry } from "../geometries/road_geometry";
import { RoadTunnelGeometry } from "../geometries/road_tunnel_geometry";
import { ThreeManager } from "./three_manager";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

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
                radius: tunnel.radius,
            });
            geometries.push(geometry);
        }
        return geometries;
    }

    createMeshes(geometries: RoadTunnelGeometry[]) {
        const loader = new TextureLoader();
        const colorMap = loader.load("textures/Concrete008_4K-JPG_Color.jpg");
        const aoMap = loader.load("textures/Concrete008_4K-JPG_AmbientOcclusion.jpg");
        const normalMap = loader.load("textures/Concrete008_4K-JPG_NormalGL.jpg");
        const roughnessMap = loader.load("textures/Concrete008_4K-JPG_Roughness.jpg");

        const maps = [colorMap, normalMap, aoMap, roughnessMap];
        maps.forEach((tex) => {
            if (tex) {
                tex.wrapS = RepeatWrapping;
                tex.wrapT = RepeatWrapping;
                tex.repeat.set(0.1, 0.1);
            }
        });

        const groundMaterial = new MeshStandardMaterial({
            map: colorMap,
            aoMap: aoMap,
            normalMap: normalMap,
            roughnessMap: roughnessMap,
            roughness: 1,
            normalScale: new Vector2(1, 1),
            color: 0x6c6f72,
        });

        const rawGeometries = [];
        for (const geometry of geometries) {
            rawGeometries.push(geometry.geometry);
        }
        const mergedGeometries = mergeGeometries(rawGeometries);
        const mesh = new Mesh(mergedGeometries, groundMaterial);
        return [mesh];
    }

    render() {
        this.scene.add(...this.meshes);
    }
}
