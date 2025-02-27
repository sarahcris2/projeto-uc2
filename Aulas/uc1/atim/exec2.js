let altura = parseFloat(prompt("digite sua altura"))
let peso = parseFloat(prompt("digie o seu peso"))
let imc = peso / (altura**2)

if (isNaN(peso) || isNaN(altura)) {
    document.write("peso ou altura invalidos")
}else{
    document.write(imc)
}


