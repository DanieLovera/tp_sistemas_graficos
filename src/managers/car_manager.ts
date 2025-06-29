/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Group,
    Mesh,
    MeshPhongMaterial,
    MeshPhysicalMaterial,
    MeshStandardMaterial,
    Object3D,
    Object3DEventMap,
    PerspectiveCamera,
    Quaternion,
    SpotLight,
    Vector3,
} from "three";
import { PhysicsSimulator } from "../physics/PhysicsSimulator";
import { ThreeManager } from "./three_manager";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export class CarManager {
    private chassis!: Object3D<Object3DEventMap>;
    private wheels!: any[];
    private physicsSimulator;
    private scene;
    private camera!: PerspectiveCamera;
    private cameraOffset!: Vector3;

    constructor(physicsSimulator: PhysicsSimulator) {
        const threeManager = ThreeManager.getInstance();
        this.scene = threeManager.scene;
        this.physicsSimulator = physicsSimulator;
        this.setOutsideCamera();
        this.createCamera();
        const loader = new GLTFLoader();
        loader.load("/tp_sistemas_graficos/models/cybertruck.glb", this.onModelLoaded, this.onProgress, this.onLoadError);
    }

    private createCarModel(gltf: any) {
        const chassis = new Group();
        const wheels: Mesh[] = [];

        const steelMaterial = new MeshStandardMaterial({
            color: 0xcccccc,
            metalness: 1,
            roughness: 0.3,
        });

        const bumperMaterial = new MeshStandardMaterial({
            color: 0x111111,
            metalness: 0.2,
            roughness: 0.7,
        });

        const frontLightsMaterial = new MeshPhongMaterial({
            color: 0x222222,
            emissive: 0xffffff,
            emissiveIntensity: 3,
            shininess: 100,
        });

        const rearLightsMaterial = new MeshPhongMaterial({
            color: 0x330000,
            emissive: 0xff0000,
            emissiveIntensity: 4,
            shininess: 100,
        });

        const windowsMaterial = new MeshPhysicalMaterial({
            color: 0x222222,
            metalness: 0.25,
            roughness: 0.1,
            transmission: 0.8,
            transparent: true,
            opacity: 0.8,
            thickness: 0.5,
            clearcoat: 1.0,
        });

        gltf.scene.traverse((child: any) => {
            if (child.isMesh) {
                console.log(child);
                if (child.name === "person") {
                    return;
                }

                if (child.name.startsWith("wheel")) {
                    wheels.push(child);
                    return;
                }

                if (child.name === "chassis") {
                    child.material = steelMaterial;
                } else if (child.name === "frontBumper" || child.name === "rearBumper") {
                    child.material = bumperMaterial;
                } else if (child.name === "frontLights") {
                    child.material = frontLightsMaterial;
                } else if (child.name === "rearLights") {
                    child.material = rearLightsMaterial;
                } else if (child.name === "windows") {
                    child.material = windowsMaterial;
                }
                const part = child.clone();
                chassis.add(part);
            }
        });

        const wheelGeometry = [];
        for (let i = 0; i < 4; i++) {
            const wg = wheels[i].geometry.clone();
            const sign = i % 2 ? -1 : 1;
            wg.rotateZ(Math.PI * sign * 0.5);
            wheelGeometry.push(wg);
        }

        const wheelMaterial = new MeshStandardMaterial({
            color: 0x111111,
            roughness: 0.9,
            metalness: 0.1,
        });

        const wheelsOK = [];
        for (let i = 0; i < 4; i++) {
            const wheel = new Mesh(wheelGeometry[i], wheelMaterial);
            chassis.add(wheel);
            wheelsOK.push(wheel);
        }

        const frontLight = new SpotLight(0xffffff, 10, 20, Math.PI / 6, 0.5, 1);
        frontLight.position.set(0, 1, -2);
        frontLight.target.position.set(0, 1, -10);
        chassis.add(frontLight);
        chassis.add(frontLight.target);

        this.chassis = chassis;
        this.wheels = wheelsOK;
        this.scene.add(chassis);
    }

    private updateVehicleTransforms() {
        const vt = this.physicsSimulator.getVehicleTransform();
        if (this.chassis && vt) {
            const { position, quaternion } = vt;
            this.chassis.position.set(position.x, position.y, position.z);
            this.chassis.quaternion.set(quaternion.x, quaternion.y, quaternion.z, quaternion.w);

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

    private createCamera() {
        const fov = 75;
        const near = 0.1;
        const far = 1000;
        const aspect = window.innerWidth / window.innerHeight;

        const camera = new PerspectiveCamera(fov, aspect, near, far);
        this.camera = camera;
    }

    private updateCamera() {
        const vt = this.physicsSimulator.getVehicleTransform();
        if (vt) {
            const { position, quaternion } = vt;
            const vPosition = new Vector3(position.x, position.y, position.z);
            const vQuaternion = new Quaternion(quaternion.x, quaternion.y, quaternion.z, quaternion.w);
            const cameraOffset = this.cameraOffset.clone().applyQuaternion(vQuaternion).add(vPosition);
            this.camera.position.copy(cameraOffset);
            const forward = new Vector3(0, 0, -1).applyQuaternion(vQuaternion).normalize();
            const lookAtPoint = vPosition.clone().add(forward.multiplyScalar(10));
            this.camera.lookAt(lookAtPoint);
        }
    }

    animate() {
        this.physicsSimulator.update();
        this.updateVehicleTransforms();
        this.updateCamera();
    }

    render() {
        // this.scene.add(this.chassis);
    }

    setInsideCamera() {
        const offset = new Vector3(0, 1.5, 0.3);
        this.cameraOffset = offset;
    }

    setOutsideCamera() {
        const offset = new Vector3(0, 5, 10);
        this.cameraOffset = offset;
    }

    getCamera() {
        return this.camera;
    }

    onModelLoaded = (gltf: any) => {
        this.createCarModel(gltf);
        // const mat = new MeshPhongMaterial({ color: 0xcccccc, shininess: 128 });

        // gltf.scene.traverse((child: any) => {
        //     if (child.name === "person") {
        //         child.visible = false;
        //     } else {
        //         child.material = mat;
        //         console.log(child);
        //     }
        // });

        // this.scene.add(gltf.scene);
    };

    onProgress = (event: any) => {
        console.log((event.loaded / event.total) * 100 + "% loaded");
    };

    onLoadError = (event: any) => {
        console.error("Error loading", event);
    };
}
