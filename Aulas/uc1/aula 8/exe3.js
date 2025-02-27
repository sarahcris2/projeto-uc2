function verificarIdade(idade){
    if (idade >= 18) {
        document.write("Você é maior de idade")
    } else {
        document.write(" Vocé é menor de idade")
    }
}

let idade = parseInt(prompt("Digite sua idade: "))
verificarIdade(idade)