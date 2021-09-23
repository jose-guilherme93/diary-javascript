//desenvolva um programa que leia o salário de 10 funcionários de uma empresa, calcule e mostre o maior salário e a média salarial da empresa.

const prompt = require('prompt-sync')()

for (let contador = 0; contador <= 10; contador++){
    let salario = prompt('Digite seu salário, por favor:')
    console.log(salario)
}
