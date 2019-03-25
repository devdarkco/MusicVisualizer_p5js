/* ---- Draws a bar depending on the loading progress --- */
function drawLoading() {
    if (!songLoaded && deviceChoosed) {
        background(0)

        if (userData.device == 'pc') {
            //Foreground
            stroke(255, 0, 0)
            noFill()
            rect(width / 2 - 250, height / 2 - 25, 500, 50)

            //Bakground
            noStroke()
            fill(200, 0, 0, 100)
            let w = 500 * progressSongs / totalSongs;
            rect(width / 2 - 250, (height / 2 - 25), w, 50)
        }

        if(userData.device == 'smartphone'){
            //Foreground
            stroke(255, 0, 0)
            noFill()
            rect(width / 2 - 150, height / 2 - 25, 300, 50)

            //Bakground
            noStroke()
            fill(200, 0, 0, 100)
            let w = 300 * progressSongs / totalSongs;
            rect(width / 2 - 150, (height / 2 - 25), w, 50)
        }
    }
}