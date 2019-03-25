let amplitude
let amps = []

let frequencyGraph
let frequencyCircle
let freqWidth

let particles = []
let maxParticles = 100

let renderParticles = true;
let renderFreq = false;
let renderFreqCircle = false;
let renderAmpCircle = false;

let circleSpectrum = 0;

function setupPlayAnimation() {
    amplitude = new p5.Amplitude()
    frequencyGraph = new p5.FFT(0.9, 64)
    frequencyCircle = new p5.FFT(0.9, 128)

    freqWidth = width / 64
}

function drawPlayAnimation() {
    if (songLoaded && deviceChoosed) {
        background(getRed(), 0, 0)

        if (renderFreq) {
            drawGraphic()
        }
        if (renderParticles) {
            spawnParticles()
        }
        if (renderFreqCircle) {
            drawFreqCircle()
        }
        if (renderAmpCircle) {
            drawAmpCircle()
        }
    }
}

/* ---- Draws a graphics based on the analyze of the volumes coming from the frequency.analyze() function ---- */
function drawGraphic() {
    let spectrum = frequencyGraph.analyze()
    push()
    noStroke()
    for (let i = 0; i < spectrum.length; i++) {
        let freq = spectrum[i]
        let y = map(freq, 0, 256, 0, height / 2)
        fill(getRed() * 2, 0, 0)
        rect(width - i * freqWidth, 0, freqWidth, y + 2)
    }
    pop()
}

/* ---- Spawns the particles depending on the current device for performing improvements ---- */
function spawnParticles() {
    if (songs[currentSong].isPlaying()) {
        if (userData.device == 'pc') {
            particles.push(new Particle(amplitude.getLevel()))
        } else {
            if (particles.length < maxParticles) {
                particles.push(new Particle(amplitude.getLevel()))
            }
        }
    }

    for (let i = particles.length - 1; i >= 0; i--) {
        particles[i].show()
        particles[i].update()
        if (particles[i].isDead()) {
            particles.splice(i, 1);
        }
    }
}

/* ---- Draws various circles depending on the volumes coming from the frequency.analyze() function
   -- Uses the device to choose between two frequency objects for performing reasons ---- */
function drawFreqCircle() {
    if (userData.device === 'pc') {
        circleSpectrum = frequencyCircle.analyze();
    } else if (userData.device === 'smartphone') {
        circleSpectrum = frequencyGraph.analyze();
    }

    push()
    translate(width / 2, height / 2);
    for (let i = 0; i < circleSpectrum.length; i++) {
        let amp = circleSpectrum[i];
        let r = map(amp, 0, 256, 10, 200);

        fill(colorSet(), 0, 0);
        stroke(inverseColorSet(), 0, 0);
        ellipse(0, 0, r);
        if (userData.device === 'pc') {
            ellipse(width / 2, 0, r / 2)
            ellipse(-width / 2, 0, r / 2)
        }

    }
    pop()
}

/* ---- Draws a circle of vertexs that gets the current amplitude of the music to changes the shape of itself ----  */
function drawAmpCircle() {
    let amp = amplitude.getLevel()
    amps.push(amp)

    noFill()
    stroke(colorSet(), 0, 0)

    translate(width / 2, height / 2);
    beginShape();
    for (let i = 0; i < 360; i++) {
        let r;
        if (userData.device === 'pc') {
            r = map(amps[i], 0, 1, 200, 400);
        } else if (userData.device === 'smartphone') {
            r = map(amps[i], 0, 1, 100, 200);
        }

        let x = r * cos(i);
        let y = r * sin(i);
        vertex(x, y);
    }
    endShape();

    if (amps.length > 360) {
        amps.splice(0, 1);
    }
}

/* ---- Gets the input from the amplitude object and map the value to return a value between 0, 255
   --  This is used to set the background color ---- */
function getRed() {
    return map(amplitude.getLevel(), 0, 0.7, 0, 255)
}

/* ---- Color set that changes depending of the value given by the amplitude value ---- */
function colorSet() {
    if (amplitude.getLevel() < 0.1) {
        return 204
    } else if (amplitude.getLevel() > 0.1 && this.speed < 0.2) {
        return 128
    } else if (amplitude.getLevel() > 0.2) {
        return 0
    } else {
        return 204
    }
}

/* ---- Inverse color set that changes depending of the value given by the amplitude value 
   --- This is used in the circle color in the circles based on the frequency ---- */
function inverseColorSet() {
    if (amplitude.getLevel() < 0.1) {
        return 0
    } else if (amplitude.getLevel() > 0.1 && this.speed < 0.2) {
        return 128
    } else if (amplitude.getLevel() > 0.2) {
        return 204
    } else {
        return 0
    }
}