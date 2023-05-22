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
    <h1>Hello JS</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

console.log("Hello JS")

/*
Expressões e Operadores

 - Expressions
 - Operators
  Binary
  Unary
  Ternary
*/

// Operador unário
let operatorUnary = 1
console.log(operatorUnary + 1)

// Operador binário
let operatorBinary = 2
console.log(++operatorBinary) //Acontece um incremento no valor da variável

// Decremento do valor
let operatorBinaryDecrement = 5
console.log(--operatorBinaryDecrement)

// Operador ternário
console.log(true ? 'alo' : 'nada')

/*
  new

  * left-hand-side expression
  * cria um novo objeto
 */

  let name  = new String('Vanessa')
  let age  = new Number('16')
  console.log(name, age)