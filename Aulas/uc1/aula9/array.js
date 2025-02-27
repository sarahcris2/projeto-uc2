let frutas = ["maça", "banana", "laranja"];
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[3]);
if (frutas[0] == undefined) {
    console.log("indice invalido");
}
 //funçoes basicas
 //push() >> acrescenta no final do array
 console.log("acrescentando com push");
 frutas.push("abacate");
 console.log(frutas);

 // pop()>> remove o ultimo elemento do array
 console.log("removendo com pop");
 frutas.pop;
 console.log(frutas);
 //sort() >> ordena um array string

 console.log("ordenando o string do array");
 frutas.sort();
 console.log(frutas);

 // copy() >> copia um array: sixtaxe: [...array_a_ser_copiado]
 let copia = [...frutas];
 console.log("mostrando a copia");
 console.log(copia);
  
 // count() >> conta os elementos do array
 console.log("quantos elementos tem no array")
 console.log(frutas.lenght)
 
 // como trazer a funçao math.random para exibir um elemento aleatorio
 let indicealeatorio = Math. floor(Math.random()*frutas.lenght);
 console.log(frutas[indicealeatorio])