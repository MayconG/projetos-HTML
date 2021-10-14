function carregar() {
    var hora = new Date()
    var agora = hora.getHours()
    var img = window.document.getElementById('imagem')
    var texto = window.document.getElementById('texto')
    texto.innerHTML = `agora são ${agora} horas.`
    //var agora = 10
    if (agora >= 0 && agora < 12) {
        img.src = 'manhã.png'
        document.body.style.background = '#51a3bf'
    }else if (agora >= 12 && agora < 18) {
        img.src = 'tarde1.png'
        document.body.style.background = '#f5b45a'
    }else {
        img.src = 'noite.png'
        document.body.style.background = '#08314d'
    }
}