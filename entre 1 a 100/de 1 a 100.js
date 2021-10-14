var numad = document.querySelector('input#txtval')
var resu = document.querySelector('select#numerosAd')
var btn_ad = document.querySelector('#ad')
var res = document.querySelector('div#res')
var valores = []

numad.addEventListener('keypress', function(e) {
    if (e.key == 'Enter') {
        if (numad.length != 0) {
            btn_ad.click()
            ad()
        }
    }
})

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) < 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function ad() {
    if (isNumero(numad.value) && !inLista(numad.value, valores)) {
        valores.push(Number(numad.value))
        let itens = document.createElement('option')
        itens.text = `valor ${Number(numad.value)} adicionado.`
        resu.appendChild(itens)
        res.innerHTML = ''
    }
    numad.value = ''
    numad.focus()
}

function resul() {
    if (valores.length == 0) {
        window.alert('Digite valores ates de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        for (let pos in valores) {
            if (valores[pos] > maior) {
                maior = valores[pos]
            }
            if (valores[pos] < menor) {
                menor = valores[pos]
            }
        }
        for (let pos in valores) {
            soma += valores[pos]
        }
        res.innerHTML = ''
        res.innerHTML = `<p>o total de valores digitados é ${tot}</p>`
        res.innerHTML += `<p>o maior numero digitado foi o ${maior}</p>`
        res.innerHTML += `<p>o menor numero digitado foi o ${menor}</p>`
        res.innerHTML += `<p>A soma entre os valores informados é ${soma}</p>`
        res.innerHTML += `<p>E a media entre o numeros digitados é ${soma / valores.length}</p>`
    }
}
