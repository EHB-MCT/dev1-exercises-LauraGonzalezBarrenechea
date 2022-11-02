"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawLines();
}

function drawLines() {
    let i = 0;
    let offset = 75;
    let spacing = 25;
    while (i < 11) {
        Utils.drawLine(75, offset + (spacing * i), 325, offset + (spacing * i));
        console.log("loop!");
        i++;
    }
}