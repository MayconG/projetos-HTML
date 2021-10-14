let txtvalue = document.querySelector('#task')
let botão_add = document.querySelector('#ad')
let ul = document.querySelector('#lista')
let select = document.querySelector('#select_situation')
let remover_tudo = document.querySelector('#remove_all')

function add() {
    if (txtvalue.value.length != 0) {
        var txt = txtvalue.value
        var li = document.createElement('li')
        var buttonre = document.createElement('button')
        var buttoncheck = document.createElement('button')
        var di = document.createElement('div')

        buttonre.innerHTML = '&#x2716'
        buttoncheck.innerHTML = '&#x2714'
        li.innerHTML = txt
        di.classList = 'list'

        ul.appendChild(di)
        di.appendChild(li)
        di.appendChild(buttoncheck)
        di.appendChild(buttonre)

        buttonre.addEventListener('click', remover = () => {
            var remo = buttonre.parentElement
            remo.remove()
        })

        buttoncheck.addEventListener('click', marcar = () => {
            if (li.style.textDecoration === 'line-through') {
                li.style.textDecoration = 'none'
                li.style.borderColor = 'black'
                li.style.color = 'black'
            } else {
                li.style.textDecoration = 'line-through'
                li.style.borderColor = 'black'
                li.style.color = 'black'
                li.style.borderColor = '#999999'
                li.style.color = '#999999'
            }
        })

        txtvalue.value = ''
        txtvalue.focus()
    }

    remover_tudo.onclick = () => {
        ul.innerHTML = ''
    }
}

select.addEventListener('click', todolist = (e) => {
    var tud = ul.childNodes
    tud.forEach((todo) => {

        switch (e.target.value) {
            case 'Todos':
                todo.style.display = 'flex'
                break
            case 'completos':
                todo.style.display = 'flex'
                if (todo.firstChild.style.textDecoration != 'line-through') {
                    todo.style.display = 'none'
                }
                break
            case 'incompletos':
                todo.style.display = 'flex'
                if (todo.firstChild.style.textDecoration === 'line-through') {
                    todo.style.display = 'none'
                }
                break
        }
    })
})

txtvalue.addEventListener('keypress', function (e) {

    if (e.key === 'Enter') {
        botão_add.click()
    }
})