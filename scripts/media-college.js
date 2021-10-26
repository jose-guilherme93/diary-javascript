const prompt = require ('prompt-sync')()

//let studentPerformance = [90, 95, 90]
const firstBimester = Number(prompt('Sua nota no primeiro bimestre: '))
const secondBimester = Number(prompt('Sua nota no segundo bimestre: '))
const thirdBimester = Number(prompt('Sua nota no terceiro bimestre: '))
let studentPerformance = firstBimester + secondBimester + thirdBimester
console.log(studentPerformance)
let totalBimester = 3

function mediaOfStudent() {
    
     
   let media = studentPerformance  / totalBimester
   console.log(media)
   console.log(studentPerformance)
   
    if (media <= 59) return 'F'
    if (media <= 69) return 'D'
    if (media <= 79) return 'C'
    if (media <= 89) return 'B'
    return 'A'  
    
}
console.log((mediaOfStudent(studentPerformance)))


