#capturar erro por divisao e erro por dado invalido
# try:
#    x = int(input("digite um numero"))
#    resultado = 10/x
#    print(round(resultado,2))
# except ZeroDivisionError:
#   print("Erro: Divisao por zero nao é permitida")
# except ValueError:
#   print("Erro: So é permitida a entrada de numeros inteiros")

# a = 2
# b = 0
# try:
#  c = a/b
#  print(c)
# except:
#  print("Erro:Divisao por zero nao é permitido")


# usando o finally para lipeza
# try:
#     arquivo= open("dados.txt")
#     conteudo = arquivo.read()
#     print(conteudo)
# except FileNotFoundError:
#     print("Erro: arquivo nao encontrado")
# finally:
#     if 'arquivo' in locals():
#         arquivo.close()
#         print("arquivo fechado com sucesso")



#Definir a propria exceçao. Criar manualmente
try:
    idade = int(input("Digite sua idade"))
    if idade < 0:
        raise ValueError(" A idade nao pode ser negativa.")
    print(idade)
except ValueError as ve:
    print(f"Erro: {ve}")
except Exception as e:
    print(f"Erro: {e}")