let num1 = 28
let num2 = 52
let op = "/"
let soma = num1 + num2
let sub = num1 - num2
let mult = num1 * mum2
let div = num / num2

switch(op) {
    case "+":
      console.log("A soma de" + num1 + " e "+ num2+ "é" +soma)  
break
case "-":
console.log("A subtraçao de" + num1 + " e " + num2+ "é" +sub)
break
case "*":
console.log("A multiplicaçao de" + num1 + " e " + num2+ "é" +mult)
break
case "/":
    console.log("A divisao de" = num1 + " e " + num2+ "é" +div)
    break
    default:
        console.log("operador invalido, escolha um, dentre esses operadores(+, -, *, /)")
        break
}