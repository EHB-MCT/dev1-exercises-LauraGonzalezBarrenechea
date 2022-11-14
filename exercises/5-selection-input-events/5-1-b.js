"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;


drawDots();

function drawDots() {

    for (let i = 0; i < 100000; i++) {
        let x = Math.random() * width;
        let y = Math.random() * height;
        if ( y < height/2) {
            context.fillStyle = "red";
        } else {
            context.fillStyle = "blue";
        }
        Utils.fillCircle(x, y, 3);
    }
}















// drawDots();

// function drawDots() {

//     for (let i = 0; i < 100000; i++) {
//         let x = Math.random() * width;
//         let y = Math.random() * height;
//         let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
//         if (distance < 50 || distance > 100) {
//             context.fillStyle = "blue";
//         } else {
//             context.fillStyle = "red";
//         }
//         Utils.fillCircle(x, y, 5);
//     }
// }
