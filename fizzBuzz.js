let result = fizzBuzz(11)

function fizzBuzz(number) {
if (typeof number !== 'number') {
    return 'tem certeza que digitou um número?'}
 else if (number % 5 === 0 && number % 3 === 0) 
    return 'FizzBuzz'

else if (number % 3 == 0)
 return 'Fizz'

 else if (number % 5 ==0)
    return'Buzz'

return number
}

console.log(result)
