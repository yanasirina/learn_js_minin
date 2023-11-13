// выведем приветственное сообщение в алерт
alert('Добро пожаловать в калькулятор!')

const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
let action = '+'

console.log('Первоначальное значение в блоке result: ', resultElement.textContent)
console.log(typeof input1.value, typeof input2.value)  // из html всегда вычитываются строки

plusBtn.onclick = function () {
  action = '+'
}

minusBtn.onclick = function () {
  action = '-'
}

submitBtn.onclick = function () {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    return actionSymbol == '+' ? num1 + num2 : num1 - num2
}

function printResult(result) {
    if (result > 0) {
        resultElement.style.color = 'green'
    } else if (result < 0) {
        resultElement.style.color = 'red'
    } else {
        resultElement.style.color = 'black'
    }
    resultElement.textContent = result
    console.log(`Новое значение в блоке result: ${resultElement.textContent}`)
}
