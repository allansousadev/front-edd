// const person = {
//     nameMen: 'Jonh',
//     age: 34,
//     weight: 88.7,
//     isAdmin: true
// }

// console.log(person.nameMen)
// console.log(person.age)
// console.log(person.weight)
// console.log(person.isAdmin)

// console.log(`${person.nameMen} tem ${person.age} de idade, e pesa ${person.weight}kg`)

// // Array
// const animals = [
//     'Lion',
//     'Monkey',
//     {
//         name: 'cat',
//         age: 3
//     }

// ]


// // Acessar valores dos arrays
// console.log(animals[0])
// console.log(animals.length)
// console.log(animals[2].name)

// let weight

// console.log(typeof weight)
// // Tipo de dado undefined

// let primaryName =  'Amanda'
// let age = 15
// let stars = 5.3
// let isSubscribed = true

// console.log(primaryName, age, stars, isSubscribed)

// let student = {}
// console.log(typeof student)
// // Type object

const primaryStudent = {
    name: "Amanda",
    age: 15,
    stars: 5.3,
    isSubscribed: true,
    weight: 65.3
}

// console.log(`${primaryStudent.name} de ${primaryStudent.age} anos de idade pesa ${primaryStudent.weight}kg`)
const larissa = {
    name: "Larissa",
    age: 18,
    stars: 9.7,
    isSubscribed: true,
    weight: 78.9
}

const students = [
        primaryStudent,
        larissa
    ]
    
console.log(students)
console.log(students[0])
console.log(typeof (students[0]))
console.log(students[1])
console.log(typeof students[1])
console.log(students)

// undefined 
console.log(a)
var a = 1

// Aula sobre functions

declaration function declaração da função
function statement

// As funções são utilizadas para reaproveitamento de código em quantas vezes forem necessárias, e para a organização do código
// Dar significado a um bloco de código

function createPhrases() {
    console.log('Mensagem 1')
    console.log('Mensagem 2')
    console.log('Mensagem 3')
}

executar a função
rodar, chamar, invocar
execute, run, call, invoke
createPhrases()
console.log("Fim do programa")

function expression
anonymous function
parâmetros (parameters)
const sum = function (number1, number2) {
    console.log(number1 + number2)
}
sum(2, 3) //arguments
sum(4, 5)
sum(56, 45115489484161516)

const sum  = function(number1, number2) {
        total = number1 + number2
        return total
}

let number1 =  34
let number2 = 25

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)
console.log(total)

function fazerSuco(fruta1, fruta2) {
    return (`Suco de ${fruta1} com ${fruta2}`)
}

const copo = fazerSuco('banana', 'maça')

console.log(copo)


// function scope
let subject = 'create video'

function createThink() {
    subject = 'study'
}

console.log(createThink(subject))
console.log(subject)
console.log(subject)

function hoisting
sayMyName()

function sayMyName() {
    console.log('Julia')
}

arrow function
Normalmente atribuida a uma variável const

const sayMyName = () => {
    console.log('Julia')
}
sayMyName()

Outra forma de escrever a função
const sayMyName = (name) => {
    console.log(name)
}

sayMyName('Julia')

// Callback chamar de volta o valor de uma função
function sayMyName(name) {
    console.log("Antes de executar uma função callback")
    name()
    console.log("Depois de executar uma função callback")
}

sayMyName(
    () => {
        console.log('Estou em uma callback')
    }
)

function Person(name) {
    this.name = name
    this.walk = function() {
        return this.name + "está andando"
    }
}
const laura = new Person("Laura")
console.log(laura)
console.log(laura.walk)
const joao = new Person("João")
console.log(joao)
console.log(joao.walk)


let name  = new String("Afonso")
console.log(name)

let date = new Date("2023-08-05")
console.log(date)