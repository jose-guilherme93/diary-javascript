function verificarPrimo(limit) {
    for(let i = 2; i <= limit; i++) {
        let ehPrimo = true

        
        for( let divisor = 2; divisor < i; divisor++) {
            if(i %  divisor === 0) { 
                ehPrimo = false
                break
            }
        }
        if (ehPrimo) console.log(i)
    }
}
return verificarPrimo(38)
