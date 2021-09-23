
const prompt = require ('prompt-sync')()

let productList = [{
        
        code: 0,
        especification: 'batata frita',
        price: 4.23
    },
    {
        code: 1,
        especification: 'X-salada',
        price: 3.56,
    },
    {
        code: 2,
        especification: 'X-bacon',
        price: 4.41,
    },
    {
        code: 3,
        especification: 'Cachorro Quente',
        price: 4.23,
    },
    {
        code: 4,
        especification: 'Refrigerante',
        price: 0.50,
    }]
    for (code of productList) {
        console.log('hello')
    }
console.log(productList[3].code)
const productCode = prompt('Digite o código do produto: ')
//const productQuantity = prompt('Digite a quantidade desejada: ')
    // if (productCode == productList[1] )
    //     console.log(productList[1])
    // if (productCode == 2 )
    //     console.log(productList[2].toString)
    
    