let songsJson
let songDetails
let currentSong = 0

let notes = []
let note

function preload(){
    songsJson = loadJSON('p5/assets/jsons/songs.json')
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    songDetails = songsJson[0].songs
    totalSongs = songDetails.length

    for (let i = 0; i < songDetails.length; i++) {
        loadSongs(songDetails[i].url)
    }
    
    setupMediaButtons()
    setupSongDetails()
    setupPlayAnimation()
    setupLoadingElements()
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    showMedia()
    drawLoading()
    drawSongDetails()
    showDetails()
    drawPlayAnimation() 
}

function showElement(element){
    element.style('visibility', 'visible')
}

function hideElement(element){
    element.style('visibility', 'hidden')
}