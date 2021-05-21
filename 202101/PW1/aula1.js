/*
let nome = "Instituto Federal de Brasilia";
let x = 500;
let zzz;

console.log("Olá, mundo!", nome, x);
*/

/*
let a = '20';
let b = 5;

let x = 'texto';
let y = 'outro texto'

console.log(a * b)
console.log(a + b)
console.log(x + y)
*/

/*
let n = 1;
let txt1 = 'teste' + n +1;
let txt2 = 'teste' + (n+1);
console.log(txt1);
console.log(txt2);

*/

/*
let a = 15;
let b = 20;

console.log(`Esse é um numero ${a} e essa é produto ${a*b}`)
*/

/*
    parametro 2 em diante sao os oferecidos na linha de comando pelo usuario
    parametro 0 é o caminho do node
    parametro 1 é o caminho do codigo
    parametros são passados como string para a variável que as recebe
*/
/*
let p1 = process.argv[2];
let p2 = process.argv[3];

console.log('O primeiro parâmetro foi:',p1);
console.log('O primeiro parâmetro foi:',p2);
*/

/*
let x = 3;

if (x == 3){
    console.log('x é igual a 3 ');
}
else{
    console.log('x é diferente de 3');
}
*/

/* if ternario eh usado sempre que uma variavel assume determinado valor se
outra variavel for true ou false
*/

/*
let temDesconto = false;

let preco;

preco = temDesconto? 15: 20;
console.log(preco);
*/

/*
let acao = 'embalar';

switch(acao){
    case 'preparar':
        console.log('Preparar!');
        break;
    case 'embalar':
        console.log('Embalar!');
        break;
    case 'enviar':
        console.log('Enviar!');
        break;
    default:
        console.log('Erro!');
}
*/

/*
let a = '100';
let b = '30';

let maior = parseInt(a) > parseInt(b);

if (maior){
    console.log(a,'é maior que',b)
}
else {
    console.log(a,'é menor que',b)
}
*/

/*
let i = 1;
while(i<5){
    console.log(i);
    i++;
}

for(let i = 1; i<5; i++){
    console.log(i);
}
*/
/* x nao pode ser
        false
        '' ou ""
        0
        NaN
        undefined
        null
*/

/*
let x = null;
if (x){
    console.log('Entrei!');
}
*/