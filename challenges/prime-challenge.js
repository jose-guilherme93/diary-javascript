let pushPrimes = []

const main = (params) => {
    
    for (let i = 2; i <= params; i++) {
        let isPrime = true
        for (let k = 2; k < i; k++) {
            if(i % k === 0) {
                isPrime = false
            }
            
        }
        if(isPrime) pushPrimes.push(i)
        
    }
    
    const initialValue = 0
    const sumAll = pushPrimes.reduce(
            (accumulator, currentValue )=> 
            accumulator + currentValue, initialValue
        )
            
    return sumAll
}



console.log(main(1000))
