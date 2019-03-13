let progressSongs = 0
let totalSongs
let songs = []
let songLoaded = false

function loadSongs(filename) {
    loadSound('p5/assets/songs/' + filename + '.mp3', sucess)

    function sucess(song) {
        songs.push(song)
        progressSongs++
        console.log('Song loaded - Progress: ' + progressSongs)
        if (progressSongs == totalSongs) {
            setTimeout(() => {
                songLoaded = true
            }, 2000)
        }
    }
}