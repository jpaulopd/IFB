# dna = input().upper()

# cadeia_comp = ''

# seq_dna = 'ATGC'
# seq_comp = 'TACG'

# for letra in dna:
#     idx = seq_dna.find(letra)
#     cadeia_comp += seq_comp[idx]
    
# print(cadeia_comp)



dna = input().upper()
cadeia_comp =''
dic_dna_comp = {'A':'T','T':'A','G':'C','C':'G'}

for letra in dna:
        cadeia_comp += dic_dna_comp[letra]

print(cadeia_comp)