import * as cassava from "cassava";
import * as chai from "chai";
import {router} from "./index";
import {Game} from "./model/battlesnake-official/Game";

describe("/move", () => {

    it("can get a move", async () => {
        const game: Game = {
            "game": {
                "id": "game-id-string"
            },
            "turn": 4,
            "board": {
                "height": 15,
                "width": 15,
                "food": [
                    {
                        "x": 1,
                        "y": 3
                    }
                ],
                "snakes": [
                    {
                        "id": "snake-id-string",
                        "name": "Sneky Snek",
                        "health": 90,
                        "body": [
                            {
                                "x": 1,
                                "y": 3
                            }
                        ],
                        "shout": "Hello my name is Sneky Snek"
                    }
                ]
            },
            "you": {
                "id": "snake-id-string",
                "name": "Sneky Snek",
                "health": 90,
                "body": [
                    {
                        "x": 1,
                        "y": 3
                    }
                ],
                "shout": "Hello my name is Sneky Snek"
            }
        };
        const res = await cassava.testing.testRouter(router, cassava.testing.createTestProxyEvent("/move", "POST", {
            body: JSON.stringify(game)
        }));
        chai.assert.equal(res.statusCode, 200);
    });

});
