import {Cell, Structure} from "./types";
import low from 'lowdb';

export class LowDB implements Structure {
    private db: low.LowSync<any>;
    private originCell: Cell;

    constructor(db: low.LowSync<any>) {
        this.db = db;
        this.originCell = new LowCell(null);
    }

    origin(): Cell {
        return this.originCell;
    }

    dimensions(): Dimension[] {
        return [];
    }
}

class LowCell implements Cell {
    private value: Value;
    private lowDb: LowDB;

    constructor(lowDb: LowDB, value: Value) {
        this.lowDb = lowDb;
        this.value = value;
    }

    addCell(dim: Dimension, value: Value): Cell {
        newCell = new LowCell(this.lowDb, value);
        this.connect(dim, newCell);
        return newCell;
    }

    connect(dim: Dimension, cell: Cell): void {
    }

    connectingDimension(cell: Cell): Dimension | null {
        return undefined;
    }

    dimensions(): Dimension[] {
        return [];
    }

    disconnect(dim: Dimension, cell: Cell): void {
    }

    headCell(): Cell {
        return undefined;
    }

    negEnd(dim: Dimension): Cell | null {
        return undefined;
    }

    negNeighbors(): Cell[] {
        return [];
    }

    posEnd(dim: Dimension): Cell | null {
        return undefined;
    }

    posNeighbors(): Cell[] {
        return [];
    }

    posRank(): Rank {
        return undefined;
    }

    rank(): Rank {
        return undefined;
    }

    setValue(value: Value): void {
    }

    getValue(): Value {
        return undefined;
    }

}