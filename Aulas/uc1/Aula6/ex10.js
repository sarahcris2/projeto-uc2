let nome = [];
let cidade = [];

// coletando os dados de 10 itens
//for(let i=0; i<10; i++){
  //  nome.push(prompt(" informe o nome da pessoa"+(i+1)+":"));
    //cidade.push(prompt("informe a cidade da pessoa"+(i+1)+":"));


//let indice;
//let continua;
//while (true) {
   // indice = prompt("informe o indice")
    //if (indice >=&& indice<3 {
        
   // }
        //alert("nome. .:" +nome)[indice]+"cidade" +cidade[indice])
//}


// array duplo / objeto
let pessoas   = [];
let nomes;
let cidades;
//coletando os dados de 10 itens
for (let i=0; i<3; i++){
    nome = prompt("informe o nome da pessoa "+(i+1)+":");
    cidade = prompt("informe a cidade da pessoa "+(i+1)+":");
    pessoas.push({nome:nome, cidade:cidade});
}

let indice;
let continua;
while (true){
    indice = prompt("Informe o índice");
    if (indice>=0 && indice<3) {
        alert("Nome..: "+pessoas[indice].nome+" Cidade: "+pessoas[indice].cidade);
    } else {
        alert("índice inválido");
    }
    continua = prompt("deseja ler outro índice <s/n>").toLowerCase();
    if (continua !="s") break;
}