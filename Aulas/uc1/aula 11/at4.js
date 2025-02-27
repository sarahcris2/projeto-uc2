class Filme{
constructor(titulo,diretor,ano){
this.titulo= titulo;          // definindo atributos
this.diretor= diretor;
this.ano= ano;
}

// o fime O ódio que você semeia, de George Tilman Jn Foi indicado ao oscar em 2018
// 
// metodo
assistir(){
    document.write("o filme "+this.titulo + " Do " +this.diretor+ " foi indicado ao Oscar no ano " +this.ano+ "<br>")
  }
  }

// criando um objeto apartir da classe filme
let meufilme = new Filme("O odio que voce semeia","George Tilman Jn" ,"2018")
meufilme.assistir()