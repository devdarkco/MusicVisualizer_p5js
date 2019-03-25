let progressSongs = 0
let totalSongs
let songs = []
let songLoaded = false

/* ---- load songs 
   -- Gets the file name from the json file and add the file to the songs array --
   - Every time that loads a songs the pogress increase, this is used to display the loading bar 
   When is done sets the songLoaded to true ---- */
function loadSongs(filename) {
    loadSound('p5/assets/songs/' + filename + '.mp3', sucess)

    function sucess(song) {
        songs.push(song)
        progressSongs++
        if (progressSongs == totalSongs) {
            setTimeout(() => {
                songLoaded = true
            }, 2000)
        }
    }
}