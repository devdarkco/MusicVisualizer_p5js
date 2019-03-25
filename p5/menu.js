let headerHolder
let infoHolder

let titleText
let deviceText
let pcBtn
let phoneBtn

let deviceChoosed

//used to store the device
let userData = {
    device: 'unknown'
}

function setupMenu() {
    headerHolder = createDiv()
    headerHolder.class('header')

    infoHolder = createDiv()
    infoHolder.class('infoHolder')

    titleText = createP('DevDarkCo || Music Visualizer with p5.js || 20/03/2019')
    titleText.id('branding')

    deviceText = createP('Select your device:')
    deviceText.id('title')

    pcBtn = createButton('PC')
    pcBtn.id('pc')

    phoneBtn = createButton('Smartphone')
    phoneBtn.id('smartphone')

    headerHolder.child(titleText)

    infoHolder.child(deviceText)
    infoHolder.child(pcBtn)
    infoHolder.child(phoneBtn)

    handleMenuInput()
}

function handleMenuInput() {
    pcBtn.mousePressed(() => {
        deviceChoosed = true
        userData.device = 'pc'
        document.documentElement.requestFullscreen()
    })

    phoneBtn.mousePressed(() => {
        deviceChoosed = true
        userData.device = 'smartphone'
        document.documentElement.requestFullscreen()
    })
}

function showMenu() {
    infoHolder.position(width / 2 - infoHolder.elt.clientWidth / 2, height / 2)
    if (deviceChoosed) {
        hideElement(headerHolder)
        hideElement(infoHolder)
    }
}