class Celular {
    constructor(marca,modelo, sistema) {
        this.marca = marca;  // definindo atributos
        this.modelo = modelo;
        this.sistema = sistema;
    }


// metodo
ligar (){
    document.write("o celular" +this.modelo+ " esta ligando..."+"<br>")
}
   vibrar(){
    document.write("o celular" +this.modelo+ " esta vibrando..."+"<br>")
   }
}


// criar um objeto apartir da classe Celular
let meucelular = new Celular("motorola"," moto g6","android "+"<br>")
meucelular.ligar();

let meuOutroCelular = new Celular("motrola"," one macro","android "+"<br>")
meuOutroCelular.vibrar();