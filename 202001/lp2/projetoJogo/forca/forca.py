def jogar():
    print("***********************************")
    print("*****BEM VINDO AO JOGO DA FORCA****")
    print("***********************************")    

    palavra_secreta = "banana"
    palavra_secreta = palavra_secreta.upper()
    letras_acertadas = []

    for letra in palavra_secreta:
        letras_acertadas.append("_")

    # outra forma de fazer esse for
    # letras_acertadas = ["_" for letra in palavra_secreta]


    enforcou = False
    acertou = False
    erros = 0
    total_tentativas = 6

    while( not enforcou and not acertou):
        chute = input("Qual a letra? ")
        chute = chute.strip().upper()

        if (chute in palavra_secreta):
            index = 0

            for letra in palavra_secreta:
                if( chute.upper() == letra.upper() ):

                    letras_acertadas[index] = letra

                index += 1
                letras_faltando = str(letras_acertadas.count('_'))
        else:
            erros += 1 
            print("Você errou! Faltam {} tentativas".format(total_tentativas-erros))

        enforcou = erros == total_tentativas

        acertou = "_" not in letras_acertadas

        print(letras_acertadas)
        # print('Ainda faltam acertar {} letras'.format(letras_faltando))

    if(acertou):
        print('Você ganhou! Parabéns!')
    else:
        print('Você perdeu! Tente novamente')
    print("Fim do jogo")



if(__name__ == "__main__"):
    jogar()