"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawCircles4();

function drawCircles4() {
	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			let x = i * 100;
			let y = j * 100;
			context.fillStyle = Utils.hsl((i % 2) * 200, 70, 70);
			Utils.fillCircle(x, y, 50);
		}
	}
}
