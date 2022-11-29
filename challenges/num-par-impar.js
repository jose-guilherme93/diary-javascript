const numbers = [1,2,3,4.2,5.34,6435,334,535,523,532,0]


numbers.forEach((element) => {
    
    if(element % 2 === 0) 
    
    return console.log( `o número ${element.valueOf()} é par`)

    else console.log( `o número ${element.valueOf()} é impar`)
    

});
