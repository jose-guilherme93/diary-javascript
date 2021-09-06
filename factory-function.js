// const celular ={
//     marcaCelular: 'Apple',
//     tamanhoTela: {
//         vertical: 1050,
//         horizontal: 750
//     },
//     capacidadeBateria: 1.750,
//     ligar: function() {
//         console.log('Fazendo ligação')
//     }

// }

function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {

    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação')
        }
    
    }
   
}
const celular1 = criarCelular('apple', 4.7,1.770)
console.log(celular1)