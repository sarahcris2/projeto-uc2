# Uma empresa fornece um arquivo de texto com nomes e idades dos
# funcionários. A tarefa é:
# Exibir
# os dados no console.
# Calcular a média das
# idades.
# Permitir
# ao usuário adicionar ou remover funcionários.
# Exemplo de
# Arquivo funcionarios.txt:
# Ana,25
# Carlos,30
# Maria,28
# crie o exercicio  acima em python com 20 funcionários e 20 idades.


import os

def carregar_funcionarios(arquivo):
    funcionarios = []
    if os.path.exists(arquivo):
        with open(arquivo, 'r') as f:
            for linha in f:
                nome, idade = linha.strip().split(',')
                funcionarios.append((nome, int(idade)))
    return funcionarios

def salvar_funcionarios(arquivo, funcionarios):
    with open(arquivo, 'w') as f:
        for nome, idade in funcionarios:
            f.write(f"{nome},{idade}\n")

def exibir_funcionarios(funcionarios):
    print("\nLista de Funcionários:")
    for nome, idade in funcionarios:
        print(f"{nome}, {idade} anos")

def calcular_media_idades(funcionarios):
    if not funcionarios:
        return 0
    return sum(idade for _, idade in funcionarios) / len(funcionarios)

def adicionar_funcionario(funcionarios):
    nome = input("Digite o nome do funcionário: ")
    idade = int(input("Digite a idade do funcionário: "))
    funcionarios.append((nome, idade))

def remover_funcionario(funcionarios):
    nome = input("Digite o nome do funcionário a ser removido: ")
    funcionarios[:] = [(n, i) for n, i in funcionarios if n.lower() != nome.lower()]

# Criando um arquivo inicial com 20 funcionários e idades
arquivo = 'funcionarios.txt'
inicial = [
    ("Ana", 25), ("Carlos", 30), ("Maria", 28), ("João", 35), ("Fernanda", 27),
    ("Pedro", 40), ("Luiza", 22), ("Ricardo", 33), ("Patrícia", 31), ("Fernando", 26),
    ("Camila", 29), ("Gustavo", 38), ("Juliana", 24), ("Roberto", 45), ("Mariana", 32),
    ("Paulo", 41), ("Simone", 23), ("Eduardo", 37), ("Sofia", 36), ("André", 34)
]
if not os.path.exists(arquivo):
    salvar_funcionarios(arquivo, inicial)

# Programa principal
funcionarios = carregar_funcionarios(arquivo)
while True:
    print("\nMenu:")
    print("1. Exibir Funcionários")
    print("2. Calcular Média das Idades")
    print("3. Adicionar Funcionário")
    print("4. Remover Funcionário")
    print("5. Sair")
    opcao = input("Escolha uma opção: ")
    
    if opcao == '1':
        exibir_funcionarios(funcionarios)
    elif opcao == '2':
        print(f"Média das idades: {calcular_media_idades(funcionarios):.2f} anos")
    elif opcao == '3':
        adicionar_funcionario(funcionarios)
        salvar_funcionarios(arquivo, funcionarios)
    elif opcao == '4':
        remover_funcionario(funcionarios)
        salvar_funcionarios(arquivo, funcionarios)
    elif opcao == '5':
        print("Saindo...")
        break
    else:
        print("Opção inválida! Tente novamente.")
