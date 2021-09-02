let votos = ['a', 'a', 'b', 'b','a', 'c', 'c', 'b',
'c',]

var votosA = votos.filter(votos => votos === "a").length;
    console.log(`quantidade de votos A: ${votosA}`)

var votosB = votos.filter(votos => votos === "b").length;
    console.log(`quantidade de votos B: ${votosB}`)

var votosC = votos.filter(votos => votos === "c").length;
    console.log(`quantidade de votos C: ${votosC}`)

if ((votosA > votosB) && (votosA > votosC))
    console.log(`candidato A ganhou a eleição com ${votosA} votos`)

else if ((votosB > votosA) && (votosB > votosC)) 
    console.log(`candidato B ganhou a eleição com ${votosB} votos`) 

else if ((votosC > votosB) &&(votosC > votosA)) 
    console.log(`candidato C ganhou a eleição com ${votosC} votos`)
else if (votosC === votosA && votosB) {
    console.log('eleição empatada')
}

//===========================================================================================================\\

var votosA = votos.filter(votos => votos === "A").length
var votosB = votos.filter(votos => votos === "B").length
var votosC = votos.filter(votos => votos === "C").length
    if (votosA > votosB && votosC ) {
        return ('A')}

else if (votosB > votosA && votosC) {
    return ('B') }

else if (votosC > votosB && votosA) {
    return ('C')}

else if (votosC > votosA && votosB) {
    return ('C')}

else if (votosC > votosA == votosB) {
return ('c')}

else if (votosC < votosA == votosB) {
return ('C')}

else if (votosC > votosA > votosB) {
return ('C')}

else if (votosC < votosA !== votosB) {
return ('C')}

