#Crie um programa que leia um valor em reais (R$) e mostre o valor convertido em dólares (US$), considerando uma taxa de câmbio fornecida pelo usuário.
Real= float(input("digite um valor R$"))
Cambio= float(input("digite a taxa de cambio o(em US$):"))
resultado= Real/Cambio
print(f"O valor de R${Real:.2f} convertido para dólares é: US${resultado:.2f}")