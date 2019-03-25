let songsJson
let songDetails
let currentSong = 0

function preload() {
    //Loads the json and attach to the songsJson variable
    songsJson = loadJSON('p5/assets/jsons/songs.json')
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    songDetails = songsJson[0].songs
    totalSongs = songDetails.length

    for (let i = 0; i < songDetails.length; i++) {
        loadSongs(songDetails[i].url)
    }

    setupMenu()
    setupMediaButtons()
    setupSongDetails()
    setupPlayAnimation()
    setupOptions()
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
}

function draw() {
    showMenu()
    showOptions()
    showMedia()
    drawLoading()
    drawSongDetails()
    showDetails()
    drawPlayAnimation()
}

function showElement(element) {
    element.style('visibility', 'visible')
}

function hideElement(element) {
    element.style('visibility', 'hidden')
}
