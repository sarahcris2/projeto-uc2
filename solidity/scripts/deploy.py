from brownie import Register, accounts

def main():
    conta = accounts[0]
    contrato = Register.deploy({'from': conta})
    contrato.setInfo("Olá alunos!", {'from': conta})
    print("Informação registrada:", contrato.getInfo())
