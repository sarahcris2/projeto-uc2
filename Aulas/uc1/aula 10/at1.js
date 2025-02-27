/* monte uma matriz 3x3 que preencha o seu conteudo via prompt */
let matriz = [] // criaçao matriz vazia
let linhas = 3; // qtd de linhas
let colunas = 0; // qtd de colunas
for (let i = 0; i < linhas; i++) {
    matriz[i] = []; // criaçao de uma nova linha
    for (let j = 0; j < colunas; j++) {
    matriz[i][i] = parseint(prompt('digite um valor para a posiçao ['
    +i+']['+j+']'));
    
   }
}
// exibindo a matriz formatada no console
console.log("matriz informada pelo usuario:");
for (let i = 0; i < linhas; i++) {
    // console.log(matriz)[i].join(" "));
    document.write(matriz[i].join(" | ") + "<br>");
}

