total = 0
palavra = "python rocks!"
acabou = False
while (not acabou):
    acabou = ( total == len(palavra) )  
    total = total + 1
print(total - 1)