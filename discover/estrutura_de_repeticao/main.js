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


console.log('Hello, world!')

// Estrutura de repetição
// for
/* O for possui dois tipos de controles, onde o break para no momento desejado e o continue salta o ponto informado seguindo até o final da condição desejada */

// for(let i = 0; i < 10; i++) {
//   console.log(i)
// }

// for(let a = 100; a > 0; a--) {
//   if(a === 25) {
//     break
//     // continue
//   }

//   console.log(a)
// }


// Estrutura de repetição
// while


let c = 0
while(c < 10) {
  console.log(c)

  c++;
}

let d = 4511231
while(d > 10) {
  console.log(d)

  d /=35;
}

// for...of

let myName = 'João'
let myNames = ['Afonso', 'Juliana', 'Maria']

for(let elements of myNames) {
  console.log(elements)
}


// for...in
// Busca as propriedades de um objeto
// Existem 3 formas de acessar as propriedades de um objeto como demonstrado abaixo

let person = {
  name: 'João',
  age: 34,
  weight: 88.9
}

for(let property in person) {
  console.log(property)
  console.log(person.name)
  console.log(person[property])
  console.log(person["name", "age", "weight"])
}