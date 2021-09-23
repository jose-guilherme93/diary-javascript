

function verificarNumero (limit) {

    for(let index = 0; index <= limit; index++) {
        
        if (index % 2 === 0)
            console.log(index, 'par')

        else 
            console.log(index, 'impar')
    
    }
}
return verificarNumero(45)
