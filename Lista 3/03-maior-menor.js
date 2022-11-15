console.log("03 - maior e menor números do vetor");

function maxMinDifference(numberList) {
    // retorna a diferença entre o maior
    // e menor números de um vetor (numberList)
    max = Number.MIN_SAFE_INTEGER; // maior inteiro
    min = Number.MAX_SAFE_INTEGER; // menor inteiro

    for (const number of numberList) {
        // para cada numero na lista de números
        if (number < min) {
            // se numero < minimo então
            min = number;
        }
        if (number > max) {
            // se numero > maximo então
            max = number;
        }
    }

    return max - min; // retorna a diferença entre maior e menor
}

const numbers = [45, 93, 2, 14, 100, 34];

console.log(maxMinDifference(numbers));