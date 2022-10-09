"use strict";

drawLine();

function drawLine() {

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 1;
    context.strokeStyle = 'red'; 
    context.beginPath();
    context.rect(50, 50, 200, 200);
    context.stroke();

   
    context.lineWidth = 1;
    context.strokeStyle = 'red'; 
    context.beginPath();
    context.rect(250, 250, 200, 200);
    context.stroke();


    context.fillStyle = "black";
    context.lineWidth = "1";
    context.beginPath();
    context.rect(150, 150, 200, 200);
    context.fill();
    context.stroke();


    context.lineWidth = 1;
    context.strokeStyle = 'red'; 
    context.beginPath();
    context.rect(80, 350, 70, 70);
    context.stroke();


    context.fillStyle = "black";
    context.beginPath();
    context.rect(50, 420, 30, 30);
    context.fill();  


    context.lineWidth = 1;
    context.strokeStyle = 'red'; 
    context.beginPath();
    context.rect(350, 80, 70, 70);
    context.stroke();


    
    context.fillStyle = "black";
    context.beginPath();
    context.rect(420, 50, 30, 30);
    context.fill();  
}

