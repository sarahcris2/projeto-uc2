function calQuad($valor1) {
    let $quad = $valor1 * $valor1;
    return $quad
}

let num1 = parseInt(prompt("Digite um número:"));
calQuad (num1);

document.write("O quadrado de " + num1 + " é: " + calQuad(num1));