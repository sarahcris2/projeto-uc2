# 1: Escreva um arquivo chamado produtos.txt com os seguintes dados:
# Arroz,20
# Feijão,15
# Açúcar,10

with open('produtos.txt','w') as file:
 file.write('Arroz, 20\nFeijao, 15\nAçucar, 10')
with open('produtos.txt','r') as file:
    print(file.read())