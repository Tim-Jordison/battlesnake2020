import {Coordinate} from "../battlesnake-official/Coordinate";

export interface GraphNode extends Coordinate {
    type: NodeType;
    turnsUntilVacant: number;
}

export type NodeType = "vacant" | "food" | "occupied";