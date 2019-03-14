let songDetailsHolder
let songName
let songAuthor

function setupSongDetails(){
    songDetailsHolder = createDiv()
    songDetailsHolder.class('songDetailsHolder')

    songName = createP('name')
    songName.id('songName')

    songAuthor = createP('author')
    songAuthor.id('songAuthor')

    songDetailsHolder.child(songName)
    songDetailsHolder.child(songAuthor)
}

function drawSongDetails(){
    if(songLoaded){
        songName.html(songDetails[currentSong].name)
        songAuthor.html(songDetails[currentSong]._author)
    }
}

function showDetails(){
    if(songLoaded){
        showElement(songAuthor)
        showElement(songName)
    }
}