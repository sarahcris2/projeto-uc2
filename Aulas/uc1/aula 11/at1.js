class Motoca {
    constructor(marca,modelo,ano){
                          // definindo atributos
     this.marca = marca; 
     this.modelo = modelo;
     this.ano = ano;
    }

// metodo
acelerar(){
  document.write("a moto "+this.marca+" " +this.modelo+" esta acelerando a 300km por hora "+"<br>")  
}
}

// criar um objeto apartir da clase motoca
let minhamotoca = new Motoca("Honda","xre300","2023")
minhamotoca.acelerar();