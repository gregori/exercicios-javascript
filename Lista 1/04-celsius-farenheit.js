console.log('04 - Celsius para Farenheit');

function celsius2Farenheit(tempCelsius) {
    // Recebe por parâmetro uma temperatura em graus Celsius
    // E retorna a temperatura em graus Farenheit.
    const tempFarenheit = 9 * tempCelsius / 5 + 32;
    return tempFarenheit;
}

let celsius = 100;
let farenheit = celsius2Farenheit(celsius);

console.log(celsius + ' graus Celsius são ' + farenheit + ' graus Farenheit');

celsius = 30;
farenheit = celsius2Farenheit(celsius);

console.log(celsius + ' graus Celsius são ' + farenheit + ' graus Farenheit');