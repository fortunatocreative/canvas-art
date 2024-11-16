const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 700;
canvas.height = 900;

//draw rectangle
ctx.fillStyle = 'red';
ctx.fillRect(100, 150, 200, 150);
ctx.lineWidth = 10;
ctx.strokeStyle = 'blue';
ctx.strokeRect(100, 150, 200, 150);

//Global settings
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';

//draw lines and segments
ctx.beginPath();
ctx.moveTo(350, 600);
ctx.lineTo(450, 700);
ctx.lineTo(350, 800);
ctx.lineTo(150, 100);
ctx.lineTo(250, 300);
ctx.lineTo(450, 200);
ctx.stroke();