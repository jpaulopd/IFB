

#imprimir o resultado solicitado(S=SOMA ou M=MEDIA) com 1 ponto decimal para 30 posicoes

caracter = input().upper()
registros = 1
total = 30
soma = 0

if (caracter == 'S'):
    while(registros <= total):
        soma = soma + float(input())
        registros += 1
    print("{:.1f}".format(soma))
elif(caracter == 'M'):
    while(registros <= total):
        soma = soma + float(input())
        registros += 1
    print("{:.1f}".format(soma/total))
else:
    print("")