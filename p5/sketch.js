//Json file containing all the songs data
let songsJson;
// Variable to store the individual songData
let songDetails;
//Array to store all the songs objects
let songs = [];
//Variable to check is all the songs have been loaded
let songLoaded = false;
//Changes depending on the current loading of songs
let progress = 0;
//total of songs in the json file
let totalSongs;
//Current song playing
let currentSong = 0;

//Media buttons
let playPauseBtn;
let nextBtn;
let prevBtn;

//Songs details
let songDetailsHolder;
let songName;
let songAuthor;

//
let songStatus;
let loadingText;

//Music Visualizer
let amplitude;
let frequency;

function preload(){
    songsJson = loadJSON('p5/assets/songs.json')
}

function setup() {
    createCanvas(windowWidth, windowHeight)

    amplitude = new p5.Amplitude();
    frequency = new p5.FFT();

    songDetails = songsJson[0].songs;

    //Sets the value to the total of files in the array
    totalSongs = songDetails.length

    //load all the files
    for (let i = 0; i < songDetails.length; i++) {
        loadSongs(songDetails[i].url);
    }

    setupMediaButtons();
    setupMusicDetails();

    //Shows current status
    songStatus = createP("Not playing...")
    songStatus.style('visibility', 'hidden')
    songStatus.id('songStatus')

    //Loading text...
    loadingText = createP("Loading songs...")
    loadingText.style('position', (width / 2) - 250, height / 2 - 100)
    loadingText.id('loadingText')
}

function draw() {

    //If the songs arent loaded yet play the animation;
    if (!songLoaded) {
        background(0);

        //Foreground
        stroke(255);
        noFill();
        rect(width / 2 - 250, height / 2 - 25, 500, 50);

        //Bakground
        noStroke();
        fill(255, 100);
        var w = 500 * progress / totalSongs;
        rect(width / 2 - 250, (height / 2 - 25), w, 50);

        //Show loading text
        loadingText.style('visibility', 'visible')
    } else {
        background(getRed(), 0, 0);
        loadingText.style('visibility', 'hidden')
        setSongDetailsText(songDetails[currentSong].name, songDetails[currentSong].author)
    }
}

function loadSongs(filename) {
    loadSound('p5/assets/songs/' + filename + '.mp3', sucess)

    function sucess(song) {
        songs.push(song)
        progress++
        console.log('Song loaded - Progress: ' + progress)
        if (progress == totalSongs) {
            setTimeout(() => {
                songLoaded = true
                showGUI()
            }, 2000)
        }
    }
}

function setupMusicDetails(){
    songDetailsHolder = createDiv();
    songDetailsHolder.class('songDetailsHolder')

    songName = createP('name')
    songName.id('songName')

    songAuthor = createP('author')
    songAuthor.id('songAuthor')

    songDetailsHolder.child(songName)
    songDetailsHolder.child(songAuthor)
}

function setupMediaButtons() {
    //Play current music
    playPauseBtn = createButton('play')
    playPauseBtn.style('position', width / 2, height - 100)
    playPauseBtn.style('visibility', 'hidden')
    playPauseBtn.mousePressed(() => {
        if (!songs[currentSong].isPlaying()) {
            playPauseBtn.html('pause')
            songs[currentSong].play()
        } else if (songs[currentSong].isPlaying()) {
            songs[currentSong].pause()
            playPauseBtn.html('play')
        }
    })

    //Shifts to the next music
    nextBtn = createButton('next')
    nextBtn.style('position', width / 2 + 100, height - 100)
    nextBtn.style('visibility', 'hidden')
    nextBtn.mousePressed(() => {
        if(!songs[currentSong].isPlaying()){ //If currently not playing return
            return
        } else if(songs[currentSong].isPlaying){
            if(currentSong < totalSongs - 1) {
                songs[currentSong].stop();
                currentSong++;
                songs[currentSong].play();
                songStatus.html('Playing ' + songDetails[currentSong].name)
            } else if(currentSong === totalSongs - 1) {
                songs[currentSong].stop();
                currentSong = 0;
                playPauseBtn.html('play')
            }
        }
    })

    //Shifts to the previous music
    prevBtn = createButton('prev')
    prevBtn.style('position', width / 2 - 100, height - 100)
    prevBtn.style('visibility', 'hidden')
    prevBtn.mousePressed(() => {
        if (currentSong > 0) {
            songs[currentSong].stop();
            currentSong--;
            songs[currentSong].play();
            songStatus.html('Playing ' + songDetails[currentSong].name)
        }
    })
}

function setSongDetailsText(name, author){
    songName.html(name)
    songAuthor.html(author)
}

function showGUI() {
    playPauseBtn.style('visibility', 'visible')
    nextBtn.style('visibility', 'visible')
    prevBtn.style('visibility', 'visible')
    songStatus.style('visibility', 'visible')
    songName.style('visibility', 'visible')
    songAuthor.style('visibility', 'visible')
}

function getRed(){
    return map(amplitude.getLevel(), 0, 1, 10, 255);;
}