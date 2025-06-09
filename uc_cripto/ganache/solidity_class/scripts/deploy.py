from brownie import ContractSmart, accounts

def main():
    dev = accounts[0]
    store = ContractSmart.deploy({'from': dev})
    print(f"Contrato implantando em:{store.adress}")