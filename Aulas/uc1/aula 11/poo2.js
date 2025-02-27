// exemplo com encapsulamento 
class ContaBancaria {
    #saldo; // atributo privado
    constructor(titular, saldo) {

        this.titular = titular;
        this.#saldo = saldo;
    }
    depositar(valor) {
        this.#saldo += valor;
        document.write("deposito de R$ " + valor + " realizado" + "<br>");
    }
    consultarsaldo() {
        document.write("saldo do titular | R$ " + this.#saldo + "<br>");
    }
    sacar(valor){
        if (valor > this.#saldo) {
            document.write("Saldo insuficiente para o titular " + this.titular);
        } else {
            this.#saldo -= valor;
            document.write("saldo apos o saque R$" + this.#saldo);
        }

    }
    transferir(valor, destinatario) {
        if (valor > this.#saldo) {
            document.write("saldo insuficiente para transferencia na conta do titular: "+this.titular+"<br>")
        }else{
            this.#saldo -= valor;
            destinatario.#saldo += valor
            document.write("transferencia no valor de R$"+valor+" para a conta de "+destinatario.titular+"<br>")
            document.write("saldo apos a transferencia: R$ " + this.#saldo+"<br>")
        }
    }
}
// criando uma nova conta
let conta1 = new ContaBancaria("Ana", 1000);
let conta2 = new ContaBancaria("Carlos, 500")

//consultando saldo
conta1.consultarsaldo();
conta2.consultarsaldo();

// depositando nas contas
conta1.depositar(25);
conta2.depositar(25);

// consultar apos deposito
conta1.consultarsaldo()
conta2.consultarsaldo()

//sacando das contas
conta1.sacar(10)
conta2.sacar(10)

// transferindo da conta da Ana para a de carlos e consultando os saldos seguidos
conta1.transferir(10,conta2);
conta1.consultarsaldo
conta2.consultarsaldo