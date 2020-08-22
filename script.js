let button = document.getElementById('button')
let userInput = document.getElementById('userInput')
let ul = document.getElementById('listContainer')
let elements = document.getElementsByTagName('li')
let deleteBtn = document.getElementsByClassName('text-red-700')

lineTrough = (i) => {
    i.addEventListener('click', () => {
        if (i.className === "line-through text-gray-300") {
            i.className = ""
        } else {
            i.className = "line-through text-gray-300"
        }
    })
}

inputLength = () => (
    userInput.value.length
)

createListElement = () => {
    let div = document.createElement('div')
    let btn = document.createElement('button')
    let li = document.createElement('li')
    let text = document.createTextNode(userInput.value)
    lineTrough(li)
    btn.innerHTML = 'Delete'
    btn.className = 'ml-5 h-8 text-xs bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded'
    div.className = 'flex items-center justify-between mt-4'
    li.appendChild(text)
    div.appendChild(li)
    div.appendChild(btn)
    ul.appendChild(div)
    userInput.value = ''
    btn.addEventListener('click', () => {
        div.remove()
    })
}

addListAfterClick = () => {
    if (inputLength() > 0) {
        createListElement()
    }
}

addListAfterKeyPress = (event) => {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListElement()
    }
}

button.addEventListener('click', addListAfterClick)
userInput.addEventListener('keypress', addListAfterKeyPress)