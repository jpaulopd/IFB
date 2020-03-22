
# maior = int(input())
# pos = 0 

# for i in range(2, 11):
#     n = int(input())
#     if(n > maior):
#         maior = n
#         pos = i

# print(maior)
# print(pos)

lista = []

for i in range(10):
    n = int(input())
    lista.append(n)

maior_valor = max(lista)
indice = lista.index(maior_valor) + 1

print(maior_valor)
print(indice)
print(lista)