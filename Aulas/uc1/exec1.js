let nota1 = 9
let nota2 = 7.98
let media = (nota1 + nota2)/2

    if (media>=8){
        if(media==10){
            console.log("o aluno gabaritou")
        } else{
            console.log ("o aluno esta aprovado" +media)

        }

    }else if (media>=7){
        console.log("o aluno esta em recuperaçao" +media)
    }else {
        console.log("o aluno esta reprovado" +media)
    }