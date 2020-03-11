import {Coordinate} from "../model/battlesnake-official/Coordinate";
import {Board} from "../model/battlesnake-official/Board";

export function getValidNeighbours(coord: Coordinate, board: Board): Coordinate[] {
    const validNeighbours = [];
    if (coord.x > 0) {
        validNeighbours.push({x: coord.x - 1, y: coord.y});
    }
    if (coord.x < board.width - 1) {
        validNeighbours.push({x: coord.x + 1, y: coord.y});
    }
    if (coord.y > 0) {
        validNeighbours.push({x: coord.x, y: coord.y - 1});
    }
    if (coord.y < board.height - 1) {
        validNeighbours.push({x: coord.x, y: coord.y + 1});
    }
    return validNeighbours;
}