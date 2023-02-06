//LONG WAY

// let a = 'vermelho'
// let b = 'azul'
//  console.log(a + ' ' + b)

// let trocaA = a === 'vermelho' ? 'azul' : 'azul'
// let trocaB = b === 'azul' ? 'vermelho' : 'vermelho'


console.log(trocaA + ' ' + trocaB)
//===========================================================================================
//SMART WAY
let a = 'vermelho'
let b = 'azul'

let c= a
a=b
b=c
 console.log(a + ' ' + b)