const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width =300;
canvas.height = 300;

//Global settings
ctx.lineWidth = 5;
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
        this.maxLength = 10;
        //speed
        this.speedX = 10;
        this.speedY = 5;
    }
    draw(context) {
        context.strokeStyle = 'hsl('+ this.hue +', 100%, 50%)';
        context.lineWidth = this.lineWidth;
        context.beginPath();
        context.moveTo(this.history[0].x, this.history[0].y);
        //run through 3 times to add segments
        
        for (let i = 0; i < this.history.length; i++) {
            context.lineTo(this.history[i].x, this.history[i].y);
        }
        
        context.stroke();
    }
    update() {
        //this.x = Math.random() * this.canvas.width;
        this.x += this.speedX;
        //this.y = Math.random() * this.canvas.height;
        this.y += this.speedY;
        this.history.push({x: this.x, y: this.y});
        if (this.history.length > this.maxLength){
            this.history.shift();
        }
    }
}

const linesArray = [];
const numberofLines = 10;
for (let i =0; i< numberofLines; i++) {
    linesArray.push(new line(canvas));
}



function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    //draw line
    linesArray.forEach(line => {
        line.draw(ctx)
        line.update()
    });
    // update line
    //linesArray.forEach(line => line.update());
    requestAnimationFrame(animate);
}
//call function
animate();