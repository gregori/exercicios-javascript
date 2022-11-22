function sum() {
    // referências aos elementos
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const answer = document.getElementById('answer');

    // valores dos inputs
    const num1 = parseInt(num1Input.value);
    const num2 = parseInt(num2Input.value);
    let numSum = num1 + num2;
    // insiro o texto da resposta
    answer.innerHTML = numSum;
}