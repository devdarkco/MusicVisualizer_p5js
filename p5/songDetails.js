let songDetailsHolder
let songName
let songAuthor

function setupSongDetails() {
    songDetailsHolder = createDiv()
    songDetailsHolder.class('songDetailsHolder')

    songName = createP('name')
    songName.id('songName')

    songAuthor = createP('author')
    songAuthor.id('songAuthor')

    songDetailsHolder.child(songName)
    songDetailsHolder.child(songAuthor)
    songDetailsHolder.child(timeStampSlider)
    songDetailsHolder.child(mediaHolder)
}

function drawSongDetails() {
    if (songLoaded) {
        songName.html(songDetails[currentSong].name)
        songAuthor.html(songDetails[currentSong].author)
    }
}

function showDetails() {
    if (songLoaded && deviceChoosed) {
        showElement(songAuthor)
        showElement(songName)
    }
}