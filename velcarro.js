// const prompt = require('prompt-sync')()
 
// const name = prompt('What is your name? ')

// const resposta = prompt (`Você está digirindo um veículo?, ${name}? `)
// resposta == true
// if (resposta == true) console.log ('ok, vamos continuar')
// else console.log (`então, obrigado pelas respostas, ${name}!`)
// return('então, obrigado pelas respostas, ${name}!')

//     if (resposta == false) console.log (`então, obrigado pelas respostas, ${name}!`)
    
// const vel = prompt ('Qual a velocidade do seu carro? ')
// if (vel > 60) {
//     console.log(`${name}, velocidade do seu carro acima do limite! Diminua imediatamente`)
// } else {
//     console.log ('Continue digirindo com tranquilidade')
// }

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70
    const kmPorPonto = 5
    if (velocidade <= 70) {
    return 'tudo ok com sua velocidade'}

    else { 
        const pontos = Math.floor(((velocidade - velocidadeMaxima) / kmPorPonto))
        if (pontos >= 12)
            console.log('Carteira suspensa')
            else console.log('Pontos', pontos)
    }}
let result = verificarVelocidade(180)
console.log(result)
