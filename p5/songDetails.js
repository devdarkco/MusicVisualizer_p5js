//UI
let songDetailsHolder;
let songName;
let songAuthor;

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

function setSongDetailsText(){
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