let matriz = [
    [8.5, 7.2, 9.5],
    [9.5, 6.5, 7.5],
    [9.5 ,3.5 ,8.5]
];
for (let i=0; i<matriz.length; i++) {
    document.write(`Notas do aluno ${i + 1}: `+"<br>");
    for(let j = 0; j < matriz[i].length; j++) {
        document.write(matriz[i][j]+"<br>");
    }
}