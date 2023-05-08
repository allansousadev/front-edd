<<<<<<< HEAD
## Scope


## Block statement


* Variável var possui escopo global
Exemplo de variável global
``` javascript
  console.log("Existe x antes do bloco", x)

{
    var x = 0
}

// console.log("Existe x depois do bloco", x)
```

* Variável let possui escopo local
Exemplo de variável global
``` javascript
let y = 1
{
    let y = 0
    console.log("Existe y ", y)
}
console.log("Existe y antes do bloco", y)
```

* Variável const possui escopo local

## Hoisting
Processo de elevação de uma variável de forma interna pelo JS  
=======

Sem executar o código abaixo, diga qual será a resposta informada

```javascript
    console.log(a)
    var a = 1
```
A resposta será um undefined pois a variável a será elevada sofrendo o processo de hosting então ela é identificada mas não possui um valor determinado.
>>>>>>> develop
