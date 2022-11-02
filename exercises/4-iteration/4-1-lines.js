"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/Utils.js";

let horizontalLines = 60;
let verticalLines = 30;

let width = 600;
let height = 300;


drawLines();

function drawLines () {
    context.fillStyle = "orange";
    context.fillRect(0, 0, width, height);
    context.strokeStyle = "white";
    context.lineWidth = 2;
    
    let xSpacing = width / horizontalLines;
    let ySpacing = height / verticalLines;
    
    for (let i = 0; i < horizontalLines, i++) { 
        Utils.drawLine(0, i * xSpacing, width, height - i * xSpacing);
        Utils.drawLine(0, i * ySpacing, width, height - i * ySpacing);
    } 
}