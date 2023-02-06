//objeto picolé criado
const picolé = {
    marca: 'kibon',
    sabor: 'melão',
    sabor2: 'chocolate',
    
}
console.log(picolé)


//possível adição de itens ao objeto
const newObject = Object.assign({
    novaMarca: 'keropicoleh'
},picolé)
console.log(newObject) 

//clocar sem adicionar itens ao objeto
const object2 = {...picolé}
console.log(object2)