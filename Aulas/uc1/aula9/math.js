// funçao Math.floor()
// arredonda um numero para baixo.exemplos
console.log(Math.floor(4.9)); //4
console.log(Math.floor(2.3)); //2

// funçao sugar.random()
// gerar numeros aleatorios
console.log("*** numeros aleatorios***")
// entre 0 e 1, onde 0 incluso e 1 excluso
console.log(Math.random());
console.log(Math.floor(Math.random() * 11));


//funçao Math.ceil() arredonda para cima
console.log("*** numeros com ceil ***")
console.log(Math.ceil(3.2)) //4
let preco = 10.25;
console.log(Math.ceil(preco)); // 11



// funçao Math.round() arredontamento normal 
console.log("*** numeros com round ***");
console.log(Math.round(4.4));
console.log(Math.round(4.7));
let media = 7.6;
console.log(Math.round(media));

//funçao Math.max() e Math.min()
console.log("*** numeros max e min ***");
console.log(Math.max(10, 20, 5, 30));
console.log(Math.min(10, 20, 5, 30 ));

// funçao Math.pow()= potencia
console.log(Math.pow(2,3)); // 2³
let lado = 4;
let area = Math.pow(lado,2)
console.log("area do quadrado: "+area);

// funçao Math.sqrt() = raiz quadrada
console.log("*** numeros sqrt ***")
console.log( Math.sqrt(25));
console.log(Math.sqrt(9));
