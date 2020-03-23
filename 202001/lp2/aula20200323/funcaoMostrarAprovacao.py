def verifica_aprovacao(media):
    if media >= 6:
        print("APROVADO")
    elif 6 > media >= 4:
        print("VERIFICACAO SUPLEMENTAR")
    else:
        print("Reprovado")


med = float(input("Informe media: "))

print(verifica_aprovacao(med))