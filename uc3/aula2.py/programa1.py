# crie um programa para solicitar o nome do usuari e exibir uma saudaçao
nome = input("digite o nome:")
print("ola, "+nome+" o flamengo é campeao!!")

# Ler dois numeros e mostar a soma entre eles
num1 = int(input("digite o primeiro numero:"))
num2 = int(input("digite o segundo numero:"))
soma = num1+num2
print(f"A soma de {num1} e {num2} é {soma}")

# calcule a a area de um retaangulo
Base= float(input(" informe a base "))
Altura= float(input("informe a altura"))
Area = float(input(Base*Altura))
print(f"A area é a {Base} {Altura}")

# ler um numero e informar se este numero é par ou impar
numero = int(input("informe um numero"))
if numero % 2 == 0:
     print(f'O valor {numero} é par')
else:
    print(f'O valor {numero} é impar')

#ler um numero e inforrmar se é positivo, negativo ou zero
numero =int(input("informe um numero"))
if numero > 0:
     print(f'O valor {numero} é positivo')
elif numero<0:
     print(f'O valor {numero} é negativo')
else:
     print('Zero')