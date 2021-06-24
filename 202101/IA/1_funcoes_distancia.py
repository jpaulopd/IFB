#Aluno: Joao Paulo Pires Dantas

#*****************************************************************************************************************************************************

def hamming(s1,s2):
    result=0
    if len(s1)!=len(s2):
        print("palavras não são iguais")
    else:
        for x,(i,j) in enumerate(zip(s1,s2)):
            if i!=j:
                #print(f'caracteres diferentes{i,j} em {x}')
                result+=1
    return result

s1="principais"
s2="monumental"
print("Distancia de Hamming entre a palavra '",s1,"' e a palavra '",s2,"' é de",hamming(s1,s2))

#*****************************************************************************************************************************************************

import math
from decimal import Decimal

def euclidian(p,q):
    return math.sqrt( sum( [ (a - b) ** 2 for a, b in zip( p, q ) ] ) )

x = (1.952, 1.213, 330000)
y = (1.720, 1.940, 23230)
z = (2.073, 1.803, 92000)
print("Distancia Euclidiana entre o ponto 1 e o ponto 2: ", euclidian(x,y) )

#*****************************************************************************************************************************************************

def manhattan(a, b):
    return sum(abs(val1-val2) for val1, val2 in zip(a,b))

print("Distancia de Manhattan é de", manhattan(x, y) )

#*****************************************************************************************************************************************************

def minkowski(a, b, p):
	return sum(abs(e1-e2)**p for e1, e2 in zip(a,b))**(1/p)

print("Distancia de Minkowski é de", minkowski(x, y, 1) )
