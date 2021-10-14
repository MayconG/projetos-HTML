let botãoonof = document.querySelector('button#onoff')
let lamp = document.querySelector('img#lampada')
lamp.addEventListener('mouseenter', on)
lamp.addEventListener('mouseout', off)
lamp.addEventListener('dblclick', lampbroken)

function islampbroken() {
    return lamp.src.indexOf('quebrada') > -1
}

function on() {
    if (!islampbroken()) {
        lamp.src = 'ligada.jpg'
        botãoonof.textContent = 'Desligar'
    }
}

function off() {
    if (!islampbroken()) {
        lamp.src = 'desligada.jpg'
        botãoonof.textContent = 'Ligar'
    }
}

function lampbroken() {
    lamp.src = 'quebrada.jpg'
}

function lamponoff() {
    if (botãoonof.textContent == 'Ligar') {
        on()
        botãoonof.textContent = 'Desligar'
    }else {
        off()
        botãoonof.textContent = 'Ligar'
    }
}