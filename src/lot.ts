import { Box3, Object3D, Scene, Vector3 } from "three";

// TODO: Continue later, this is just a draft to scale a group to a fit size
class Lot {
    private obj;

    constructor(obj: Object3D, width = 2, depth = 2) {
        this.obj = obj;

        const box = new Box3().setFromObject(obj);
        const size = new Vector3();
        box.getSize(size);
    
        const scalex = width / size.x;
        const scalez = depth / size.z;
        
        const scale = Math.min(scalex, scalez);
        obj.scale.set(scale, scale, scale);
    }

    insert(scene: Scene) {
        scene.add(this.obj);
    }
}

export { Lot };
