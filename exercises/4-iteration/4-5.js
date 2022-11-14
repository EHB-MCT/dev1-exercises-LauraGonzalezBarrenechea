"use strict";

import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawRandomContent();
drawCenteredText();
drawMask();

//This code is not finished yet

function drawRandomContent() {
	for (let i = 0; i < 250; i++) {
		context.lineWidth = 10 + Math.random() * 10;
		let gray = Math.floor(Math.random() * 255);
		context.strokeStyle = Utils.rgba(gray, gray, gray, 0.5);
		let y1 = Math.random() * height;
		let y2 = Math.random() * height;
		Utils.drawLine(0, y1, width, y2);

		//text
		let fontSize = Math.floor(Math.random() * 80);
		context.font = fontSize + "px Arial";
		context.fillText("MCT", Math.random() * width, Math.random() * height);
	}
}

function drawCenteredText() {
	context.textAlign = "center";

	context.fillStyle = "black";
	context.font = "200px Arial";
	context.fillText("MCT", width / 2, height / 2);

	context.fillStyle = "red";
	context.font = "120px Arial";
	context.fillText("ehb", width / 2, height / 2 - 200);

	context.fillStyle = "white";
	context.font = "120px Arial";
	context.fillText("is da shit", width / 2, height / 2 + 200);
}

function drawMask() {
	context.fillStyle = "black";
	context.beginPath();
	context.moveTo(0, 0);
	context.lineTo(width / 2, 0);
	context.lineTo(0, height / 2);
	context.fill();
}
