const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

const notes = [
    {
        title: 'купить продукты',
        isCompleted: false,
    },
    {
        title: 'сделать дз',
        isCompleted: true,
    },
    {
        title: 'прибраться',
        isCompleted: false,
    },
]

function getNoteTemplate(note, index) {
    return `
        <li class="list-group-item d-flex justify-content-between align-items-center">
            <span class="${note.isCompleted ? 'text-decoration-line-through' : ''}">
                ${note.title}
            </span>
            <span>
                <span class="btn btn-small btn-${note.isCompleted ? 'warning' : 'success'}" data-index=${index} data-type="toggle">
                    &check;
                </span>
                <span class="btn btn-small btn-danger" data-index=${index} data-type="remove">
                    &times;
                </span>
            </span>
        </li>
        `
}

function printNote(note, index) {    
    listElement.insertAdjacentHTML(  // дополняет содержимое выбранного блока (или содержимое перед ним / после него)
        position='beforeend',  // beforebegin, afterbegin, beforeend, afterend
        text=getNoteTemplate(note, index)
    )

}

function sortNotes() {
    notes.sort(function(a, b) {  // функция - необязательный аргумент
        return a.title.charCodeAt() - b.title.charCodeAt()  // сортировка по алфавиту (по нулевому символу названия задачи)
    })
    // метод sort изменяет массив, метод toSorted возвращает новый массив (аналогично reverse, toReversed)
    // notes.sort((a, b) => a.title.charCodeAt() - b.title.charCodeAt())  // вариант со стрелочной функцией
}

function printNotes() {
    listElement.innerHTML = ''  // очистим текущее содержимое блока для дальнейшей перезаписи
    if (notes.length === 0) {
        listElement.innerHTML = '<p>Нет заметок</p>'
    }
    sortNotes()
    for (let i = 0; i < notes.length; i++) {
        printNote(notes[i], i)
    }

    /* другой вариант проитерироваться по массиву 
    for (let note of notes) {
        console.log(note.title)
    }
    */
}

function removeNote(note_index) {
    deletedTask = notes.splice(start=note_index, deleteCount=1)[0]  // удаление элементов начиная с индекса start в количестве deleteCount (по умолчанию до конца)
    // метрод splice изменяет массив, метод toSpliced возвращает срез без изменения массива
    console.log(`Задача ${deletedTask.title} удалена`)
}

function toggleNote(note_index) {
    notes[note_index].isCompleted = !notes[note_index].isCompleted
}

createBtn.onclick = function() {
    if (inputElement.value.length === 0) {
        return
    }
    const note = {
        title: inputElement.value,
        isCompleted: false
    }
    notes.push(note)  // последний элемент (pop/push), первый элемент (shift/unshift). shift и pop возвращают удаленный элемент 
    inputElement.value = ''
    printNotes()
}

listElement.onclick = function(event) {
    const type = event.target.dataset.type
    const index = Number(event.target.dataset.index)

    if (type === 'toggle') {
        toggleNote(Number(index))
    } else if (type === 'remove') {
        removeNote(Number(index))
    }
    printNotes()
}

printNotes()