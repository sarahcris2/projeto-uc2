let nome, cadastro = "";
let continua = "s";
let i =0;
while(continua == "s") {
    nome = prompt("informe o nome");
    cadastro = cadastro + nome +"<br>";
    i++;
    continua = prompt("deseja continuar?<S/n>")
    
}
document.write(cadastro);
    document.write("foram lidos "+i+ " nomes");