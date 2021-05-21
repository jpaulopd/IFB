/*1. Crie duas variáveis, chamadas ifb e campus, com os valores 'Instituto Federal de Brasília' e 'Campus Brasília', respectivamente.

Crie uma terceira variável que concatene as duas separando por vírgula e escreva o resultado na tela. Depois , faça a mesma coisa utilizando interpolação de strings.

Saída esperada:

Instituto Federal de Brasília, Campus Brasília
Instituto Federal de Brasília, Campus Brasília
*/
console.log('\n*************************** RESPOSTA QUESTAO 1 **************************************')
let ifb = 'Instituto Federal de Brasília'
let campus = 'Campus Brasília'
let concat = ifb + ', ' + campus
console.log(concat); 
console.log(`${ifb}, ${campus}`);


/*
2. Dado o seguinte código:

let a = 5;
let b = 6;
let c = '6';
let d = 'abc';

Crie expressões com operadores utilizando as variáveis acima de modo a chegar aos seguintes resultados:

11
56
5abc
*/
console.log('\n*************************** RESPOSTA QUESTAO 2 **************************************')
let a = 5;
let b = 6;
let c = '6';
let d = 'abc';
console.log(a+b)
console.log(`${a}`+`${b}`)
console.log(a+d)

/*3. Escreva um script que calcule o custo total de uma refeição em uma lanchonete: dois hambúrgueres com preço de R$ 9,95 cada, mais um milk-shake que custa R$ 8,00 e um refrigerante por R$ 4,50. Calcule o preço total após a adição de uma taxa de 10%.
*/

console.log('\n*************************** RESPOSTA QUESTAO 3 **************************************')
let hamburguer = 9.95;
let qtd_hamburguer = 2;
let milk_shake = 8.00;
let qtd_milk_shake = 1;
let refri = 4.50;
let qtd_refri = 1;
let taxa = 1.10;

let custo_refeicao = (hamburguer * qtd_hamburguer + milk_shake * qtd_milk_shake + refri * qtd_refri) * taxa


console.log('O custo do lanche foi de R$', custo_refeicao)

/*4. Escreva um script que, a partir de uma variável que contém uma dada temperatura na escala Fahrenheit, exiba a equivalente em Celsius.*/

console.log('\n*************************** RESPOSTA QUESTAO 4 **************************************')
let temperatura_fah = 180;;
let temperatura_cel = 0;

function conversor(temp){
    return temperatura_cel = (5/9)*(temp-32)
}

console.log('A temperatura em Fahrenheit de', temperatura_fah, 'será em Celsius de', conversor(temperatura_fah))
        
console.log('\n*************************** RESPOSTA QUESTAO 5 **************************************')
/*5. Modifique a questão anterior para ler a temperatura em Fahrenheit a partir de um parâmetro da linha de comando.*/

let temperatura_fah2 = parseInt(process.argv[2]);
let temperatura_cel2 = 0;

function conversor2(temp){
    return temperatura_cel2 = (5/9)*(temp-32)
}


console.log('A temperatura em Fahrenheit de', temperatura_fah2, 'será em Celsius de', conversor2(temperatura_fah2))

console.log('\n*************************** RESPOSTA QUESTAO 6 **************************************')
/*6. Escreva um script que leia 3 valores como parâmetros da linha de comando e escreva na tela o maior deles.*/


let val1= parseInt(process.argv[2]);
let val2= parseInt(process.argv[3]);
let val3= parseInt(process.argv[4]);
let temp;

console.log('num1=',val1,' num2=',val2,' num3=',val3)

if (val1>val2){
    temp = val2;
    val2 = val1;
    val1 = temp;
}
if (val2>val3){
    temp = val3;
    val3 = val2;
    val2 = temp;
}

if(val1 >val2){
    temp = val2;
    val2 = val1;
    val1 = temp
}

console.log('num1=',val1,' num2=',val2,' num3=',val3)


console.log('\n*************************** RESPOSTA QUESTAO 7 **************************************')
/*
7. Dado o seguinte código:

let x = 3;

let y;
if(x == 3)
    y = 'três';
else
    y = 'não três';

console.log(y);

Substitua todas as linhas (menos a primeira e a última) por uma única instrução contendo um operador ternário, mantendo a mesma lógica do algoritmo.
*/

let x=3;

y = x == 3 ? 'três' : 'não três'
console.log(y)

console.log('\n*************************** RESPOSTA QUESTAO 8 **************************************')
/*8. Escreva um script que calcule e exiba na tela os números de 1 a 20, ao lado de seus respectivos quadrados e cubos.*/

for(let i = 1; i <= 20; i++){
    console.log(i,' quadrado', i*i,' cubo', i*i*i)

}

console.log('\n*************************** RESPOSTA QUESTAO 9 **************************************')
/*9. Escreva um script que gere uma tabela de temperaturas, em que a primeira coluna mostre temperaturas em Fahrenheit, e a segunda, as equivalentes em Celsius. 
Devem ser exibidas todas as temperaturas Fahrenheit entre -50F e 50F, com incrementos de 5F.
*/
console.log("/------------------/")
console.log("/Fahrenheit == Celsius/")
for (let i = -50; i<=50;i+=5){
    console.log('/',i,' == ',conversor2(i).toFixed(2),'/')
}
console.log("/------------------/")

console.log('\n*************************** RESPOSTA QUESTAO 10 **************************************')
/*
10. Escreva um script que gere o seguinte padrão na tela, escrevendo apenas um caractere '*' por instrução e utilizando dois loops for, um dentro do outro:

* 
* * 
* * * 
* * * * 
* * * * *  

(Use process.stdout.write(...) ao invés de console.log(...), para evitar a quebra de linha após cada caractere).
*/

//metodo 1
for(let i=1; i<=5; i++){
    console.log("* ".repeat(i));
}

//metodo 2
process.stdout.write(' ')
for (var i = 1; i <= 5; i++) {
    process.stdout.write('* ')
    for (var j = 2; j <= i; j++) {
    process.stdout.write('* ')
    }
    process.stdout.write('\n ')
}