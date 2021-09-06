function converteTemperatura(temperatura, escalaOrigem, escalaDesejada) {

if (escalaOrigem === 'celsius' && escalaDesejada === 'kelvin' ) {
    return temperatura + 273.15
}
else if (escalaOrigem === 'kelvin' && escalaDesejada === 'celsius' ) {
    return temperatura - 273.15
}
else if (escalaOrigem === 'fahrenheit' && escalaDesejada === 'celsius' ) {
    return (temperatura - 32) / 1.8
}
else if (escalaOrigem === 'celsius' && escalaDesejada === 'fahrenheit') {
   return  (temperatura * 1.8) + 32
}
else if (escalaOrigem === 'kelvin' && escalaDesejada === 'faherenheit')
return temperatura * 1.8 - 459.67
}
console.log(Math.floor(converteTemperatura(500, 'kelvin', 'celsius')),'º graus')
return converteTemperatura()
