function clicar() {
    var data = new Date()
    var ano = data.getFullYear()
    var nasc = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert('verifique os dados, e tente novamente!')
    }else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(nasc.value)
        var genero = ''
        var imagem = document.createElement('img')
        imagem.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade <= 10) {
                //criaça
                imagem.setAttribute('src', 'imagens/criança menino.png')
            }else if (idade < 21) {
                //jovem
                imagem.setAttribute('src', 'imagens/jovem homem.png')
            }else if (idade < 50) {
                //adulto
                imagem.setAttribute('src', 'imagens/homem adulto.png')
            }else {
                //idoso
                imagem.setAttribute('src', 'imagens/homem idoso.png')
            }
        }else {
            genero = 'mulher'
            if (idade >= 0 && idade <= 10) {
                //criaça
                imagem.setAttribute('src', 'menina.png')
            }else if (idade < 21) {
                //jovem
                imagem.setAttribute('src', 'mulher jovem.png')
            }else if (idade < 50) {
                //adulto
                imagem.setAttribute('src', 'mulher adulta.png')
            }else {
                //idoso
                imagem.setAttribute('src', 'mulher idosa.png')
            }
        }
        res.innerHTML = `detectamos ${genero} com ${idade} anos`
        res.appendChild(imagem)
    }
}