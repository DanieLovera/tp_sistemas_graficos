import { BufferGeometry, Matrix4, Vector3 } from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

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
        this.empty = false;
    }

    placeGeometry(geometries: BufferGeometry[], fitRatio: number) {
        if (!this.empty) {
            throw new Error("Cannot place an object, lot is not empty");
        }

        const transform = this.makeTransformMatrix(geometries, fitRatio);
        for (const geometry of geometries) {
            geometry.applyMatrix4(transform);
        }
        this.mark();
    }

    makeTransformMatrix(geometries: BufferGeometry[], fitRatio: number) {
        const transform = new Matrix4();
        const scaleMatrix = new Matrix4();
        const translateMatrix = new Matrix4();

        const scale = this.calculateScale(geometries, fitRatio);
        if (scale < 1) {
            scaleMatrix.makeScale(scale, 1, scale);
        }
        translateMatrix.makeTranslation(this.center.x, this.center.y, this.center.z);
        transform.multiplyMatrices(translateMatrix, scaleMatrix);
        return transform;
    }

    calculateScale(geometries: BufferGeometry[], fitRatio: number) {
        const tempGeometry = mergeGeometries(geometries);
        tempGeometry.computeBoundingBox();

        const size = new Vector3();
        const box = tempGeometry.boundingBox;
        if (box) {
            box.getSize(size);
        }

        const scaleX = (this.size * fitRatio) / size.x;
        const scaleZ = (this.size * fitRatio) / size.z;
        const scale = Math.min(scaleX, scaleZ);
        return scale;
    }

    isEmpty() {
        return this.empty;
    }
}

export { Lot };
