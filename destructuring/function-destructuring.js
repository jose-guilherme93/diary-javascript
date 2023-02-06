

function DestructuringProps({name, lastName}) {
    return `seu nome é ${name} e seu sobrenome é ${lastName}`
}

const user =  {
    name: 'José',
    lastName: 'Ramos',  
    age: 57

}

console.table(DestructuringProps(user))