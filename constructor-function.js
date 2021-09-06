//factory function
function criarCelular(marcaCelular,tamanhoTela,capacidadeBateria) {

    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação')
        }
    
    }
   
}
//constructor-function
function Celular(marcaCelular,tamanhoTela,capacidadeBateria){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidadeBateria = capacidadeBateria,
    this.ligar = function ligar() {
        console.log('fazendo ligação...')
    }
}
const celular = new Celular('apple', 4.7, 1.750)
console.log(celular)