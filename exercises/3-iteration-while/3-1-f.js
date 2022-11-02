"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 0;
    let step = 25;
    let offset = 75;
    let amount = 7;
    
    while (i < amount) {
        context.strokeRect(offset + (i * step), offset + (i * step), 100, 100);
        i++;
    }
}