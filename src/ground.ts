import { GridHelper, Scene } from "three";

class Ground {
    grid;

    constructor(size = 10, divisions = 10) {
        this.grid = new GridHelper(size, divisions);
    }

    insert(scene: Scene) {
        scene.add(this.grid);
    }
}

export { Ground };
