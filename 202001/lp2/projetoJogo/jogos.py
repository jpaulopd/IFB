import adivinhacao
import forca
def escolhe_jogo():
    print("*********************************")
    print("********Escolha seu jogo !*******")
    print("*********************************")

    print("***(1) Forca ou (2) Adivinhação**")

    jogo = int(input("Qual jogos?"))

    if( jogo == 2 ):
        print("Jogando forca")
        adivinhacao.jogar_adivinhacao()
    elif( jogo == 1 ):
        print("Jogando adivinhação")
        forca.jogar_forca()

if(__name__ == "__main__"):
    escolhe_jogo()