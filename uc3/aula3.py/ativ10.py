#10. 

salHomem = salMulher = sexoM = sexoF=0

while True:

    sexo = input("insira f ou m para informar o sexo: ").lower()
    sal = float(input("informe o salario deste funcionario: "))

    if sexo == "f":
        sexoF+= 1
        salMulher+= sal
    else:
        sexoM=+1
        salHomem+=sal
    
    op = input("insira s para continuar ou fim para encerrar ").lower()

    if op == 'fim':
        break
    
print(f"a quantidade de funcionarios {sexoF+sexoM}")
print(f"a quantidade de funcionarios Mulheres { sexoF}")
print(f"a soma do salario dos mulhers:{salMulher} ")

print(f"a quantidade de funcionarios Homem { sexoM}")
print(f"a soma do salario dos homem:{salHomem} ")

print(f"A media salarial da empresa R${(salHomem+salMulher)/(sexoM+sexoF):.2f}")
