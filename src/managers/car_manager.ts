import { AxesHelper, BoxGeometry, CylinderGeometry, Mesh, MeshPhongMaterial, Object3DEventMap, SpotLight } from "three";
import { PhysicsSimulator } from "../physics/PhysicsSimulator";
import { ThreeManager } from "./three_manager";

export class CarManager {
    private chassis!: Mesh<BoxGeometry, MeshPhongMaterial, Object3DEventMap>;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    private wheels!: any[];
    private physicsSimulator;
    private scene;

    constructor(physicsSimulator: PhysicsSimulator) {
        const threeManager = ThreeManager.getInstance();
        this.scene = threeManager.scene;
        this.physicsSimulator = physicsSimulator;
        this.createCarModel();
    }

    createCarModel() {
        // chassis
        const geometry = new BoxGeometry(2, 1, 4);
        const material = new MeshPhongMaterial({ color: 0xff0000 });
        const chassis = new Mesh(geometry, material);

        // axes helper
        const axesHelper = new AxesHelper(5);
        chassis.add(axesHelper);

        // add spolight on the front of the car
        const light = new SpotLight(0xffdd99, 100);
        light.decay = 1;
        light.penumbra = 0.5;

        light.position.set(0, 0, -2);
        light.target.position.set(0, 0, -10);
        chassis.add(light.target);

        // add spotlight helper
        //const lightHelper = new SpotLightHelper(light);
        //light.add(lightHelper);

        chassis.add(light);

        // wheels
        const wheelGeometry = new CylinderGeometry(0.6, 0.6, 0.4, 16);
        wheelGeometry.rotateZ(Math.PI * 0.5);
        const wheelMaterial = new MeshPhongMaterial({ color: 0x000000, wireframe: true });

        const wheels = [];
        for (let i = 0; i < 4; i++) {
            const wheel = new Mesh(wheelGeometry, wheelMaterial);
            chassis.add(wheel);
            wheel.position.set(10 * i, 2, 20 * i);
            wheels.push(wheel);
        }

        this.wheels = wheels;
        this.chassis = chassis;
    }

    updateVehicleTransforms() {
        const vt = this.physicsSimulator.getVehicleTransform();
        if (this.chassis && vt) {
            const { position, quaternion } = vt;
            this.chassis.position.set(position.x, position.y, position.z);
            this.chassis.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);

            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this.wheels.forEach((wheel: any, index: any) => {
                const wheelTransform = this.physicsSimulator.getWheelTransform(index);
                if (wheelTransform) {
                    const { position, quaternion } = wheelTransform;
                    wheel.position.set(position.x, position.y, position.z);
                    wheel.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
                }
            });
        }
    }

    animate() {
        this.physicsSimulator.update();
        this.updateVehicleTransforms();
    }

    render() {
        this.scene.add(this.chassis);
    }
}
