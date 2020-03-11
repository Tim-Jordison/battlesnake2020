import {Board} from "../battlesnake-official/Board";
import {GraphNode, NodeType} from "./GraphNode";
import {Coordinate} from "../battlesnake-official/Coordinate";
import {Snake} from "../battlesnake-official/Snake";
import {getValidNeighbours} from "../../utils/boardUtils";

export class GameGraph {
    graph: GraphNode[][];

    constructor(board: Board) {
        this.graph = [];
        for (let x = 0; x < board.width; x++) {
            this.graph[x] = [];
            for (let y = 0; y < board.height; y++) {
                this.graph[x][y] = {
                    x: x,
                    y: y,
                    type: "vacant",
                    turnsUntilVacant: 0
                }
            }
        }

        for (let food of board.food) {
            this.graph[food.x][food.y].type = "food";
        }

        for (let snake of board.snakes) {
            let foodNextToHead = this.hasFoodNexToHead(snake, board);
            for (let i = 0; i < snake.body.length; i++) {
                let type: NodeType = "occupied";
                let turnsUntilVacant = snake.body.length - i - 1 /* consider a snake of length 1 */;

                if (snake.health === 100) {
                    turnsUntilVacant += 1;
                }

                if (foodNextToHead) {
                    turnsUntilVacant += 1;
                }

                if (i === snake.body.length - 1 && snake.health < 100 && !foodNextToHead) {
                    type = "vacant";
                }
                const bodyPart: Coordinate = snake.body[i];
                this.graph[bodyPart.x][bodyPart.y].type = type;
                this.graph[bodyPart.x][bodyPart.y].turnsUntilVacant = turnsUntilVacant;
            }
        }
    }

    private hasFoodNexToHead(snake, board: Board) {
        const neighbours = getValidNeighbours(snake.body[0], board);

        for (const neighbour of neighbours) {
            if (this.graph[neighbour.x][neighbour.y].type === "food") {
                return true;
            }
        }
        return false;
    }
}

