let nome = [];

for(let i = 0; i <=2; i++){
    nome.push(prompt("Insira seu nome:"));
}
nome.sort()
document.write("Os nomes são: " + nome + "<br>" + "Realmente, um raio pode cair no mesmo lugar 2 vezes")