#preencher vetor de 10 posicoes com numeros inteiros
#contar a quantidade de valores diferente no vetor
#imprime saida e em arquivo

numeros = []

for i in range(0,10):
    numeros.append( int( input() ) )

totalizador = 0
numeros_diferente = []

for i in range(0,10):
    if( numeros[i] not in numeros_diferente ):
        totalizador += 1
        numeros_diferente.append(numeros[i])
    else:
        continue

f = open('texto.txt', 'w+')

for i in numeros:
    texto = str(i)
    f.write(texto)
    f.write("\t")
f.write("\n")
f.write(str(totalizador))
f.flush()
f.close()

print(numeros)
print("{} números diferentes".format(totalizador))