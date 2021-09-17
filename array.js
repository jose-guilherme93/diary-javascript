const array = [1,2,3,4,5, 'javascript is easy for computers', 'josegui', 9, 91 ]

//return false
console.log(array.includes(8))

//insert a 0 in array
array.unshift(0)
console.log(array)
//put in middle of the array one new value 
array.splice(1,2, 45)
//return 6
console.log(array.indexOf('josegui'))
//put a value in the end of the array
array.push('hello, world!')
console.log(array)
//length of array
console.log(array.length)

//find a element of array
const array2 = [{id: '93'}, {name:'josegui'}
]

const seeItem = array2.find(function(seeItem) {
    return seeItem.id === '93'
})
console.log(seeItem)
//the same, but in arrow function
console.log( array2.find((seeItem) => seeItem.name === 'josegui'))

//turn an array empty
let array3 = [1,2,3,4,4,]
array3.length = 0
console.log(array3)
//OR
let array4 = [3,4,5,3,4]
array4.splice(0, array4.length)

//forEach
let arrayExample = [2,5,4,]
arrayExample.forEach((element, index) => console.log(element * index))
//return a
const search = 'where does the big foot live?'
const result = search.split(' ')

console.log(result.join('-'))
console.log(typeof result)
