import {Board} from "../battlesnake-official/Board";
import {GameGraph} from "./GameGraph";
import * as chai from "chai";

describe("/GameGraph", () => {
    it("can parse Board", async () => {
        const board: Board = {
            "height": 5,
            "width": 5,
            "food": [
                {
                    "x": 2,
                    "y": 2
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
                        },
                        {
                            "x": 2,
                            "y": 3
                        }
                        , {
                            "x": 3,
                            "y": 3
                        }
                    ],
                    "shout": "Hello my name is Sneky Snek"
                }
            ]
        };
        const gameGraph = new GameGraph(board);
        chai.assert.deepEqual(gameGraph, {
            "graph": [
                [
                    {
                        "x": 0,
                        "y": 0,
                        "type": "empty"
                    },
                    {
                        "x": 0,
                        "y": 1,
                        "type": "empty"
                    },
                    {
                        "x": 0,
                        "y": 2,
                        "type": "empty"
                    },
                    {
                        "x": 0,
                        "y": 3,
                        "type": "empty"
                    },
                    {
                        "x": 0,
                        "y": 4,
                        "type": "empty"
                    }
                ],
                [
                    {
                        "x": 1,
                        "y": 0,
                        "type": "empty"
                    },
                    {
                        "x": 1,
                        "y": 1,
                        "type": "empty"
                    },
                    {
                        "x": 1,
                        "y": 2,
                        "type": "empty"
                    },
                    {
                        "x": 1,
                        "y": 3,
                        "type": "snake_head"
                    },
                    {
                        "x": 1,
                        "y": 4,
                        "type": "empty"
                    }
                ],
                [
                    {
                        "x": 2,
                        "y": 0,
                        "type": "empty"
                    },
                    {
                        "x": 2,
                        "y": 1,
                        "type": "empty"
                    },
                    {
                        "x": 2,
                        "y": 2,
                        "type": "food"
                    },
                    {
                        "x": 2,
                        "y": 3,
                        "type": "snake_body"
                    },
                    {
                        "x": 2,
                        "y": 4,
                        "type": "empty"
                    }
                ],
                [
                    {
                        "x": 3,
                        "y": 0,
                        "type": "empty"
                    },
                    {
                        "x": 3,
                        "y": 1,
                        "type": "empty"
                    },
                    {
                        "x": 3,
                        "y": 2,
                        "type": "empty"
                    },
                    {
                        "x": 3,
                        "y": 3,
                        "type": "snake_tail"
                    },
                    {
                        "x": 3,
                        "y": 4,
                        "type": "empty"
                    }
                ],
                [
                    {
                        "x": 4,
                        "y": 0,
                        "type": "empty"
                    },
                    {
                        "x": 4,
                        "y": 1,
                        "type": "empty"
                    },
                    {
                        "x": 4,
                        "y": 2,
                        "type": "empty"
                    },
                    {
                        "x": 4,
                        "y": 3,
                        "type": "empty"
                    },
                    {
                        "x": 4,
                        "y": 4,
                        "type": "empty"
                    }
                ]
            ]
        });
    });
});
