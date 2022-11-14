"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;

let amount = 10;
let size = width / amount;

drawCircles1();

function drawCircles1() {
	context.fillStyle = "lightblue";

	for (let j = 0; j < amount; j++) {
		console.log(j);
		for (let i = 0; i < amount; i++) {
			Utils.fillCircle(i * size, j * size, size / 2);
		}
	}
}
