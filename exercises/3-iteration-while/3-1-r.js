"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawWarpedEllipses();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawWarpedEllipses() {
    let i = 0;
    let step = 25;
    let offset = 200;
    let amount = 5;
    while (i <= amount) {
        let gray = 255 - i / 5 * 255;
        context.fillStyle = Utils.rgb(gray, gray, gray);
        Utils.fillAndStrokeEllipse(offset, 200, 25 + (i * step), 150 - (i * step));
        i++;
    }
}