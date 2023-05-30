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

// Crie um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caracteres tipo A B C

// * de 90 para cima -   A
// * entre 80 - 89   -   B
// * entre 70 - 79   -   C
// * entre 60 - 69   -   D
// * menor que 60    -   F


function getScore(score) {
  let scoreA = score >= 90 && score <= 100
  let scoreB =score >= 80 && score <= 89
  let scoreC =score >= 70 && score <= 79
  let scoreD =score >= 60 && score <= 69
  let scoreE =score < 60 && score >= 0

  let scoreFinal

  if (scoreA) {
    scoreFinal = "A"
  } else if (scoreB) {
    scoreFinal = "B"
  } else if (scoreC) {
    scoreFinal = "C"
  } else if (scoreD) {
    scoreFinal = "D"
  } else if (scoreE) {
    scoreFinal = "E"
  } else {
    scoreFinal = "Nota inválida"
  }

  return scoreFinal
}

console.log(getScore(77))
console.log(getScore(12))
console.log(getScore(88))
console.log(getScore(1))
console.log(getScore(100))
console.log(getScore(112))
console.log(getScore(-56))
console.log(getScore(69))
console.log(getScore(37))
console.log(getScore(46))
console.log(getScore(98))



/*

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.

*/

let family = {
  incomes: [3500, 3200, 250, 150.65],
  expenses: [356.88, 250, 780, 654]
}

function sum(array) {
  let total = 0
  
  for(let value of array) {
    total += value
  }
  
  return total

}

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses
  
  const itOk = total >= 0
  
  let balanceText = "negativo"

  if (itOk) {
    balanceText = "positivo"
  }

  console.log(`Seu saldo é ${balanceText}:R$:${total.toFixed(2)}`)

}

calculateBalance()


/*

Crie uma função que receba uma string em celsius ou fahrenheit
e faça a transformação de uma unidade para outra 
    C = (F - 32) * 5/9 
    F = C * 9/5 + 32

*/

// Transform('50F)

function transformDegree(degree) {
  const celsiusExists = degree.toUpperCase().includes('C')
  const fahrenheitExists = degree.toUpperCase().includes('F')

    // Fluxo de erro
    if(!celsiusExists && !fahrenheitExists) {
      throw new Error('Grau não identificado')
    }

    // Fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", ""))
    let form = fahrenheit => fahrenheit - 32 * 5/9
    let degreeSign = 'C'

    // Fluxo alternativo C -> F
    if(celsiusExists) {
      updatedDegree = Number(degree.toUpperCase().replace("C", ""))
      form = celsius => celsius * 9/5 + 32
      degreeSign = 'F'
    }
    

    return form(updatedDegree) + degreeSign
}

try {
  console.log(transformDegree('10C'))
  console.log(transformDegree('50F'))
  transformDegree('50Z')
} catch (error) {
  console.log(error.message)
}
