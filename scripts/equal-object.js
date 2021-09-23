function address (rua,cep, quadra) {
    this.rua = rua,
    this.cep = cep,
    this.quadra = quadra
}

const address1 = new address(1, 'b','c')
const address2 = new address('b','b','c')

function isEqual(address1, address2) {
    
    // return address1.rua === address2.rua && address1.cep === address2.cep && address1.quadra === address2.quadra
}
console.log(isEqual(address1, address2))
return isEqual(address1, address2) 
