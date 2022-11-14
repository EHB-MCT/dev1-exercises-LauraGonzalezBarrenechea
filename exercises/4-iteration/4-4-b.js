"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;

drawCircles2();

function drawCircles2() {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let x = i * 100;
			let y = j * 100;
			context.fillStyle = Utils.hsla(200, 70, 70, 50);
			Utils.fillCircle(x, y, Math.random() * 100);
		}
	}
}
