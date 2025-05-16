import hashlib
import time

def minerar_bloco(numero_bloco, dados, dificuldade):
    nonce = 0
    prefixo = '0' * dificuldade
    print("Minerando...")
    inicio = time.time()
    
    while True:
        texto = str(numero_bloco) + dados + str(nonce)
        hash_resultado = hashlib.sha256(texto.encode()).hexdigest()
        if hash_resultado.startswith(prefixo):
            fim = time.time()
            print(f"Bloco minerado em {fim - inicio:.2f} segundos.")
            print(hash_resultado)
            return hash_resultado, nonce
        nonce += 1
minerar_bloco(2,"2",)