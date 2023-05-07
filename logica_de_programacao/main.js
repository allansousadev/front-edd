// Valores gastos no mês de Janeiro
let salarioJaneiro = 3500
let aluguelJaneiro = 1250
let contaDeLuzJaneiro = 190
let contaDeAguaJaneiro = 110
let internetJaneiro = 150
let transporteJaneiro = 290
let alimentacaoJaneiro = 700

console.log("Mês Janeiro")
let saidaJaneiro = salarioJaneiro - aluguelJaneiro - contaDeLuzJaneiro - contaDeAguaJaneiro - internetJaneiro - transporteJaneiro - alimentacaoJaneiro

let saldoFinalJaneiro = saidaJaneiro < 0
if (saldoFinalJaneiro) {
    console.log(`O saldo do mês de Janeiro é ${saldoFinalJaneiro}, o valor é R$:${saidaJaneiro}`)
    console.log("Juros mês de Janeiro")
    let jurosJaneiro = (saidaJaneiro * 0.10)
    console.log(`Juros mês de Janeiro R$:${jurosJaneiro}`)
    
    console.log("Rendimentos mês de Janeiro")
    let rendimentosJaneiro = (saidaJaneiro * 0.5)
    console.log(`Rendimentos mês de Janeiro R$: ${rendimentosJaneiro}`)
} else {
    console.log(`O saldo do mês de Janeiro é ${saldoFinalJaneiro}, o valor é R$:${saidaJaneiro}`)
    console.log("Juros mês de Janeiro")
    let jurosJaneiro = (saidaJaneiro * 0.10)
    console.log(`Juros mês de Janeiro R$:${jurosJaneiro}`)
    
    console.log("Rendimentos mês de Janeiro")
    let rendimentosJaneiro = (saidaJaneiro * 0.005)
    console.log(`Rendimentos mês de Janeiro R$:${rendimentosJaneiro}`)
}