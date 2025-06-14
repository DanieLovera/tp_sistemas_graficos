import { Box3, BufferGeometry, Matrix4, Mesh, MeshBasicMaterial, Vector3 } from "three";

class Lot {
    private size;
    private empty;
    private center;

    constructor(size: number, xCenter: number, zCenter: number) {
        this.size = size;
        this.empty = true;
        this.center = {
            x: xCenter,
            y: 0,
            z: zCenter,
        };
    }

    mark() {
        // TODO: Delete
        // Spot empty lots

        // const scene = ThreeManager.getInstance().scene;
        // const geometry = new CircleGeometry(10, 50);
        // const material = new MeshBasicMaterial({
        //     color: 0xff0000,
        //     side: DoubleSide,
        // });
        // const circle = new Mesh(geometry, material);
        // circle.rotation.x = -Math.PI / 2;
        // circle.position.x = this.center.x;
        // circle.position.y = this.center.y;
        // circle.position.z = this.center.z;
        // scene.add(circle);

        this.empty = false;
    }

    placeGeometry(geometry: BufferGeometry, fitRatio: number) {
        if (!this.empty) {
            throw new Error("Cannot place an object, lot is not empty");
        }

        const tempMesh = new Mesh(geometry, new MeshBasicMaterial());
        const box = new Box3().setFromObject(tempMesh);
        const size = new Vector3();
        box.getSize(size);
        const scaleX = (this.size * fitRatio) / size.x;
        const scaleZ = (this.size * fitRatio) / size.z;
        const scale = Math.min(scaleX, scaleZ);

        const transform = new Matrix4();
        const scaleMatrix = new Matrix4();
        const translateMatrix = new Matrix4();
        if (scale < 1) {
            // TODO: Review anisotropic scaling
            scaleMatrix.makeScale(scale, 1, scale);
        }
        translateMatrix.makeTranslation(this.center.x, this.center.y, this.center.z);
        transform.multiplyMatrices(translateMatrix, scaleMatrix);
        geometry.applyMatrix4(transform);
        this.mark();
    }

    isEmpty() {
        return this.empty;
    }
}

export { Lot };
