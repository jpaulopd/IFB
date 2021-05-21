/*1. Escreva uma função simples que apenas escreve uma frase na tela. 
Coloque a chamada dessa função dentro de uma estrutura de loop que execute 3 vezes. */
console.log('\n*************************** RESPOSTA QUESTAO 1 **************************************')

function escrever(){
    let trecho = 'Tá massa aprender JS assim! ';
    console.log(trecho);
}

for(let i = 0; i<5; i++){
    escrever()    ;
}

/*
2. Modifique a função da questão anterior para que a função aceite um argumento e 
    concatene o valor desse argumento à frase escrita na saída. 
    Na chamada, passe o valor da variável de loop como argumento.

Exemplo de saída:

Teste da função 0
Teste da função 1
Teste da função 2
*/
console.log('\n*************************** RESPOSTA QUESTAO 2 **************************************')

function escrever2(texto){
    let trecho = 'Tá massa aprender JS assim! ';
    console.log(trecho, texto);
}

for(let i = 1; i<=5; i++){
    escrever2(i)    ;
}

/*3. Escreva a função media3 que recebe três argumentos numéricos e retorne a média aritmética entre eles. 
    Faça uma chamada à função, para testá-la. */

console.log('\n*************************** RESPOSTA QUESTAO 3 **************************************')

function media3(num1,num2,num3){
    return ( (num1+num2+num3)/3 ).toFixed(2);
}

console.log(media3(2,4,8))

/*4. Modifique a resposta anterior para que a chamada de função receba parâmetros passados na linha de comando.
*/
console.log('\n*************************** RESPOSTA QUESTAO 4 **************************************')

function media3(num1,num2,num3){
    return ( (num1+num2+num3)/3 ).toFixed(2);
}

let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let num3 = parseInt(process.argv[4]);

console.log(media3(num1, num2, num3));

/*5. Escreva uma função que receba uma temperatura em Fahrenheit e retorne o valor em Celsius. 
Modifique a questão 9 da lista anterior para chamar essa função dentro do loop ao construir a tabela.
 */
console.log('\n*************************** RESPOSTA QUESTAO 5 **************************************')


function conversor(temp){
    return (5/9)*(temp-32);
}

console.log("Fahrenheit == Celsius")
for (let i = -50; i<=50;i+=5){
    console.log(i,' == ',conversor(i).toFixed(2));
}

/*
6. Escreva uma função para calcular a área de um círculo, dado o raio. 
Se o raio for negativo, deve ser retornado o valor 0. Dica: Use Math.PI para obter o valor de π.
*/
console.log('\n*************************** RESPOSTA QUESTAO 6 **************************************')

function calcularAreaCirculo(raio) {
    if( raio < 0 ){
        return 0;
    }else{
        return ( Math.PI * raio * raio ).toFixed(2);
    }
    
}
console.log(calcularAreaCirculo(-1));

/*
7. Escreva uma função chamada ehPrimo que receba um número e retorne se esse número é primo ou não. 
    Utilize a chamada dessa função em um loop para listar todos os números primos entre 2 e 30.

*/
console.log('\n*************************** RESPOSTA QUESTAO 7 **************************************')
function ehPrimo(primo){
    if(primo%2==0){
        return 'primo';
    }else{
        return "não";
    }
}

for(let i = 2; i<=30;i++){
    console.log(i,ehPrimo(i))
}

/*8. Escreva uma função chamada saudacao com um argumento obrigatório, nome, e um opcional, frase. 
    A função deve escrever uma saudação na tela, contendo o nome e a frase especificadas. 
    Se a frase não for especificada, o valor padrão é "Olá".
*/
console.log('\n*************************** RESPOSTA QUESTAO 8 **************************************')
function saudacao(nome, frase='Olá'){
    return nome+' '+frase;
}

console.log( saudacao('João Paulo', 'Bem vindo') );

/*9. Escreva uma função chamada potencia, com um parâmetro obrigatório, nn, e outro opcional, xx. 
Caso xx não seja especificado na chamada, a função deve retornar n^2n2; caso seja, deve retornar n^xnx.
*/
console.log('\n*************************** RESPOSTA QUESTAO 9 **************************************')

function potencia(nn, xx=2){
    let produto = 1;
    if ( xx > 2){
        for(let i = 1; i <= xx; i++){
            produto = nn * produto;
        }
        return produto;
    }
    return nn * nn;
}

console.log(potencia(2,10))

/*
10. Escreva a função recursiva numprint(n), que, ao ser chamada, escreva todos os números entre n e 50. 
A função não deve conter nenhuma estrutura de loop.
*/
console.log('\n*************************** RESPOSTA QUESTAO 10 **************************************')

function numprint(n){
    if(n==50){
        return console.log(n)
    }
    console.log(n)
    numprint(n+1)
}

numprint(0)

/*
11. Escreva a função calc(op,a,b) em que o primeiro parâmetro define a operação a ser feita 
    (0 → adição, 1 → subtração, 2 → multiplicação, 3 → divisão) e a e b são os operandos. 
    Na implementação, defina uma função interna sem parâmetros para realizar cada operação (adiciona(), etc.).

*/
console.log('\n*************************** RESPOSTA QUESTAO 11 **************************************')

function calc(op,a,b){
    
    switch(op){
        case 1:
            function soma(){
                return a+b;
            }
            console.log( soma());
           
            break;
        case 2:
            function diferenca(){
                return a-b;
            }
            console.log( diferenca() );
            break;
        case 3:
            function produto(){
                return a*b;
            }
            console.log( produto() );
            break;
        case 4:
            function fracao(){
                return a/b;
            }
            console.log( fracao() );
            break;
        default:
            console.log("informe uma operação válida: 0 → adição, 1 → subtração, 2 → multiplicação, 3 → divisão");
            break;
    }
}

calc(5,2,3)