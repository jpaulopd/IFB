import spacy
nlp = spacy.load("pt_core_news_sm")
doc = nlp("Esta é uma frase")
print(doc)