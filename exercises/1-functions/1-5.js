"use strict";

drawLine();

function drawLine() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    context.fillStyle = "orange";
    context.beginPath();
    context.rect(50, 50, 300, 300);
    context.fill();


    context.fillStyle = "#0000fe";
    context.beginPath();
    context.rect(50, 250, 300, 100);
    context.fill();


    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(200, 250, 100, 0, Math.PI, true);
    context.fill();
}