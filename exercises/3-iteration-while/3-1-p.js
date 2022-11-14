"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    drawConcentricCircles();
    context.strokeStyle = "black";
    context.strokeRect(50, 50, 300, 300);
}

function drawConcentricCircles() {
    context.fillStyle = "#AAAAAA";
    let i = 0;
    let step = 25;
    let offset = 200;
    let amount = 5;
    while (i <= amount) {
        Utils.fillAndStrokeCircle(offset, 200, 150 - (i * step));
        i++;
    }
}