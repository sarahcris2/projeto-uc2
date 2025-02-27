let num = []
let num1 = prompt("escolha o primeiro numero");
let num2 =prompt("escolha o segundo numero");
let num3 =prompt("escolha o terceiro numero");

num[0].push(num1);
num[1].push(num2);
num[2].push(num3);
console.log(num)

let numMax = math.max(...num);
console.log(numMax);