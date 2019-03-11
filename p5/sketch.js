let songFiles = [{
        url: 'bury_a_friend',
        name: 'Bury a Friend - Billie Eilish'
    },
    {
        url: 'wish_you_were_gay',
        name: 'Wish u are gay - Billie Eilish'
    }
];
let songs = [];
let songLoaded = false;
let progress = 0;
let totalSongs;
let currentSong = 0;

let playPauseBtn;
let nextBtn;
let prevBtn;

let songStatus;
let loadingText;

function setup() {
    createCanvas(windowWidth, windowHeight)

    //Sets the value to the total of files in the array
    totalSongs = songFiles.length

    //load all the files
    for (let i = 0; i < songFiles.length; i++) {
        loadSongs(songFiles[i].url);
    }

    setupMediaButtons();

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
        background(50)
        loadingText.style('visibility', 'hidden')
    }
}

function loadSongs(filename) {
    loadSound('p5/assets/' + filename + '.mp3', sucess)

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

function setupMediaButtons() {
    //Play current music
    playPauseBtn = createButton('play')
    playPauseBtn.style('position', width / 2, height - 100)
    playPauseBtn.style('visibility', 'hidden')
    playPauseBtn.mousePressed(() => {
        if (!songs[currentSong].isPlaying()) {
            console.log('play')
            playPauseBtn.html('pause')
            songs[currentSong].play()
            songStatus.html('Playing ' + songFiles[currentSong].name)
        } else if (songs[currentSong].isPlaying()) {
            console.log('pause')
            songs[currentSong].pause()
            playPauseBtn.html('play')
            songStatus.html('Paused ' + songFiles[currentSong].name)
        }
    })

    //Shifts to the next music
    nextBtn = createButton('next')
    nextBtn.style('position', width / 2 + 100, height - 100)
    nextBtn.style('visibility', 'hidden')
    nextBtn.mousePressed(() => {
        if (currentSong < totalSongs) {
            songs[currentSong].stop();
            currentSong++;
            songs[currentSong].play();
            songStatus.html('Playing ' + songFiles[currentSong].name)
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
            songStatus.html('Playing ' + songFiles[currentSong].name)
        }
    })
}

function showGUI() {
    playPauseBtn.style('visibility', 'visible')
    nextBtn.style('visibility', 'visible')
    prevBtn.style('visibility', 'visible')
    songStatus.style('visibility', 'visible')
    //loadingText.style('visibility', 'visible')
}