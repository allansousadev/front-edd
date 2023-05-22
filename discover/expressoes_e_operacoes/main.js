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
  name.surName = "Braga"
  let age  = new Number('16')
  console.log(name.surName, age)

  let date = new Date('2023-05-22')
  console.log(date.__proto__)

/*
  Operadores unários
  typeof = Informa o tipo do dado
  delete = Exclui uma propriedade dentro de um objeto, caso exista
*/

console.log(typeof'Joana')

const person = {
  name: 'Alice',
  age: 23
}

delete person.age
console.log(person)


// Operadores Aritméticos 

// Multiplicação
console.log(2 * 2)
// Divisão
console.log(3 / 1)
// Soma
console.log(5 + 3)
// Subtração
console.log(7 - 4)

// Resto da divisão
let remainder
remainder = 11 % 3
console.log(remainder)

// Incremento
let increment
increment = 10
console.log(++increment)
// Decremento
let decrement
decrement = 5
console.log(--decrement)
// Exponencial
console.log(3 ** 3)


// Grouping operator ()
// Grupo de operadores

let total = (1 + 2) * 2
console.log(total)

// Operadores de comparação

// Irá comparar valores e retornar um boolean com a resposta à comparação

let one = 1
let two = 2

// ==== igual a
console.log(one == 1)
console.log(two == "2")

// != diferente de 
console.log(one != 2)
console.log(two != 2)
console.log(one != 1)

// Estritamente igual a
// Realiza a comparação tanto do tipo quanto dado no operador binário
console.log(one === 1)
console.log(two === 7)

// Estritamente  diferente de
console.log(one !== 1)
console.log(two !== 9)

// >= Maior igual a
console.log(one >= 1) 
console.log(two >= 2)

// < Menor que 
console.log(one < 1)
console.log(two < 2)

// <= Manor que
console.log( one <= two)

// <= Menor igual a
console.log(one <= two)
console.log(one <= 1)
console.log(one <= 0)

// Operadores de atribuição (Assignment)
let x
console.log(x)

// assignment
x = 1
console.log(x)

// addition assignment
x += 2
console.log(x)

// subtraction assignment
x -= 1
console.log(x)

// multiplication assignment
x*= 2
console.log(x)

// division assignment
x/= 2
console.log(x)

// remainder, exponetiation
x%= 2
console.log(x)

// Operadores lógicos (logical operators)

// 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso

let pao = true
let queijo = false

// AND &&
console.log(pao && queijo)

// OR ||
console.log(pao || queijo)

// NOT !
// Substitui o boolean existente
console.log(!pao)
console.log(!queijo)

// Os operadores ternários, conhecidos como operadores de condição, como o nome sugere, são dependentes de condições e podem entregar valores diferentes com base nelas.

// Funciona da seguinte forma;

// condição ? valor1 : valor2
// Exemplo de uso:

// // Café da manhã top
let presunto = true
let mucarela = false

const niceBreakfast = mucarela || presunto ? 'Café top' : 'Café ruim'

console.log(niceBreakfast)

let newAge = 16
const canDrive = newAge >= 18 ? "Can drive" : "can't drive"
// Nesse exemplo *se* newAge for maior ou igual a 18 *então* escreve "Can drive" *se não* escreve "Can't drive"

console.log(canDrive)

// Operador de String (String operator)

// Temos também os string operators, os operadores de string, e nós até já vimos um desses antes, o comparison operator, ou ==, para os mais íntimos.

// Agora vamos ver sobre a concatenação, que é o retorno da união de duas strings.

// Seu símbolo é o de + (positivo), e seu uso é simples, algo próximo de:

// console.log('a' + 'a')
// Ou assim
// let alpha = "alpha"
// alpha += "bet"
// console.log(alpha)
// // nesse caso, o retorno da string seria aa.

// Falsy e truthy
// Descrição
// O falsy é quando um valor é considerado falso em contextos que onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/*
	Todos os valores abaixo seriam representados como false em um boolean.
		false
    0
    -0
    ""
    null
    undefined
    NaN
*/

console.log( NaN ? 'verdadeiro' : 'falso' )
// já o truthy é o oposto, quando um valor é considerado verdadeiro (true) em contextos onde um booleano é obrigatório (condicionais e loops), exemplo a seguir:

/* 
	Todos os valores abaixo seriam representados como false em um boolean.
		true
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( Infinity ? 'verdadeiro' : 'falso' )

// Precedência dos operadores
// Descrição
// Nesta aula mostraremos a precedência dos operadores, ou seja, a ordem de importância de cada um deles.

// // De cima para baixo, do mais importante ao menos importante.

// * grouping                      ( )
// * negação e incremento          ! ++ --
// * multiplicação e divisão       * /
// * adição e subtração            + -
// * relacional                    < <= > >=
// * igualdade                     == != === !==
// * AND                           && 
// * OR                            ||
// * condicional                   ?:
// * assignment (atribuição)       = += -= *= %= 

console.log((2 + 5) * 2)