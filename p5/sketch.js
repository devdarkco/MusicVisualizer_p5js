//Json file containing all the songs data
let songsJson
// Variable to store the individual songData
let songDetails
//Current playing song
let currentSong = 0


//Songs details

let loadingText;

//Music Visualizer
let amplitude;
let frequency;

function preload(){
    songsJson = loadJSON('p5/assets/jsons/songs.json')
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    //Set the songDetails to the path in the json file
    songDetails = songsJson[0].songs
    //Set the total of songs the same as the length of the array in songDetails
    totalSongs = songDetails.length

    //Load all the songs
    for (let i = 0; i < songDetails.length; i++) {
        loadSongs(songDetails[i].url);
    }

    amplitude = new p5.Amplitude();
    frequency = new p5.FFT();
    
    //media.js
    setupMediaButtons()
    handleInput()
    
    //songDetails.js
    setupMusicDetails()
    setSongDetailsText()

    //loading.js
    setupLoadingElements()
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {

    showMedia()
    drawLoading()
    setSongDetailsText()
    showDetails()
    playAnimation()
}

function showElement(element){
    element.style('visibility', 'visible')
}

function hideElement(element){
    element.style('visibility', 'hidden')
}

function getRed(){
    return map(amplitude.getLevel(), 0, 1, 20, 150);;
}