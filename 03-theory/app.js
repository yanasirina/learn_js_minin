const dateOutput = document.getElementById('output')
const fullBtn = document.getElementById('full')
const dateBtn = document.getElementById('date')
const timeBtn = document.getElementById('time')

let dateFormat = 'time'
updateDateTime()

function changeDateFormat(formatName) {
    function wrapper() {
        dateFormat = formatName
        updateDateTime()
    }
    return wrapper
}

fullBtn.onclick = changeDateFormat('datetime')
dateBtn.onclick = changeDateFormat('date')
timeBtn.onclick = changeDateFormat('time')

function getFormatedDate(date, dateFormat) {
    switch (dateFormat) {
        case 'time': return date.toLocaleTimeString('ru-RU')
        case 'date': return date.toLocaleDateString('ru-RU')
        case 'datetime': return date.toLocaleString('ru-RU')
        default: return date.toLocaleTimeString('ru-RU')
    }
}

function updateDateTime() {
    let date = new Date()
    let formatedDate = getFormatedDate(date, dateFormat)
    dateOutput.textContent = formatedDate
}

setInterval(updateDateTime, 1000)