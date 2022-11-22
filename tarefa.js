// 1 Escreva um programa que atribua dois valores quaisquer 
// a duas variáveis e "troque" os valores entre elas.
function troca() {
    let num1 = 10;
    let num2 = 20;
    console.log('num1: ' + num1 + ', num2: ' + num2);

    let aux = num1;
    num1 = num2;
    num2 = aux;
    console.log('num1: ' + num1 + ', num2: ' + num2);
}

// 2 Escreva uma função que retorne o maior valor entre dois números.
function maior(num1, num2) {
    if (num1 > num2) {
        return num1;
    }

    return num2;

    // return num1 > num2 ? num1 : num2;
}
// 3 Escreva uma função que verifique, dados uma largura e altura,
// e retorne "true" se (paisagem - landscape) se a largura for 
// maior que a altura e falso (retrato) caso contrário.
function isLandscape(width, height) {
    return width > height;
}

// 4 Escreva uma função que. dado um número, retorne: 
// 	a Se divisível por 3: Fizz
// 	b Se divisível por 5: Buzz
// 	c Se divisível por 3 e 5: FizzBuzz
// 	d Se não for divisível nem por 3 nem por 5, retorna o número dado
// 	e Se não for um número, imprimir: "NaN - Não é um número! Informe um número"

function fizzBuzz(num) {
    if (typeof num !== 'number') {
        console.error('NaN - Não é um número! Informe um número');
    } else {
        if (num % 3 === 0 && num % 5 === 0) {
            return "FizzBuzz";
        } 
        if (num % 3 === 0) {
            return "Fizz";
        }

        if (num % 5 === 0) {
            return "Buzz";
        }

        return num;
    }
}

function fizzBuzzSimple(num) {
    if (typeof num !== 'number') {
        console.error('NaN - Não é um número! Informe um número');
    } else {
        let message = '';

        if (num % 3 === 0) {
            message = "Fizz";
        }

        if (num % 5 === 0) {
            message += "Buzz";
        }

        return message ? message : num;
    }
}

// 5 Escreva uma função que, dado um número limite, 
// imprima, até esse limite "par" ou "ímpar" 
// (verificando os números entre 0 e limite).
function oddEven(num) {
    for (let i = 0; i < num; i++) {
        if (i % 2 === 0) {
            console.log('par');
        } else {
            console.log('impar');
        }
    }
}

// 6 Escreva uma função que conte os números de valores "truthy" em um array. 
function isTrue(array) {
    let count = 0;
    for(const element of array) {
        if (element) {
            count++;
        }
    }
    return count;
}

// 7 Escreva uma função que verifique e imprima somente as 
// propriedades de tipo "string" de um objeto.
// {'nome': 'Fulano', 'idade': 30, 'estadoCivil': 'solteiro' }
function strProperties(obj) {
    for (const property in obj) {
        if (typeof obj[property] === 'string') {
            console.log(property + ': ' + obj[property]);
        }
    }
}




