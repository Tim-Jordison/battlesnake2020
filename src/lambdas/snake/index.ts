import * as cassava from "cassava";
import {Game} from "./model/battlesnake-official/Game";
import {doRandomWalk, Walk} from "./utils/randomWalk";
// import {getAllowedMoves} from "./utils/allowedMoves";

export const router = new cassava.Router();

router.route("/start")
    .method("POST")
    .handler(evt => {
        console.log("start\n" + JSON.stringify(evt));
        const game: Game = evt.body;
        console.log("BOARD: " + JSON.stringify(game.board, null, 4));
        console.log("YOU: " + JSON.stringify(game.you, null, 4));
        return {
            statusCode: cassava.httpStatusCode.success.OK,
            body: {
                "color": "#ffa203",
                "headType": "bendr",
                "tailType": "pixel"
            }
        };
    });

router.route("/move")
    .method("POST")
    .handler(evt => {
        const start = new Date();
        console.log(JSON.stringify(evt));
        const game: Game = evt.body;
        console.log("Game: " + JSON.stringify(game, null, 4));
        let best: Walk;
        let elapsedTimeMs = (new Date()).getMilliseconds() - start.getMilliseconds();
        while (elapsedTimeMs < 100) {
            const walk = doRandomWalk(game);
            if (!best) {
                best = walk;
            } else if (best && walk.turn > best.turn) {
                best = walk;
            }
            elapsedTimeMs = (new Date()).getMilliseconds() - start.getMilliseconds();
        }

        console.log("turn: " + game.turn +  " move: " + best.direction);
        return {
            statusCode: cassava.httpStatusCode.success.OK,
            body: {
                "move": best.direction,
                "shout": best.direction
            }
        };
    });

router.route("/end")
    .method("POST")
    .handler(evt => {
        return {
            statusCode: cassava.httpStatusCode.success.NO_CONTENT,
            body: null
        };
    });

router.route("/ping")
    .method("POST")
    .handler(evt => {
        return {
            statusCode: cassava.httpStatusCode.success.OK,
            body: null
        };
    });

/**
 * Export the handler so it can be called.
 */
export const handler = router.getLambdaHandler();
