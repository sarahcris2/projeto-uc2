class Produtos {
    constructor(nome,preço,quantidade){
       this.nome= nome;            // definindo atributos
       this.preço = preço;
       this.quantidade = quantidade;

    }

    // metodo
    comprar(){
        document.write("o biscoito"+this.nome+this.preço+" estava caro"+this.quantidade+"comprei apenas "+"<br>")
      }
      }

// criando um objeto apartir da classe produto
let meuProduto = new Produtos(" skini","duas unidades " ,"2,50 "+"<br>")
meuProduto.comprar()