function opsoma(valor1,valor2) {
let soma = valor1 + valor2;
return soma
}

function opsub(valor1,valor2) {
    let sub = valor1 - valor2;
    return sub
}

function opdiv(valor1,valor2) {
let div = valor1 / valor2;
return div
}
function opmult(valor1,valor2) {
    let mult = valor1 * valor2;
    return mult
}

let num1 = parseInt(prompt("digite o primeiro numero: "))
let num2 = parseInt(prompt("digite o segundo numero: "))
let soma = opsoma(num1,num2)
let sub = opsub(num1,num2)
let mult = opmult(num1,num2)
let div = opdiv(num1,num2)

document.write(" a soma é: " + )
