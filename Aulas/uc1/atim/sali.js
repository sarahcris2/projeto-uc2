//  ler dois valores
let 
valor1 = (prompt ("digite o primeiro numero"));
let valor2 = (prompt ("digite o segundo numero"));
// testar se sao valores nulos
if (valor1.trim() === "" || valor2.trim() === "") {
    alert("Digite a porra de um número seu animal")
  } else {
// realizar a soma
let num1 = parseInt(valor1);
let num2 = parseInt(valor2);
let soma = num1+num2;
// exibir a soma
document.write("soma: "+soma);
}

// faça um condiçao para testar se a soma é maior ou menor do que 20
if (soma>20) {
    document.write("soma maior do que 20")
}else if(soma<20) {
    document.write("soma menor do que 20")
}else {
    document.write("soma igual a 20")
}


