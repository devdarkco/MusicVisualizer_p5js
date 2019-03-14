let loadingText;

function setupLoadingElements(){
    loadingText = createP("Loading songs...")
    loadingText.style('position', (width / 2) - 250, height / 2 - 100)
    loadingText.id('loadingText')
}

function drawLoading(){
        if(!songLoaded){
            background(0)

            //Foreground
            stroke(255)
            noFill()
            rect(width / 2 - 250, height / 2 - 25, 500, 50)
    
            //Bakground
            noStroke()
            fill(255, 100)
            var w = 500 * progressSongs / totalSongs;
            rect(width / 2 - 250, (height / 2 - 25), w, 50)
    
            //Show loading text
            loadingText.style('visibility', 'visible')
        } else {
            hideElement(loadingText)
        }
}