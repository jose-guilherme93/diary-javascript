const prompt = require ('prompt-sync')()


let hour = prompt('put a number in 24 hours format: ')
const repeatWord = 'So,' 
    if ( hour < 12) {
    console.log(`${repeatWord} good morning!`)}

    else if (hour < 18) {
        console.log(`${repeatWord} good evening!`)}
    
    else if (hour <= 24)  {
        console.log(`${repeatWord} good night!`)}
    
    else {
    console.log('I am sure you know about time, dude. Why not a number in 24 hours format?')}