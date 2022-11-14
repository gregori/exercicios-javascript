console.log('06- calcular a área de um circulo');

function circleArea(radius) {
    // calcula a área de um círculo, dado seu raio

    return Math.PI * radius * radius;
}

const radius = 10;
const area = circleArea(radius);

console.log('A área de um círculo de raio ' + radius + ' é ' + area);