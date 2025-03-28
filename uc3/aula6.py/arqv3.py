with open('nome.txt','w') as file:
 file.write('Ana\nCarlos\nBruno')
with open('nome.txt','r') as file:
    print(file.read())
