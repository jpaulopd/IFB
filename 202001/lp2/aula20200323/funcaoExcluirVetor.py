def excluir_vetor(vetor, pos):
    # temp = []
    # for i in range(len(vetor)):
    #     if i != pos:
    #         temp.append(vetor[i])
    # vetor = temp
    vetor.pop(pos)
    return len(vetor)

v = [5,4,3,2,1]
print(v)
pos = 2
m = excluir_vetor(v,pos)
print(m)
print(v)