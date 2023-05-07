console.log("Hello world!")

console.log(null)
console.log(null === undefined)

// Object
console.log({
    name: "Allan",
    age: 28,
    move: function() {
        console.log("move")
    }
})

// Array
console.log([
    "Leite",
    "Pão",
    "Bolo de chocolate"
])

// Variáveis

var clima = "Quente"
console.log(clima)

let bolo = "Chocolate"
console.log(bolo)

const estado = "MINAS GERAIS"
console.log(typeof(estado))


console.log("Existe x antes do bloco", x)

{
    var x = 0
}

// console.log("Existe x depois do bloco", x)

let y = 1
{
    let y = 0
    console.log("Existe y ", y)
}
console.log("Existe y antes do bloco", y)


// Variáveis e tipos de dados
// declaração or declaration
var nameWoman = "Lúcia"
console.log(typeof nameWoman)

let age , isHuman
age = 18
isHuman = true

console.log(typeof age, typeof isHuman)
console.log('Lúcia tem 18 anos de idade')
console.log(`${nameWoman} tem ${age} de idade`)
