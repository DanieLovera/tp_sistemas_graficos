import * as config from "../config/road_structure.json";
import BigNumber from "bignumber.js";
import { MeshBasicMaterial, Mesh, Vector3 } from "three";
import { RoadGeometry } from "../geometries/road_geometry";
import { RoadTunnelsManager } from "./road_tunnels_manager";
import { RoadRampsManager } from "./road_ramps_manager";
import { RoadArchsManager } from "./road_archs_manager";
import { RoadStreetlightsManager } from "./road_streetlights_manager";
import { ThreeManager } from "./three_manager";
import { GroundManager } from "./ground_manager";
import { Orientation } from "../utils/catmull_rom";

export class RoadStructureManager {
    scene;

    tunnelsManager;
    rampsManager;
    archsManager;
    streetlightsManager;
    geometry;

    constructor(ground: GroundManager) {
        const threeManager = ThreeManager.getInstance();
        this.scene = threeManager.scene;

        this.geometry = this.createRoadGeometry(ground);
        this.tunnelsManager = new RoadTunnelsManager(this.geometry);
        this.rampsManager = new RoadRampsManager(this.geometry);
        this.archsManager = new RoadArchsManager(this.geometry);
        this.streetlightsManager = new RoadStreetlightsManager(this.geometry);
    }

    private createRoadGeometry(ground: GroundManager) {
        const roadGeometry = new RoadGeometry({
            controlPoints: config.road.controlPoints,
            width: config.road.width,
            height: config.road.height,
            segments: config.road.segments,
        });

        const from = new BigNumber(0);
        const to = new BigNumber(1);
        const steps = new BigNumber(1 / 1000);
        for (let u = from; u.isLessThanOrEqualTo(to); u = u.plus(steps)) {
            {
                // Mark ground lots along the inner edge of the road with specified width
                const vector = new Vector3();
                const sweptMatrix = roadGeometry.getSweptMatrix(u.toNumber(), Orientation.Inside, config.road.width);
                vector.applyMatrix4(sweptMatrix);
                ground.markLot(vector.x, vector.z);
            }

            {
                // Mark ground lots along the center line of the road
                const vector = new Vector3();
                const sweptMatrix = roadGeometry.getSweptMatrix(u.toNumber(), Orientation.Inside);
                vector.applyMatrix4(sweptMatrix);
                ground.markLot(vector.x, vector.z);
            }

            {
                // Mark ground lots along the outer edge of the road with specified width
                const vector = new Vector3();
                const sweptMatrix = roadGeometry.getSweptMatrix(u.toNumber(), Orientation.Outside, config.road.width);
                vector.applyMatrix4(sweptMatrix);
                ground.markLot(vector.x, vector.z);
            }
        }
        return roadGeometry;
    }

    render() {
        const extrudeMaterial = new MeshBasicMaterial({ color: 0xff00ff, wireframe: true });
        const extrudeMesh = new Mesh(this.geometry.geometry, extrudeMaterial);
        this.scene.add(extrudeMesh);

        this.tunnelsManager.render();
        this.rampsManager.render();
        this.archsManager.render();
        this.streetlightsManager.render();
    }
}
