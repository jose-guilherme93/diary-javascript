//printar na tela informações de enderenço(por exemplo), sem a sintaxe de object: [] , : '' 

let address = {
    rua: 'dos ipês',
    cidade: 'Vancouver',
    cep: 64847333,
}


function seeAddress(address) {
    for (let key in address) {

        console.log(key, address[key])
    }
}

seeAddress(address)