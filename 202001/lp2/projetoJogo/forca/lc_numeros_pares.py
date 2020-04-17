inteiros = [1,3,4,5,7,8,9]
# pares = []
# for numero in inteiros:
#     if numero % 2 == 0:
#         pares.append(numero)

pares = [pares for pares in inteiros if pares % 2 == 0]
print(pares)