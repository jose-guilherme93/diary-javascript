const prompt = require('prompt-sync')()
 
const name = prompt('What is your name? ')

const resposta = prompt (`Você está digirindo um veículo?, ${name}? `)
resposta == true
if (resposta == true) console.log ('ok, vamos continuar')
else console.log (`então, obrigado pelas respostas, ${name}!`)
return('então, obrigado pelas respostas, ${name}!')

    if (resposta == false) console.log (`então, obrigado pelas respostas, ${name}!`)
    
const vel = prompt ('Qual a velocidade do seu carro? ')
if (vel > 60) {
    console.log(`${name}, velocidade do seu carro acima do limite! Diminua imediatamente`)
} else {
    console.log ('Continue digirindo com tranquilidade')
}