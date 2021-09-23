
function somar(limit) {
let multipleFive = 0
let multipleThree = 0
    for (i = 0; i <= limit; i++) {
        if (i % 3 === 0)
            multipleThree = multipleThree + i
        if (i % 5 === 0)
            multipleFive = multipleFive + i
    }
    console.log(multipleFive + multipleThree)

}
return somar(10)