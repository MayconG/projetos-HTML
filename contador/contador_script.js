function contar() {
    let inicio = document.getElementById('txtinicio')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')
    if (inicio.value.length != 0 || fim.value.length != 0) {
        let passon = Number(passo.value)
        let inicion = Number(inicio.value)
        let fimn = Number(fim.value)
        if (passon <= 0) {
            passon = 1
        }
        if (inicion < fimn){
            for (var c = inicion;c <= fimn;c += passon) {
                res.innerHTML += ` ${c},  `
            }
        }else {
            for (var c = inicion;c >= fimn;c -= passon) {
                res.innerHTML += ` ${c},  `
            }
        }
    }
    inicio.focus()
}