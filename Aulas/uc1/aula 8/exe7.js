function media(nota1,nota2) {
    let med = (nota1+nota2)/2
    return med   
}

let not1 = parseFloat(prompt("digite a primeira nota"))
let not2 = parseFloat(prompt("digite a segunda nota"))
let med = media(not1,not2)

alert(med)