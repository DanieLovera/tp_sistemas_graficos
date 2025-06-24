import * as config from "../config/road_structure.json";
import { BoxGeometry, DoubleSide, Matrix4, Mesh, MeshPhongMaterial, MeshStandardMaterial } from "three";
import { RoadGeometry } from "../geometries/road_geometry";
import { RoadRampGeometry } from "../geometries/road_ramp_geometry";
import { ThreeManager } from "./three_manager";
import { PhysicsSimulator } from "../physics/PhysicsSimulator";
import { Orientation } from "../utils/catmull_rom";

export class RoadRampsManager {
    private meshes;
    private scene;

    constructor(roadGeometry: RoadGeometry, physicsSimulator: PhysicsSimulator) {
        const threeManager = ThreeManager.getInstance();
        this.scene = threeManager.scene;
        const geometries = this.createGeometries(roadGeometry, physicsSimulator);
        this.meshes = this.createMeshes(geometries);
    }

    private createGeometries(roadGeometry: RoadGeometry, physicsSimulator: PhysicsSimulator) {
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

            const length = subroad.getLength();
            const reverseFactor = ramp.reverse ? 1 : -1;
            const angle = Math.atan(ramp.height / length) * reverseFactor;

            const rampGeometry = new BoxGeometry(ramp.width, 0.2, length);
            const rampMaterial = new MeshPhongMaterial({ transparent: true, opacity: 0 });
            const rampMesh = new Mesh(rampGeometry, rampMaterial);

            const baseMatrix = subroad.getSweptMatrix(0.5, 0, Orientation.Inside);
            const rotationMatrix = new Matrix4().makeRotationX(angle);
            const translationMatrix = new Matrix4().makeTranslation(0, ramp.height / 2, -0.4 * reverseFactor);

            const finalMatrix = baseMatrix.multiply(rotationMatrix).multiply(translationMatrix);
            rampMesh.applyMatrix4(finalMatrix);
            this.scene.add(rampMesh);
            physicsSimulator.addRigidBody(rampMesh);
        }
        return geometries;
    }

    createMeshes(geometries: RoadRampGeometry[]) {
        const meshes = [];
        for (const geometry of geometries) {
            const material = new MeshStandardMaterial({ color: 0xffff, side: DoubleSide });
            const mesh = new Mesh(geometry.geometry, material);
            meshes.push(mesh);
        }

        return meshes;
    }

    render() {
        this.scene.add(...this.meshes);
    }
}
