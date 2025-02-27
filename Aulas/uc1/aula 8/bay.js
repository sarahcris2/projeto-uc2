function cumprimentar(nome) {
    alert("ola,"+ nome + "! seja bem-vindo");
}

// chamando a funçao com diferentes valores
// cumprimentar("sarah");
// cumprimentar("cristina");
// cumprimentar("nicolau");
// let nomes =prompt("informe seu nome");
// cumprimentar(nomes);


let nomes = ["vini","buh","any"];
for (let i=0; i < nomes.length; i++) {
    cumprimentar(nomes[i]);
}