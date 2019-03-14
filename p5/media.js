let mediaHolder
let playPauseBtn
let playPauseImg
let nextBtn
let prevBtn

function setupMediaButtons() {
    mediaHolder = createDiv()
    mediaHolder.class('mediaHolder')

    //Play current music
    playPauseBtn = createButton('')
    playPauseBtn.style('background-image', "url('../p5/assets/play-arrow.png')")
    playPauseBtn.id('mediaBtn')
    
    //Shifts to the next music
    nextBtn = createButton('')
    nextBtn.style('background-image', "url('../p5/assets/right-arrow.png')")
    nextBtn.id('mediaBtn')
    
    //Shifts to the previous music
    prevBtn = createButton('')
    prevBtn.style('background-image', "url('../p5/assets/left-arrow.png')")
    prevBtn.id('mediaBtn')

    
    mediaHolder.child(prevBtn)
    mediaHolder.child(playPauseBtn)
    mediaHolder.child(nextBtn)
    handleInput()
}

function handleInput(){
    playPauseBtn.mousePressed(() => {
        if (!songs[currentSong].isPlaying()) {
            playPauseBtn.style('background-image', "url('../p5/assets/pause-symbol.png')")
            songs[currentSong].play()
        } else if (songs[currentSong].isPlaying()) {
            playPauseBtn.style('background-image', "url('../p5/assets/play-arrow.png')")
            songs[currentSong].pause()
        }
    })

    nextBtn.mousePressed(() => {
        if(!songs[currentSong].isPlaying()){ //If currently not playing return
            return
        } else if(songs[currentSong].isPlaying){
            if(currentSong < totalSongs - 1) {
                songs[currentSong].stop()
                currentSong++
                songs[currentSong].play()
            } else if(currentSong === totalSongs - 1) {
                songs[currentSong].stop()
                currentSong = 0;
                playPauseBtn.html('play')
            }
        }
    })

    prevBtn.mousePressed(() => {
        if (currentSong > 0) {
            songs[currentSong].stop()
            currentSong--
            songs[currentSong].play()
        }
    })
}

function showMedia(){
    if(songLoaded){
        showElement(playPauseBtn)
        showElement(nextBtn)
        showElement(prevBtn)
    } else {
        hideElement(playPauseBtn)
        hideElement(nextBtn)
        hideElement(prevBtn)
    }
}


