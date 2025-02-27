// criaçao de classe 
class Carros{
    constructor(marca, modelo, cor){
    this.marca = marca; // definiçao dos atributos
    this.modelo = modelo;
    this.cor = cor;
}

// metodo
acelerar() {

    document.write("o carro " + this.modelo + " esta acelerando..."+"<br>");
    }
    frear() {
        document.write("O carro "+ this.modelo + " freeou ararrrrr"+"<br>")
    }
}

// criando um objeto a partir da classe carros
let meuCarro = new Carros("Toyota","Corolla","preto");
meuCarro.acelerar();

let meuOutroCarro = new Carros("Fiat","Uno","prata")
meuOutroCarro.acelerar();
