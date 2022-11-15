console.log("01 - intervalo entre inteiros");

function interval(num1, num2) {
    for (let i = num1 + 1; i < num2; i++) {
        console.log(i);
    }
}

// chamando a função
interval(4, 15);