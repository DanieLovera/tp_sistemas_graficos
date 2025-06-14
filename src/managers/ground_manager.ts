import { GridHelper } from "three";
import { Lot } from "../utils/lot";
import { ThreeManager } from "./three_manager";

class GroundManager {
    private scene;
    private gridSize;
    private gridDivisions;
    private grid;
    private lots;

    constructor(gridSize: number, gridDivisions: number) {
        if (gridSize % gridDivisions != 0) {
            throw new Error(`Number of gridDivisions (${gridDivisions}) must be multiple of gridSize (${gridSize})`);
        }

        const threeManager = ThreeManager.getInstance();
        this.scene = threeManager.scene;
        this.gridSize = gridSize;
        this.gridDivisions = gridDivisions;
        this.lots = this.createLots(gridSize, gridDivisions);
        this.grid = new GridHelper(gridSize, gridDivisions);
    }

    private createLots(gridSize: number, gridDivisions: number) {
        const lots = [];
        const lotSize = gridSize / gridDivisions;

        for (let j = 0; j < gridDivisions; ++j) {
            const columnLots = [];
            for (let i = 0; i < gridDivisions; ++i) {
                const { x, z } = this.indexToPosition(i, j);
                const xCenter = x + lotSize / 2;
                const zCenter = z + lotSize / 2;
                columnLots.push(new Lot(lotSize, xCenter, zCenter));
            }
            lots.push(columnLots);
        }
        return lots;
    }

    private indexToPosition(i: number, j: number) {
        const maxIndex = this.gridDivisions - 1;
        if (i > maxIndex || j > maxIndex) {
            throw new Error(`Index out of range [${i}, ${j}]`);
        }

        const halfSize = this.gridSize / 2;
        const lotSize = this.gridSize / this.gridDivisions;
        const x = i * lotSize - halfSize;
        const z = j * lotSize - halfSize;
        return { x, z };
    }

    private positionToIndex(x: number, z: number) {
        const halfSize = this.gridSize / 2;
        if (x < -halfSize || x > halfSize || z < -halfSize || z > halfSize) {
            throw new Error(`Position out of range [${x}, ${z}]`);
        }

        const maxIndex = this.gridDivisions - 1;
        const step = this.gridDivisions / this.gridSize;
        const j = Math.min(Math.floor((x + halfSize) * step), maxIndex);
        const i = Math.min(Math.floor((z + halfSize) * step), maxIndex);
        return { i, j };
    }

    private getLot(x: number, z: number) {
        const { i, j } = this.positionToIndex(x, z);
        const lot = this.lots[i][j];
        return lot;
    }

    markLot(x: number, z: number) {
        this.getLot(x, z).mark();
    }

    getEmptyLots() {
        return this.lots.flat().filter(lot => lot.isEmpty());
    }

    render() {
        this.scene.add(this.grid);
    }
}

export { GroundManager };
