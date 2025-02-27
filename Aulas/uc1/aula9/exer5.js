let dias = ["Domingo", "Segunda-feira", "Terça-Feira", "Quarta-Feira", "Quinta-feira", "Sexta-Feira","Sábado"]

while (true) {
    let indice = prompt('Digite um número entre 1 e 7 para ver o dia da semana, ou "sair" para encerrar:') - 1;
 
    if (indice <0 || indice >6) {
      break;
    }
 
    indice = parseInt(indice);
     
    alert("O dia da semana é "+ dias[indice])
   
}