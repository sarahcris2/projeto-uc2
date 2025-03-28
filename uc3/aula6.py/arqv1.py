file = open('dados.txt', 'r')
print(file.read())
file.close

with open('dados.txt', 'w') as file:
    print(file.write('ola, sarah!'))

    
    