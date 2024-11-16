const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width =700;
canvas.height = 900;

//Global settings
ctx.lineWidth = 10;
//canvas shadows
ctx.shadowOffsetX =2;
ctx.shadowOffsetY = 2;
ctx.shadowColor = 'black';

//add gradients
const gradient1 = ctx.createLinearGradient(0,0, canvas.width, canvas.height);
gradient1.addColorStop('0.2', 'pink');
gradient1.addColorStop('0.3', 'red');
gradient1.addColorStop('0.5', 'green');
gradient1.addColorStop('0.6', 'blue');
gradient1.addColorStop('0.8', 'orange');
const gradient2 = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.5, 30, canvas.width * 0.5, canvas.height * 0.5, 200);
gradient2.addColorStop('0.6', 'blue');
gradient2.addColorStop('0.8', 'orange');

// canvas pattern
const patternImage = document.getElementById('patternImage');
const pattern1 = ctx.createPattern(patternImage, 'no-repeat');

ctx.strokeStyle = pattern1;

//OOP
class line {
    constructor(canvas) {
        this.canvas = canvas;
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        //array
        this.history = [{x: this.x, y: this.y}];
        this.lineWidth = Math.floor(Math.random() * 15 + 1);
        this.hue = Math.floor(Math.random() * 45);
        this.maxLength = Math.floor(Math.random() * 150 + 10);
        //speed
        this.speedX = Math.random() * 5 -2.5;
        this.speedY = 10;
        //give each line a timer
        this.lifeSpan = this.maxLength * 10;
        this.timer = 0;
    }
    draw(context) {
        //context.strokeStyle = 'hsl('+ this.hue +', 100%, 50%)';
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
        this.timer++;
        if (this.timer < this.lifeSpan){
            //this.x = Math.random() * this.canvas.width;
            this.x += this.speedX + Math.random() * 50 - 25;
            //this.y = Math.random() * this.canvas.height;
            this.y += this.speedY + Math.random() * 50 - 25;
            this.history.push({x: this.x, y: this.y});
            if (this.history.length > this.maxLength){
                this.history.shift();
            }

        } else if (this.history.length <= 1) {
            //remove segments
            this.reset();
        } else {
            this.history.shift();
        }
        
    }
    reset() {
        this.x = Math.random() * this.canvas.width;
        this.y = Math.random() * this.canvas.height;
        //array
        this.history = [{x: this.x, y: this.y}];
        this.timer = 0;
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