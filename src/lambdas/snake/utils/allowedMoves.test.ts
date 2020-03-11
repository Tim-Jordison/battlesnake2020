// import {Game} from "../model/battlesnake-official/Game";
// import {getAllowedMoves} from "./allowedMoves";
// import * as chai from "chai";
//
// describe("basic allowed moves", () => {
//     it("can get basic allowed moves", () => {
//         const game: Game = {
//             "game": {
//                 "id": "game-id-string"
//             },
//             "turn": 4,
//             "board": {
//                 "height": 7,
//                 "width": 7,
//                 "food": [
//                     {
//                         "x": 0,
//                         "y": 2
//                     },
//                     {
//                         "x": 2,
//                         "y": 6
//                     }
//                 ],
//                 "snakes": [
//                     {
//                         "id": "gs_QvjQTypMxJmCQkFTdC3VFT4f",
//                         "name": "badsnake",
//                         "health": 96,
//                         "body": [
//                             {
//                                 "x": 3,
//                                 "y": 5
//                             },
//                             {
//                                 "x": 3,
//                                 "y": 4
//                             },
//                             {
//                                 "x": 2,
//                                 "y": 4
//                             }
//                         ],
//                         "shout": "I am moving left!"
//                     }
//                 ]
//             },
//             "you": {
//                 "id": "gs_QvjQTypMxJmCQkFTdC3VFT4f",
//                 "name": "badsnake",
//                 "health": 96,
//                 "body": [
//                     {
//                         "x": 3,
//                         "y": 5
//                     },
//                     {
//                         "x": 3,
//                         "y": 4
//                     },
//                     {
//                         "x": 2,
//                         "y": 4
//                     }
//                 ],
//                 "shout": "I am moving left!"
//             }
//         };
//
//         const allowedMoves = getAllowedMoves(game);
//         chai.assert.sameMembers(allowedMoves, ['left', 'right', 'down']);
//     });
//
//     it("can get basic allowed moves", () => {
//         const game: Game = {
//             "game": {
//                 "id": "f8102bfb-12ca-41d2-bdbb-0e49a2385050"
//             },
//             "turn": 9,
//             "board": {
//                 "height": 11,
//                 "width": 11,
//                 "food": [
//                     {
//                         "x": 5,
//                         "y": 3
//                     }
//                 ],
//                 "snakes": [
//                     {
//                         "id": "gs_S3kPTyx3vXvPY8v4VdVfmH8Q",
//                         "name": "badsnake",
//                         "health": 91,
//                         "body": [
//                             {
//                                 "x": 0,
//                                 "y": 5
//                             },
//                             {
//                                 "x": 1,
//                                 "y": 5
//                             },
//                             {
//                                 "x": 2,
//                                 "y": 5
//                             }
//                         ],
//                         "shout": "I am moving left!"
//                     }
//                 ]
//             },
//             "you": {
//                 "id": "gs_S3kPTyx3vXvPY8v4VdVfmH8Q",
//                 "name": "badsnake",
//                 "health": 91,
//                 "body": [
//                     {
//                         "x": 0,
//                         "y": 5
//                     },
//                     {
//                         "x": 1,
//                         "y": 5
//                     },
//                     {
//                         "x": 2,
//                         "y": 5
//                     }
//                 ],
//                 "shout": "I am moving left!"
//             }
//         };
//
//         const allowedMoves = getAllowedMoves(game);
//         chai.assert.sameMembers(allowedMoves, ['up', 'down']);
//     });
//
// });