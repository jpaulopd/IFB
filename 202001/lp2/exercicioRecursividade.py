ALUNO: JOAO PAULO PIRES DANTAS 
PERÍODO: VESPERTINO TSI

1. O que é um método recursivo?

 RESPOSTA: O método recursivo consiste em quebrar um problema em vários problemas menores e 
            utilizar uma função que chame a sim mesma para resolver cada um desses problemas 
            até que o problema maior seja resolvido de maneira trivial.

2. Qual a saída do seguinte programa? Desenhe um diagrama da pilha que mostre o estado do programa quando exibir o resultado.

def recurse(n, s):
  if n == 0:
    print(s)
  else:
    print(s,n)
    recurse(n-1, n+s)

recurse(3, 0)

RESPOSTA:
__main__
1) recurse -> n = 3 e s = 0
2) recurse -> n = 2 e s = 3
3) recurse -> n = 1 e s = 5
4) recurse -> n = 0 e s = 6

2.1. O que aconteceria se você chamasse esta função desta forma: recurse(-1, 0)?
RESPOSTA: Aconteria uma erro de recursividade infinita, 
            uma vez que a condição de saída da função nunca aconteceria (if n == 0)
            e no python seria apontado o erro "RecursionError: maximum recursion depth exceeded while calling a Python object -996 -495510"

2.2. Escreva uma docstring (Links para um site externo) (exemplo - saiba mais (Links para um site externo)) que explique tudo o que alguém precisaria saber para usar esta função (e mais nada).
RESPOSTA: Um DOCSTRING é uma forma de comentar e documentar um código na forma de bloco. Para utiliza-lo basta colocar o comentário entre """ e """
            def somar(x,y):
                """retorma a soma de dois inteiros
                    :param x int
                    :param y int
                    :return soma
                    saiba mais em https://www.python.org/dev/peps/pep-0257/#what-is-a-docstring
                """
 

3. A definição da função fatorial, denotada pelo símbolo !, pode ser definida como:

0! = 1
n! = n(n - 1)!

Esta definição diz que o fatorial de 0 é 1, e o fatorial de qualquer outro valor, n, é n multiplicado pelo fatorial de n-1.

Então 3! é 3 vezes 2!, que é 2 vezes 1!, que é 1 vez 0!. Juntando tudo, 3! é igual a 3 vezes 2 vezes 1 vezes 1, que é 6.

3.1. Escreva uma função recursiva que calcule o fatorial de um número inteiro n.
RESPOSTA: 
"""retorna fatorial :param n int: :return resultado fatorial:"""
def fatorial(n):
    if n == 0:
        return 0
    if n == 1:
        return 1
    if n > 1:
        return fatorial(n - 1) * n

3.2. Elabore também o diagrama da pilha para a sequência de chamadas de função para o caso 3!.
__main__
1) fatorial -> n = 3 e return nulo
2) fatorial -> n = 2 e return nulo
3) fatorial -> n = 1 e return 1 * 2 * 3


* Teste também a sua função inserindo valores negativos e não inteiros. O que acontece? Em caso de erro, procure tratar cada situação para evitar esses erros.

 

4. [Desafio] Depois do fatorial, o exemplo mais comum de uma função matemática definida recursivamente é fibonacci, que tem a seguinte definição:

fibonacci(0) = 0

fibonacci(1) = 1

fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2)

Traduza essa definição para Python, tente entender e explicar como é o seu funcionamento.

RESPOSTA:
def sequencia_de_fibonacci(n):
   if n <= 1:
       return n
   else:
       return(sequencia_de_fibonacci(n-1) + sequencia_de_fibonacci(n-2))

A sequência de Fibonacci demonstra que um número maior que 1 é sempre a soma dos seus 2 antecessores. 
Um fato interessante a respeito dessa sequência é divisão entre seus elementos que tendem a razão 1,618...
Essa razão aparece em diversos elementos da natureza, como na casca do caramujo, nos girassóis, etc.