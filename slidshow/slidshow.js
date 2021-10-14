var containeritems = document.querySelector('#container-items')
var containerslide = document.querySelector('.container-slide')
var bolinha_conteier = document.querySelector('.ponto')
var slid = document.querySelector('#slidshow')
let slid_icon = document.querySelector('#slid_icon')
var action_button = document.querySelector('.action-button')

var imagem = [
    { 'url': './img/chrono.jpg' },
    { 'url': './img/inuyasha.jpg' },
    { 'url': './img/tenchi.jpg' },
    { 'url': './img/the last.jpg' },
]

var bolinha = [
    { 'url1': 'img/pontol.png' },
    { 'url1': 'img/pontop.png' },
    { 'url1': 'img/pontop.png' },
    { 'url1': 'img/pontop.png' },
]

/*essa é a função que vai carregar as imagens*/
var loadImages = (imagem, containeritems) => {
    imagem.forEach(image => {
        containeritems.innerHTML += `
            <div class="item">
                <img src='${image.url}'>
            </div>
        `
    })
}

/*essa é a função que vai carregar as imagens da bolinha*/
function loadbolinha() {
    bolinha.forEach(bol => {
        bolinha_conteier.innerHTML += `
        <div class="bol">
            <img src='${bol.url1}'>
        </div>
        `
    })
}

function slidshow() {
    if (slid_icon.innerHTML === 'play_circle_outline') {
        slid_icon.innerHTML = 'pause_circle_outline'
        var intervalos = setInterval(() => {
            if (slid_icon.innerHTML === 'pause_circle_outline') {
                previous()
            } else {
                clearInterval(intervalos)
            }
        }, 5000)
    }else {
        slid_icon.innerHTML = 'play_circle_outline'
    }
}

/*aqui é onde chamamos as duas funções*/
loadImages(imagem, containeritems)
loadbolinha(bolinha, bolinha_conteier)

/*aqui é onde pegamos as informações das divs que criamos dentro das funções*/
let items = document.querySelectorAll('.item')
let boli = document.querySelectorAll('.bol')

/*essa é a função que vai mostrar a imagen da direita*/
var previous = () => {
    containeritems.appendChild(items[0])
    items = document.querySelectorAll('.item')

    var lastbol = boli[boli.length - 1]
    bolinha_conteier.insertBefore(lastbol, boli[0])
    boli = document.querySelectorAll('.bol')
}

/*essa é a função que vai mostrar a imagen da esquerda*/
var next = () => {
    var lastItem = items[items.length - 1]
    containeritems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')

    bolinha_conteier.appendChild(boli[0])
    boli = document.querySelectorAll('.bol')
}

document.querySelector('#previous').addEventListener('click', next)
document.querySelector('#next').addEventListener('click', previous)