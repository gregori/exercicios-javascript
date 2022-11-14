console.log('03 - Par ou ímpar');

function isOdd(inputNumber) {
    // recebe um inteiro e retorna true se for ímpar
    // false se for par

    return inputNumber % 2 !== 0;

    // if (inputNumber % 2 !== 0) {
    //     return true;
    // }

    // return false;
}

let num = 4;
// let oddEven = isOdd(num);

let oddEvenStr = isOdd(num) ? 'ímpar' : 'par';
console.log(num + ' é ' + oddEvenStr);

// if (oddEven) {
//     console.log(num + ' é ímpar.');
// } else {
//     console.log(num + ' é par.');
// }