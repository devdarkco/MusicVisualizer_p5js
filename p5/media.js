let mediaHolder;
let playPauseBtn
let nextBtn
let prevBtn
let timeStampSlider

function setupMediaButtons() {
    mediaHolder = createDiv()
    mediaHolder.class('mediaHolder')
    
    playPauseBtn = createButton('')
    playPauseBtn.style('background-image', "url('p5/assets/images/play-arrow.png')")
    playPauseBtn.id('mediaBtn')
    
    nextBtn = createButton('')
    nextBtn.style('background-image', "url('p5/assets/images/right-arrow.png')")
    nextBtn.id('mediaBtn')
    
    prevBtn = createButton('')
    prevBtn.style('background-image', "url('p5/assets/images/left-arrow.png')")
    prevBtn.id('mediaBtn')

    timeStampSlider = createSlider(0, 0, 0)
    timeStampSlider.id('timeStamp')

    mediaHolder.child(prevBtn)
    mediaHolder.child(playPauseBtn)
    mediaHolder.child(nextBtn)

    handleInput()
}

function handleInput(){
    playPauseBtn.mousePressed(() => {
        playPause()
    })

    nextBtn.mousePressed(() => {
        next()
    })

    prevBtn.mousePressed(() => {
        prev()
    })
}

/* ---- Play or pause depending on the current status of the music and changs the image of the button ---- */
function playPause(){
    if(getCurrentSong().isPlaying()){
        getCurrentSong().pause()
        playPauseBtn.style('background-image', "url('p5/assets/images/play-arrow.png')")
    } else {
        getCurrentSong().play()
        playPauseBtn.style('background-image', "url('p5/assets/images/pause-symbol.png')")
    }
}

/* ---- Checks the currentSong playing and set it to the prev song ---- */
function prev(){
    if (currentSong > 0) { 
        getCurrentSong().stop()
        currentSong--
        getCurrentSong().play()
    }
}

/* ---- Checks the currentSong playing and set it to the prev song ---- */
function next(){
    if(!getCurrentSong().isPlaying()){ //If currently not playing return
        return
    } else if(getCurrentSong().isPlaying){
        if(currentSong < totalSongs - 1) { // Check if the currentSong is not the last in the array
            getCurrentSong().stop()
            currentSong++
            getCurrentSong().play()
        } else if(currentSong === totalSongs - 1) { // Set to zero if the the last song is reached
            getCurrentSong().stop()
            currentSong = 0
            getCurrentSong().play()
        }
    }
}

/* ---- Checks the currentSong playing and set it to the prev song ---- */

/* ---- Gets the current song that is been playing on the array ---- */
function getCurrentSong(){
    return songs[currentSong]
}

function showMedia(){
    if(songLoaded && deviceChoosed){
        showElement(playPauseBtn)
        showElement(nextBtn)
        showElement(prevBtn)
        showElement(timeStampSlider)

        //Sets the max value to the duration of the song and the current value to the current position on the song
        timeStampSlider.elt.max = getCurrentSong().buffer.duration;
        timeStampSlider.value(getCurrentSong()._prevTime)
    } else {
        hideElement(playPauseBtn)
        hideElement(nextBtn)
        hideElement(prevBtn)
        hideElement(timeStampSlider)
    }
}

/* -- Space - Play/Pause
   -- LeftArrow - PrevSong
   -- RigthArrow - NextSong*/
function keyPressed(){
    if(keyCode === 32){
        playPause()
    }
    if(keyCode === 39){
        next()
    }
    if(keyCode === 37){
        prev()
    }
    return false;
}


