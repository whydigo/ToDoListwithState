const arr = [
    {
        text: 'buy car',
        done: false,
    },
    {
        text: 'go to gym',
        done: false,
    },
    {
        text: 'ride on my bike',
        done: false,
    },
    {
        text: 'watch memes',
        done: false,
    },
    {
        text: 'relax',
        done: false,
    }

]

function roll (i) {
    arr[i].done = !arr[i].done
    return arr
}

function render(arr) {
    const ul = document.getElementById('list_item')
    const div = document.getElementById('list')
    ul.textContent = ''
    for (let i = 0; i < arr.length; i++) {

        const check = document.createElement('input')
        check.type = 'checkbox'
        check.className = 'check'
        const li = document.createElement('li')
        const dlt = document.createElement('button')
        dlt.className = 'dlt_but'
        li.textContent = arr[i].text
        dlt.textContent = 'X'

        ul.append(li)
        li.prepend(check)
        li.append(dlt)
        div.append(ul)
        dlt.addEventListener('click', (e) => {
            e.target.parentElement.remove()
        })

        check.addEventListener('click', () => {
            checkTodo(i)
            if (check.checked) {
                li.style.textDecoration = 'line-through'
            } else {
                li.style.textDecoration = 'none'
            }
            
        })
    }
    
function checkTodo(i) {
    arr[i].done = !arr[i].done
}

    document.body.append(div)
    return div
}

function remove(i) {
    arr.splice(i, 1)
    render(arr)
    return arr
}

function addTodo(text) {
    arr.push({ text: text, done: false })
    render(arr)
    return arr
}

document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault()
    const input = document.querySelector('.message')
    addTodo(input.value)
    input.value = ""
})
render(arr)

