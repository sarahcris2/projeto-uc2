class Pessoa {
    constructor(nome,idade,profissao){
        this.nome = nome
        this.idade = idade
        this.profissao = profissao
    }

// metodo
lecionar(){
 document.write("a professor"+this.nome+this.idade+" leciona para crianças"+"<br>")   
}
}

// criando um objeto apartir da classe pessoas
let minhasPessoas = new Pessoa("a Debora"," de 24 anos","professora"+"<br>")
minhasPessoas.lecionar()