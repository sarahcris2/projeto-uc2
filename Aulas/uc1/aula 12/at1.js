class Livro{
    constructor(titulo,autor,anopublicado){
        this.titulo= titulo                 // definindo atributos
        this.autor= autor
        this.anopublicado= anopublicado
    }

  //  o fime O ódio que você semeia, de George Tilman Jn Foi indicado ao oscar em 2018
// metodo
ler(){
    document.write("o livro "+this.titulo + " Do " +this.autor+ " foi lançado no ano " +this.anopublicado+ "<br>")
  } 
  }
  
  // criar um objeto apartir da clase livro
  let meulivro = new Livro("pretinha, eu?","Julio Emilio Braz","1997")
  meulivro.ler();