// let firstName = "Alan"
// console.log(firstName)


// console.error("Este é um erro")
// console.warn("Este é um warn")
// console.log("Este é um texto")

// let x = 5
// let y = 10 
// let z = 15.5

// if (1) {
//     let x = 15
//     console.log(x)
// }

// console.log(x, y, z)

// console.log(typeof x)
// console.log(typeof y)
// console.log(typeof z)

// const decimal = 12.4
// console.log(decimal)
// console.log(typeof decimal)

// const isApproved = false
// console.log(isApproved)
// console.log(typeof isApproved)

// let surName = null
// console.log(surName)
// console.log(typeof surName)

// let age = 20
// console.log(age)
// console.log(typeof age)


// const language = ["Javascript", "Rust", "GO", "PHP"]
// console.log(language)
// console.log(typeof language)

// const user = {Name: "Afonso", Email:"afonso@gmail.com"}
// console.log(user)
// console.log(typeof user)

// const fullName = "Maria de Sá"
// console.log(fullName.length) // count the number of characters
// console.log(typeof fullName) // type of fullName


// const stringToArray = fullName.split(" ") // split by spaces
// console.log(stringToArray)
// console.log(fullName.toLowerCase()) // convert to lower case
// console.log(fullName.toUpperCase()) // convert to upper case
// console.log(fullName.indexOf("de")) // local string the number of characters
// console.log(fullName.slice(0,5)) // strcat the number of characters

// const list = ['a', 'b', 'c', 'd', 'e', 'f']

// console.log(list.length)
// console.log(list[2]) // push the number of characters

// list[6] = 'g' // atribute the number of characters in the string
// console.log(list) 

// console.log(list[list.length - 1])
// console.log('g')

// list.pop() // remove the number of characters from final list
// console.log(list)// print the number of characters in the string

// list.push() // remove the number of characters from final list
// console.log(list)

// list.shift('a') // remove the number of character from initial list
// console.log(list) // print the number of characters

// list.unshift('a') // reset the number of character from initial list
// console.log(list)

// Objects
 const product = {
    name: "Notebook",
    price: 100,
    quantity: 10,
    category: "Electronics"
 }

 console.log(product.name)
 console.log(product['name'])
 console.log(product['quantity'])
 console.log(product['category'])
 console.log(product['price'])

// destructuring
// Example one
const {price, quantity, category} = product
console.log(price)
console.log(quantity)
console.log(category)

// Example two
const primaryPerson = {
   firstName: "John",
   age: 26,
   address: "Rua Inc",
   phoneNumber: "123-456-81"
}

const {firstName, age, address, phoneNumber} = primaryPerson
console.log(firstName)
console.log(age)
console.log(address)
console.log(phoneNumber)
