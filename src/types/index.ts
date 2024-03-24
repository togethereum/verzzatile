
export type Value = string | number;

export type Dimension = string;

export interface Cell {
    setValue(value: Value): void;

    negEnd(dim: Dimension): Cell | null;

    posEnd(dim: Dimension): Cell | null;

    connect(dim: Dimension, cell: Cell): void;

    addCell(dim: Dimension, value: Value): Cell;
}

export interface Cursor {
    cell(): Cell;

    dimension(): Dimension;

    turnTo(newDim: Dimension): void;

    moveTo(newCell: Cell): void;

    toOrigin(): void;
}