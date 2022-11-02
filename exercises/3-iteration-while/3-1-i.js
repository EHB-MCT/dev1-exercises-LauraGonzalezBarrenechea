"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawMultipleConcentricCircles();
}

function drawMultipleConcentricCircles() {
    let i = 0;
    let step = 15;
    while (i <= 10) {
        //center
        Utils.strokeCircle(200, 200, 10 + (i * step));
        //top left corner
        Utils.strokeCircle(50, 50, 10 + (i * step));
        //top right corner
        Utils.strokeCircle(350, 50, 10 + (i * step));
        //bottom right corner
        Utils.strokeCircle(350, 350, 10 + (i * step));
        //bottom left corner
        Utils.strokeCircle(50, 350, 10 + (i * step));
        i++;
    }
}