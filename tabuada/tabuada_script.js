function clicar() {
    let n1 = document.querySelector('input#txtn1')

    if (n1.value.length == 0) {
        window.alert('por favor digite um numero')
    }else {
        let num = Number(n1.value)
        var tabu = document.querySelector('select#txttabu')
        tabu.innerHTML = ''
        for (var c = 1;c <= 10;c++) {
            let item = document.createElement('option')
            item.innerText = `${num} x ${c} = ${num * c}`
            item.text = `${num} x ${c} = ${num * c}`
            tabu.appendChild(item)
        }
    }
    n1.value = ''
    n1.focus()
}