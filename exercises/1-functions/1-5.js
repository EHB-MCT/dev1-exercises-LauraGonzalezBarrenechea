"use strict";

drawLine();

function drawLine() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");


    context.fillStyle = "orange";
    context.beginPath();
    context.rect(50, 50, 150, 150);
    context.fill();


    context.fillStyle = "#0000fe";
    context.beginPath();
    context.rect(50, 150, 150, 50);
    context.fill();


    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(125, 150, 50, 0, Math.PI, true);
    context.fill();
}