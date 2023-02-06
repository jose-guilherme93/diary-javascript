let movies = {
    nome: 'v de vigança',
    lançamento: 2003,
    duração: 2,
    diretor : 'sei lá'
}

function onlyString(object) {


for (prop in object) {
    if (typeof object[prop] === 'string') {
        console.log(prop, object[prop])
    }
}



}

return onlyString(movies)