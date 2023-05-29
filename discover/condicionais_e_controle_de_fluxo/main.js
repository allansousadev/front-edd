import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

console.log('hello world')

// Control Flow
// Fluxo da aplicação

console.log('a')
console.log('b')


// if....else

let temperature = 36.5
let highTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >=  37

// if(temperature >= 37.5) {
//   console.log('Febre alta')
// } else if(temperature < 37.5 && temperature >= 37) {
//   console.log('Febre moderada')
// } else {
//   console.log('Saudável')
// }

// Outra forma de escrita do loop
if(highTemperature) {
  console.log('Febre alta')
} else if(mediumTemperature) {
  console.log('Febre moderada')
} else {
  console.log('Saudável')
}

// switch

let expression = 'c'

switch (expression) {
  case 'a':
    console.log('Oi')
    break
  case 'b':
    console.log('Hello')
    break
  default:
    console.log('default')
    break
}


function calculate(number1, operator, number2) {
  let result = 0

  switch (operator) {
    case '+':
      result = number1 + number2
      break
    case '-':
      result = number1 - number2
      break
    case '*':
      result = number1 * number2
      break
    case '/':
      result = number1 / number2
      break
    default:
        console.log('Não implementada')
        break
}

return result
}

console.log(calculate(2, '%', 3))


// throw (lançar)
function sayMyName(name = '') {
  if (name === '') {
    throw 'Nome é obrigatório'
  }

  console.log(name)
}


// try...catch (pegar)
try {
  sayMyName('Julia')
} catch(e) {
  console.log(e)
}