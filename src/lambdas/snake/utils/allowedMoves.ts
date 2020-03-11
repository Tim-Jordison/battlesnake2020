// import {GameGraph} from "../model/graph-representation/GameGraph";
// import {NodeType} from "../model/graph-representation/GraphNode";
// import {Game} from "../model/battlesnake-official/Game";
//
//
// export function getAllowedMoves(game: Game): string[] {
//     const gameGraph: GameGraph = new GameGraph(game.board);
//     const moves = [];
//     const head = game.you.body[0];
//     const allowedMoves: NodeType[] = ["empty", "food", "snake_disappearing_tail"];
//     if (head.x > 0 && allowedMoves.indexOf(gameGraph.board[head.x - 1][head.y].type) !== -1) {
//         moves.push("left");
//     }
//     if (head.x + 1 < game.board.width && allowedMoves.indexOf(gameGraph.board[head.x + 1][head.y].type) !== -1) {
//         moves.push("right");
//     }
//     if (head.y > 0 && allowedMoves.indexOf(gameGraph.board[head.x][head.y - 1].type) !== -1) {
//         moves.push("up");
//     }
//     if (head.y + 1 < game.board.height && allowedMoves.indexOf(gameGraph.board[head.x][head.y + 1].type) !== -1) {
//         moves.push("down");
//     }
//     return moves;
// }
