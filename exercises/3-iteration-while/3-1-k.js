"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawSunBeams();
}

function drawSunBeams() {
    let i = 0;
    let step = 10;
    let amount = 300 / step;
    while (i <= amount) {
        Utils.drawLine(50, 50, 350, 50 + (i * step));
        Utils.drawLine(50, 50, 50 + (i * step), 350);
        i++;
    }
}