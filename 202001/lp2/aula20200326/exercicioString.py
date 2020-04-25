frase = "Quem parte e reparte fica com a maior parte"
print(frase)

palavra_antiga = "maior parte"
palavra_novaa = "maior parcela"
#frase_nova = frase.replace(palavra_antiga , palavra_novaa)

#palavra_nova = "parcela"

frase_nova = frase[:38] + palavra_nova


def alterar_frase(antigo, novo):
    idx = frase.rfind(antigo)
    frase_nova = frase.replace(antigo,novo,idx)
    return frase_nova

print(alterar_frase("parte", "parcela"))

print(frase.any("parte"))