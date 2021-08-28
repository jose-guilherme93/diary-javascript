let date = new Date()
let instante = date.getHours()


let humor = ['feliz', 'triste', 'satisfeito', 'produtivo',]
console.log(humor[1])
function estado() {
    if (humor == date.getHours()) {
        console.log(humor(1))
    } else 
        (humor == date.getHours(16)) 
            console.log(humor(0))
        
    
}
