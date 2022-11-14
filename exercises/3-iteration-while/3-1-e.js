"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalGrid();
}

function drawDiagonalGrid() {
    let i = 0;
    let step = 25;
    let offset = 50;
    let amount = 6;
    while (i <= amount) {
            Utils.drawLine(offset + (i * step), 200 + (i * step), 200 + (i * step), 50 + (i * step));
        Utils.drawLine(offset + (i * step), 200 - (i * step), 200 + (i * step), 350 - (i * step));
        i++;
    }
}