//Media buttons
let playPauseBtn;
let nextBtn;
let prevBtn;

function setupMediaButtons() {
    //Play current music
    playPauseBtn = createButton('play')
    playPauseBtn.style('position', width / 2, height - 100)
    playPauseBtn.style('visibility', 'hidden')
    
    //Shifts to the next music
    nextBtn = createButton('next')
    nextBtn.style('position', width / 2 + 100, height - 100)
    nextBtn.style('visibility', 'hidden')
    
    //Shifts to the previous music
    prevBtn = createButton('prev')
    prevBtn.style('position', width / 2 - 100, height - 100)
    prevBtn.style('visibility', 'hidden')
}

function handleInput(){
    playPauseBtn.mousePressed(() => {
        if (!songs[currentSong].isPlaying()) {
            playPauseBtn.html('pause')
            songs[currentSong].play()
        } else if (songs[currentSong].isPlaying()) {
            songs[currentSong].pause()
            playPauseBtn.html('play')
        }
    })

    nextBtn.mousePressed(() => {
        if(!songs[currentSong].isPlaying()){ //If currently not playing return
            return
        } else if(songs[currentSong].isPlaying){
            if(currentSong < totalSongs - 1) {
                songs[currentSong].stop();
                currentSong++
                songs[currentSong].play();
            } else if(currentSong === totalSongs - 1) {
                songs[currentSong].stop();
                currentSong = 0;
                playPauseBtn.html('play')
            }
        }
    })

    prevBtn.mousePressed(() => {
        if (currentSong > 0) {
            songs[currentSong].stop();
            currentSong--;
            songs[currentSong].play();
        }
    })
}

function showMedia(){
    if(songLoaded){
        showElement(playPauseBtn)
        showElement(nextBtn)
        showElement(prevBtn)
    }
}


