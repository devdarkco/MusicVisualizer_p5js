let amplitude
let frequency

let particles = []
let maxParticles = 50

function setupPlayAnimation(){
    amplitude = new p5.Amplitude()
    frequency = new p5.FFT()
}

function drawPlayAnimation(){
    if(songLoaded){
        background(getRed(), 0, 0)


        particles.push(new Particle(amplitude.getLevel()))

        for(let i = particles.length - 1; i >= 0; i--){
            
            particles[i].show()
            particles[i].update()
            if(particles[i].isDead()){
                particles.splice(i, 1);
            }
        }
    }
}

function spawnParticles(){

    
}

function getRed(){
    return map(amplitude.getLevel(), 0, 1, 20, 150)
}

