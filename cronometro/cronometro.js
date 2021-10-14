let come = document.querySelector('#começar')
let par = document.querySelector('#parar')
let rei = document.querySelector('#reiniciar')

let horas = 0
let minutos = 0
let segundos = 0
let milisegundo = 0

let cron

come.onclick = () => {
    parar()
    if (come.textContent == 'Iniciar') {
        começar()
        rei.style.display = 'block'
        rei.style.background = '#082032'
        rei.style.color = 'white'
        come.style.background = '#082032'
        come.style.color = 'white'
        come.textContent = 'Parar'
    }else if(come.textContent == 'Parar'){
        parar()
        rei.style.background = ''
        come.style = ''
        come.textContent = 'Iniciar'
    }
}

rei.onclick = () => {
    reiniciar()
    rei.style.display = 'none'
    come.style = ''
    come.textContent = 'Iniciar'
}

function começar() {
    parar()
    cron = setInterval(() => {timer()}, 10)
}

function parar() {
    clearInterval(cron)
}

function reiniciar() {
    parar()
    horas = 0
    minutos = 0
    segundos = 0
    milisegundo = 0
    document.querySelector('#horas').innerText = '00'
    document.querySelector('#minutos').innerText = '00'
    document.querySelector('#segundos').innerText = '00'
}

function timer() {
    if ((milisegundo += 10) === 1000) {
        milisegundo = 0
        segundos ++
    }
    if (segundos == 60) {
        segundos = 0
        minutos++
    }
    if (minutos == 60) {
        minutos = 0
        horas++
    }
    document.getElementById('horas').innerText = returnData(horas)
    document.getElementById('minutos').innerText = returnData(minutos)
    document.getElementById('segundos').innerText = returnData(segundos)
}

function returnData(input) {
    return input > 9 ? input : `0${input}`
}