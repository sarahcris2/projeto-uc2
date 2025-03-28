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


with open("funcionarios.txt", "w") as arquivo:
    arquivo.write("Ana,31\nMarcus,23\nPedro,20\nCarla,29\nAlice,10\nPaula,42\nTereza,60\nArmando,68\nIsla,52\nClaudio,57")


with open("funcionarios.txt", "a") as arquivo:
    arquivo.write("\nWellinghthon,28\n")

def remover_funcionario(nome):
    with open("funcionarios.txt", "r") as arquivo:
        dados = arquivo.readlines()

    with open("funcionarios.txt", "w") as arquivo:
        for nomes in dados:
            if not nomes.lower().startswith(nome.lower() + ","):  
                arquivo.write(nomes)


remover_funcionario("Pedro")
remover_funcionario("Ana")
remover_funcionario("Alice")
remover_funcionario("Paula")
remover_funcionario("Tereza")
remover_funcionario("Armando")


with open("funcionarios.txt", "r") as arquivo:
    funcionarios = arquivo.readlines()
    idades = [float(idade.split(",")[1]) for idade in funcionarios]
    media = sum(idades) / len(idades)


file = open('funcionarios.txt', 'r')
print(file.read())
print(f"Idade média: {media:.2f}")
file.close()