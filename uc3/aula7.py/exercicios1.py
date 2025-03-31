class Aluno:
    def __init__(self, nome, curso, tempoSemDormir=0):

        self.nome= nome

        self.curso= curso

        self.tempoSemDormir= tempoSemDormir

# def apresentar(self):
#     print(f'o aluno {self.nome} esta cursando {self.curso} e ja estou {self.tempoSemDormir} sem dormir.')

# aluno1= Aluno("Vanderlei","Programaçao em Python"," a 20h")
# apresentar(aluno1)
        
def estudar(self, qtdhoras):
    self.tempoSemDormir += qtdhoras

def dormir(self,qtdhoras):
    self.tempoSemDormir -= qtdhoras
    if self.tempoSemDormir <0:
        self.tempoSemDormir = 0

def mostrar(self):
    print(f'nome {self.nome},curso {self.curso}, tempo sem dormir {self.tempoSemDormir} horas')
aluno1= Aluno('Maria luisa','Eletrica','25')
mostrar(aluno1)