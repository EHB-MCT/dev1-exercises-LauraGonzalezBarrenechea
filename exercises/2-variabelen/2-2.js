"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

   let width = context.canvas.width;
   let height = context.canvas.height;


  drawRect(100, 400);
  drawRect(150, 300);
  drawRect(200, 200);
  
  function drawRect(pos, size) {
  let r = Math.random(Math.random() * 255);
  let g = Math.random(Math.random() * 255);
  let b = Math.random(Math.random() * 255);
  console.log(r, g, b);
  let color = "rgb(" + r + "," + g + "," + b + ")";

  context.fillStyle = color;
  context.fillRect(pos, pos, size, size);
}
