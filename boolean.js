const prompt = require('prompt-sync')()

const name = prompt('qual o seu nome? ')
console.log (`Olá, ${name}! Você está digirindo um veículo?`) 
const y = true
const n = true

const resposta = prompt('Para sim, digite y. Para não, digite n: ')
if (resposta != y, resposta == n) {
    console.log('Ok. E qual a velocidade do seu carro, então?')
} else {
    console.log ('Então fique tranquilo numa nice') 
} 

const vel = prompt ('Qual a velocidade do seu carro? ')
if (vel > 60) {
    console.log(`${name}, a velocidade do seu carro está acima do limite! Diminua imediatamente`)
} else {
    console.log ('Continue digirindo com tranquilidade') 
}

