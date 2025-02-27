let lado1 = prompt(" digite o valor do lado 1");
let lado2 = prompt(" digite o valor do lado 2");
let lado3 = prompt(" digite o valor do lado 3");

// testar se valores sao nulos
// if (valor1.trim() === valor2.trim() === valor3.trim()=== "") {
//     alerta("informe valores validos")
// }else if(
//     (parseInt(lado1) + parseInt(lado2) < parseInt(lado3)) ||
//     (parseInt(lado1) + parseInt(lado3) < parseInt(lado2)) ||
//     (parseInt(lado1) + parseInt(lado1) < parseInt(lado1)) 
//     ) {
//         alerta("Os valores nao podem formar um triangulo")
//     } else {
//         // testar qual é o tipo de triangulo
//         if (parseInt(valor1) == parseInt(valor2) && parseInt(valor2) ==parseInt(valor3)) {
//             cocument, write("triangulo equilatero")
//         }else if (parseInt(valor1) == parseInt($valor2) || parseInt ($valor2) == parseInt($valor3) || parseInt($valor1) == parseInt($valor3)){
//             document.write("Triângulo Isósceles")
//         } else {
//             document.write("Triângulo Escaleno")
//         }
//     }

    // O código do Pretinho

    if ($valor1 + $valor2 < $valor3 || $valor1 + $valor2 > $valor3 || $valor2 + $valor3 < $valor1) {
        document.write("Esses valores não formam um triângulo.")
    } else if ($valor1 === $valor2 && $valor1 === $valor3) {
        document.write("É um triângulo Equlátero")
    } else if (($valor1 === $valor2 && $valor2 !== $valor3) || ($valor1 !== $valor2 && $valor1 === $valor3)) {
        document.write("É um Triângulo Isósceles")
    }