const arr = [1,2,3,4,5]

const initialValue = 0

const reduced = arr.reduce((accumulator, currentValue) =>
        accumulator + currentValue, initialValue

)

console.log(reduced)
