import {GameGraph} from "../model/graph-representation/GameGraph";
import {Coordinate} from "../model/battlesnake-official/Coordinate";
import {Direction} from "../model/battlesnake-official/Direction";
import {Snake} from "../model/battlesnake-official/Snake";
import {getValidNeighbours} from "./boardUtils";
import {Game} from "../model/battlesnake-official/Game";
import {randomInt} from "./mathUtils";

export function doRandomWalk(game: Game): Walk {
    const gameGraph = new GameGraph(game.board);
    let next: Coordinate = game.you.body[0];
    let turn = 0;
    let direction: Direction;
    while (next && turn < game.you.body.length) {
        let viableNexts: Coordinate[] = [];
        const neighbours = getValidNeighbours(next, game.board);
        for (const neighbour of neighbours) {
            if (turn === 0 && neighbour.x === game.you.body[game.you.body.length - 1].x && neighbour.y === game.you.body[game.you.body.length - 1].y) {
                // skip. this represents edge case where the snake is of length 2.
            } else if (gameGraph.graph[neighbour.x][neighbour.y].turnsUntilVacant < turn + 1) {
                viableNexts.push(neighbour);
            }
        }
        if (viableNexts.length > 0) {
            next = viableNexts[randomInt(viableNexts.length)];
            if (turn === 0) {
                direction = getDirectionOfFirstMove(next, game.you);
            }
            turn += 1;
            gameGraph.graph[next.x][next.y].turnsUntilVacant = turn + game.you.body.length;
        } else {
            next = null;
        }
    }
    return {
        direction: direction,
        turn: turn
    }

}

export interface Walk {
    direction: Direction;
    turn: number;
}

function getDirectionOfFirstMove(next: Coordinate, snake: Snake): Direction {
    if (next.x < snake.body[0].x) {
        return "left";
    } else if (next.x > snake.body[0].x) {
        return "right";
    } else if (next.y < snake.body[0].y) {
        return "up";
    } else {
        return "down";
    }
}