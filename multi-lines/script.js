const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width =300;
canvas.height = 300;

//Global settings
ctx.lineWidth = 10;
ctx.strokeStyle = 'red';

//OOP
class line {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        //array
        this.history = [{x: this.x, y: this.y}];
        this.lineWidth = Math.floor(Math.random() * 15 + 1);
        this.hue = Math.floor(Math.random() * 360);
    }
    draw(context) {
        context.strokeStyle = 'hsl('+ this.hue +', 100%, 50%)';
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        //run through 3 times to add segments
        for (let i = 0; i < 3; i++) {
            this.x = Math.random() * this.canvas.width;
            this.y = Math.random() * this.canvas.height;
            this.history.push({x: this.x, y: this.y});
        }
        for (let i = 0; i < this.history.length; i++) {
            context.lineTo(this.history[i].x, this.history[i].y);
        }
        
        context.stroke();
    }
}

const linesArray = [];
const numberofLines = 1;
for (let i =0; i< numberofLines; i++) {
    linesArray.push(new line(canvas));
}

linesArray.forEach(line => line.draw(ctx));