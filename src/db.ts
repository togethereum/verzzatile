import {Cell, Dimension, Rank, Structure, Value} from "./types";
import {JSONFileSync} from 'lowdb/node'
import {LowSync} from 'lowdb'


export class LowDB implements Structure {
    db: LowSync<any>;
    originCell: Cell;

    constructor(dbFile: string) {
        const defaultData = {
            cells: [],
            dimensions: []
        }
        this.db = new LowSync(new JSONFileSync(dbFile), defaultData);
        this.originCell = new LowCell(this, "origin");
    }

    origin(): Cell {
        return this.originCell;
    }

    dimensions(): Dimension[] {
        return [];
    }

    public createCell(value: Value): Cell {
        return new LowCell(this, value);
    }
}

class LowCell implements Cell {
    private readonly value: Value;
    private readonly lowDb: LowDB;
    private shouldSave: boolean = true;

    constructor(lowDb: LowDB, value: Value) {
        this.lowDb = lowDb;
        this.value = value;
    }

    protected save(): void {
        if (this.shouldSave) {
            this.lowDb.db.write();
        }
    }

    addCell(dim: Dimension, value: Value): Cell {
        this.shouldSave = false;
        const newCell = new LowCell(this.lowDb, value);
        this.connect(dim, newCell);
        this.shouldSave = true;
        this.save();
        return newCell;
    }

    connect(dim: Dimension, cell: Cell): void {
    }

    connectingDimension(cell: Cell): Dimension | null {
        return null;
    }

    dimensions(): Dimension[] {
        return [];
    }

    disconnect(dim: Dimension, cell: Cell): void {
    }

    headCell(): Cell {
        return this.lowDb.originCell;
    }

    negEnd(dim: Dimension): Cell | null {
        return null;
    }

    negNeighbors(): Cell[] {
        return [];
    }

    posEnd(dim: Dimension): Cell | null {
        return null;
    }

    posNeighbors(): Cell[] {
        return [];
    }

    posRank(): Rank {
        return new LowRank();
    }

    rank(): Rank {
        return new LowRank();
    }

    setValue(value: Value): void {
    }

    getValue(): Value {
        return this.value;
    }

}

export class LowRank implements Rank {
    dimension(): Dimension {
        return 'none';
    }

    cells(): Cell[] {
        return [];
    }

}