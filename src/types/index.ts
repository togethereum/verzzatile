
export type Value = string | number;

export type Dimension = string;

export interface Rank {
    dimension(): Dimension;
    cells(): Cell[];
}

export interface Cell {
    value(): Value;

    setValue(value: Value): void;

    negEnd(dim: Dimension): Cell | null;

    posEnd(dim: Dimension): Cell | null;

    connect(dim: Dimension, cell: Cell): void;

    disconnect(dim: Dimension, cell: Cell): void;

    addCell(dim: Dimension, value: Value): Cell;

    posRank(): Rank;

    rank(): Rank;

    headCell(): Cell;

    dimensions(): Dimension[];

    posNeighbors(): Cell[];

    negNeighbors(): Cell[];

    connectingDimension(cell: Cell): Dimension | null;
}

export interface Cursor {
    cell(): Cell;

    dimension(): Dimension;

    turnTo(newDim: Dimension): void;

    moveTo(newCell: Cell): void;
}

export interface Structure {
    origin(): Cell;
    dimensions(): Dimension[];
}