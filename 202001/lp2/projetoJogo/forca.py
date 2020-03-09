def jogar_forca():
    print("*********************************")
    print("Bem vindo ao jogo de forca!")
    print("*********************************")

    palavra_secreta = "banana"
    enforcou = False
    acertou = False

    #enquanto nao enforcou (false) e nao acertou (false)
    while(not enforcou and not acertou):
        
        chute = input("Qual a letra? ")
        #palavra_secretea.find(chute)

        index = 0
        for letra in palavra_secreta:
            if(chute == letra):
                print("Encontrei a letra {} na posicao {}".format(letra,index))
            index += 1
        print("jogando...")

    print("fim do jogo")

if (__name__ == "__main__"):
    jogar_forca()