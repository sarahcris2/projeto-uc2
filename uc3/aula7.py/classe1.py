class Pessoa:
 def __init__(self, nome, idade):

  self.nome = nome

  self.idade= idade

def apresentar(self):

 print(f'Oi, eu sou {self.nome} e tenho {self.idade} anos.')
 
 pessoa1= Pessoa("Jose Carlos", 24)
 apresentar(pessoa1)