#Calcule o preço médio dos produtos no arquivo.
media=int(20+15+10+5)/4

with open('produtos.txt','w') as file:
    file.write('Arroz, 20\nFeijao, 15\nAçucar, 10\nFarinha, 5') 
    file.write(f'\n Media dos produtos é{media}')

file = open('produtos.txt', 'r')
print(file.read())