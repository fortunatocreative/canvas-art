const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = 500;
canvas.height = 500;

//Global settings
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';

//OOP
class line {
    constructor(canvas) {
        this.canvas = canvas;
        this.startX = Math.random() * this.canvas.width;
        this.startY = Math.random() * this.canvas.height;
        this.endX = Math.random() * this.canvas.width;
        this.endY = Math.random() * this.canvas.height;
        this.lineWidth = Math.floor(Math.random() * 15 + 1);
        this.hue = (Math.random() * 45);
    }
    draw(context) {
        context.strokeStyle = 'hsl('+ this.hue +', 100%, 50%)';
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.moveTo(this.startX, this.startY)
        context.lineTo(this.endX, this.endY);
        context.stroke();
    }
}

const linesArray = [];
const numberofLines = 500;
for (let i =0; i< numberofLines; i++) {
    linesArray.push(new line(canvas));
}

linesArray.forEach(line => line.draw(ctx));