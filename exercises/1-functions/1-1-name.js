"use strict";

drawLine();

function drawLine() {
    let canvas=document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

    context.lineWidth = 4;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50, 100);
    context.lineTo(50, 50);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'red';
    context.beginPath();
    context.moveTo(50, 100);
    context.lineTo(85, 100);
    context.stroke();



    context.lineWidth = 4;
    context.strokeStyle = 'orange';
    context.beginPath();
    context.moveTo(120, 50);
    context.lineTo(100, 100);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'orange';
    context.beginPath();
    context.moveTo(120, 50);
    context.lineTo(140, 100);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'orange';
    context.beginPath();
    context.moveTo(110, 80);
    context.lineTo(130, 80);
    context.stroke();



    context.lineWidth = 4;
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(160, 100);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(200, 100);
    context.lineTo(200, 50);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'yellow';
    context.beginPath();
    context.moveTo(160, 100);
    context.lineTo(160, 50);
    context.stroke();



    context.lineWidth = 4;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(220, 100);
    context.lineTo(220, 50);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(255, 50);
    context.lineTo(220, 50);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(255, 50);
    context.lineTo(255, 70);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(255, 70);
    context.lineTo(220, 70);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'green';
    context.beginPath();
    context.moveTo(260, 100);
    context.lineTo(220, 70);
    context.stroke();

    

    context.lineWidth = 4;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(290, 50);
    context.lineTo(270, 100);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(290, 50);
    context.lineTo(310, 100);
    context.stroke();

    context.lineWidth = 4;
    context.strokeStyle = 'blue';
    context.beginPath();
    context.moveTo(300, 80);
    context.lineTo(276, 80);
    context.stroke();




    
}   

