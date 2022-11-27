"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";
import * as Noise from "../../scriptsnoise.js";

let width = context.canvas.width;
let height = context.canvas.height;

window.onmousemove = drawCrosshair;

function drawCrosshair(event) {
	console.log(event.pageX, event.pageY);
	Utils.drawLine(event.pageX, 0, event.pageX, height);
	Utils.drawLine(0, event.pageY, width, event.pageY);

	context.fillStyle = "white";
	context.fillStyle(0, 0, width, height);
}
