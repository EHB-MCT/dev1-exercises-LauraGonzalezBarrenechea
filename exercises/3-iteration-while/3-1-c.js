"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawCross();
}

function drawCross() {
    let i = 0;
    let offset = 160;
    let spacing = 20;
    while (i < 5) {
        Utils.drawLine(20, offset + (spacing * i), 350, offset + (spacing * i));
        Utils.drawLine(160 + (spacing * i), 20, 160 + (spacing * i), 350);
        i++;
    }
}