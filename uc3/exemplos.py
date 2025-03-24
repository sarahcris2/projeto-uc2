# compressão de listas
# exemplo 1
x =[1,2,3,4]
y = []
j=[]
for i in x:
   y.append(i**2)
   print(y)
   # =-=-=-=-=-=-=-=-=-=-=-=-=
   w = [i**2 for i in x]
   print(w)
   # =-=-=-=-=-=-=-=-=-=-=-=-=
   for i in x:
      if i % 2 ==0:
         j.append(i)
   # =-=-=-=-=-=-=-=-=-=-=-=-=
   j = [ i for i in x if i % 2 == 0]
   print()
   # enumeraçao de lista 
   # exemplo 2
   lista = [ 'abacate','abacaxi','melao','ameixa','maçã']
   for i in range(len(lista)):
      print(i, lista[i])
    #   A funçãp enumerativa()em Python é usada parar interar sobre uma sequencia
    #   como uma lista, tupla ou string) e obter tanto o indice(posiçao) quanto o
    #   valor de cada item da sequencia ao mesmo tempo.
      for i, fruta in enumerate(lista):
         print(i, fruta)
         texto= "python"
         for indice, caractere in enumerate(texto):
            print(indice, caractere)
            
            

