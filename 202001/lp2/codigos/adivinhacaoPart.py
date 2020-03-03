print("*********************************")
print("Bem vindo ao jogo de adivinhação!")
print("*********************************")

#numero_secreto = random.randrange(1, 101)  # 0.0 1.0
#pontos = 1000

#print("Qual o nível de dificuldade?")
#print("(1) Fácil ")
#print("(2) Médio ")
#print("(3) Difícil ")

#nivel = int(input("Digite o nível: "))
#if (nivel == 1):
#    total_de_tentativas = 20
#elif (nivel == 2):
#    total_de_tentativas = 10
#else:
#    total_de_tentativas = 5
rodada = 1
total_de_tentativas = 3
numero_secreto = 42

for rodada in range(rodada, total_de_tentativas + 1):
    print(f"Tentativa {rodada} de {total_de_tentativas}")
    chute = int(input("Digite um número entre 1 e 100: "))
    print(f"Você digitou {chute:0d}")
    acertou = chute == numero_secreto
    maior = chute > numero_secreto
    menor = chute < numero_secreto

#    if (chute < 1 or chute > 100):
#        print("Você deve digitar um valor entre 1 e 100!")
#        continue

    if (acertou):
#        print("Você acertou e fez {} pontos!".format(round(pontos)))
         print(f"Você acertou!Rodada {rodada} de {total_de_tentativas} tentativas")
         break
    else:
        if (maior):
            print(f"Você errou! O seu chute foi maior que o número secreto.")
        elif (menor):
            print("Você errou! O seu chute foi menor que o número secreto.")
#        pontos_perdidos = abs(numero_secreto - chute) / 3
#        pontos = pontos - pontos_perdidos
    rodada += 1
print("fim do jogo")