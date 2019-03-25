let optionsHolder
let particlesCheckBox
let graphCheckbox
let freqCircleCheckbox
let ampCircleCheckbox

function setupOptions(){
    optionsHolder = createDiv()
    optionsHolder.class('optionsHolder')

    particlesCheckBox = createCheckbox('Particles', renderParticles)
    particlesCheckBox.style('color', 'white')

    graphCheckbox = createCheckbox('Frequence Analyze', renderFreq)
    graphCheckbox.style('color', 'white')
    
    freqCircleCheckbox = createCheckbox('Circle Frequence Analyze', renderFreqCircle)
    freqCircleCheckbox.style('color', 'white')

    ampCircleCheckbox = createCheckbox('Circle Amplitude Analyze', renderAmpCircle)
    ampCircleCheckbox.style('color', 'white')
    
    optionsHolder.child(particlesCheckBox)
    optionsHolder.child(graphCheckbox)
    optionsHolder.child(freqCircleCheckbox)
    optionsHolder.child(ampCircleCheckbox)

    handleElemetsInput()
}

function handleElemetsInput(){
    particlesCheckBox.changed(() => {
        if(particlesCheckBox.checked()){
            if(userData.device == 'pc'){
                renderParticles = true
            } else if(userData.device == 'smartphone') {
                renderParticles = true
                renderFreq = false
                renderFreqCircle = false
                renderAmpCircle = false
                ampCircleCheckbox.elt.childNodes[0].checked = false
                graphCheckbox.elt.childNodes[0].checked = false
                freqCircleCheckbox.elt.childNodes[0].checked = false
            }
            
        } else {
            renderParticles = false
        }
    })

    graphCheckbox.changed(() => {
        if(graphCheckbox.checked()){
            if(userData.device == 'pc'){
                renderFreq = true
            } else if(userData.device == 'smartphone') {
                renderParticles = false
                renderFreq = true
                renderFreqCircle = false
                renderAmpCircle = false
                particlesCheckBox.elt.childNodes[0].checked = false
                ampCircleCheckbox.elt.childNodes[0].checked = false
                freqCircleCheckbox.elt.childNodes[0].checked = false
            }
        } else {
            renderFreq = false
        }
    })

    freqCircleCheckbox.changed(() => {
        if(freqCircleCheckbox.checked()){
            if(userData.device == 'pc'){
                renderFreqCircle = true
            } else if(userData.device == 'smartphone') {
                renderParticles = false
                renderFreq = false
                renderFreqCircle = true
                renderAmpCircle = false
                particlesCheckBox.elt.childNodes[0].checked = false
                graphCheckbox.elt.childNodes[0].checked = false
                ampCircleCheckbox.elt.childNodes[0].checked = false
            }
        } else {
            renderFreqCircle = false
        }
    })

    ampCircleCheckbox.changed(() => {
        if(ampCircleCheckbox.checked()){
            if(userData.device == 'pc'){
                renderAmpCircle = true
            } else if(userData.device == 'smartphone') {
                renderParticles = false
                renderFreq = false
                renderFreqCircle = false
                renderAmpCircle = true
                particlesCheckBox.elt.childNodes[0].checked = false
                graphCheckbox.elt.childNodes[0].checked = false
                freqCircleCheckbox.elt.childNodes[0].checked = false
            }
        } else {
            renderAmpCircle = false
        }
    })
}

function showOptions(){
    if(songLoaded && deviceChoosed){
        showElement(optionsHolder)
    } else {
        hideElement(optionsHolder)
    }
}