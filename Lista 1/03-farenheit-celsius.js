console.log('03 - Farenheit para Celsius');

function farenheit2Celsius(tempFarenheit) {
    // Recebe por parâmetro uma temperatura em graus Farenheit
    // E retorna a temperatura em graus Celsius.

    const tempCelsius = 5 * (tempFarenheit - 32) / 9;

    return tempCelsius;
}

let temp = farenheit2Celsius(100);

console.log('100 graus Farenheit são ' + temp + ' graus Celsius');