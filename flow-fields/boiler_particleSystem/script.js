// Boilerplate Particle System
//
//
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

//entire canvas area full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//global canvas settings
//console.log(ctx);
ctx.fillStyle = 'white';
ctx.strokeStyle = 'white';
ctx.lineWidth = 1;

class Particle {
    constructor(effect){
        this.effect = effect;
        this.x = Math.floor(Math.random() * this.effect.width);
        this.y = Math.floor(Math.random() * this.effect.height);
        //animation speed, defines speed on motion direction.
        //this.speedX = 3;
        //this.speedY = 1;
        //Randomize spped and direction
        this.speedX = Math.random() * 5 - 2.5;
        this.speedY = Math.random() * 5 - 2.5;
    }
    draw(context){
        //particle sizes
        context.fillRect(this.x, this.y, 50, 50);
    }
    // update will define motion
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }
}

class Effect {
    constructor(width,height) {
        this.width = width;
        this.height = height;
        this.particles = [];
        this.numberOfParticles = 50;
        this.init();
    }
    //create new particle from particale class
    init(){
        // create particles
            for (let i = 0; i < this.numberOfParticles; i++){
            this.particles.push(new Particle(this));
        } 
    }
    render(context){
        this.particles.forEach(particle => {
            particle.draw(context);
            particle.update();
        });
    }  
}

const effect = new Effect(canvas.width, canvas.height);
//console.log(effect);

// Create animate function
function animate(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
    effect.render(ctx);
    requestAnimationFrame(animate);
}

// Call animate function
animate();