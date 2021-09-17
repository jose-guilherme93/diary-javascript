//Desenvolver um programa que leia 15 números inteiros e positivos e mostre o maior deles
const prompt = require ('prompt-sync')()

let num
let numeroMaior = 0
for (let i = 0; i <= 4; i++)
    {
      num = prompt('Digite um número: ')
        if (num > numeroMaior) {
            numeroMaior = num
        }
    }
console.log(`O maior número é: ${numeroMaior}`)