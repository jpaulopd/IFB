
/*
function ola(){
    return 'olá mundo!';
}

let x = ola;

let z = x();

console.log(z);*/

/*
let x = function ola(){
    return 'olá mundo!';
}

console.log(ola());

*/

/*
let x = function(){
    return 'olá mundo!';
}

console.log(x());
*/

/*
let x = function(a,b){
    return a +b;
}

let z = x;
console.log(x(5,6));

*/

/*
let soma = function(a,b){
    return a +b;
}

function operacao(op,x,y){
    return op(x,y);
}

let v1 = operacao(soma,10,5);
let v2 = operacao(
    function(a,b){
        return a*b;
    },10,5
);
console.log(v1);
console.log(v2);

*/

/*
let f1 = function(a,b) {return a*b};
let f2 = (a,b) => {return a*b};
let f3 = (a,b) => a*b;

console.log( f1(3,4), f2(3,4), f3(3,4) );

let f4 = function(a) { return a*a };
let f5 = a =>  a*a;

console.log( f4(5), f5(5) );
*/

/*
let escreve = function(a){
    console.log('Você escreveu',a);
}

escreve('lalalalal')

let escrever = a => { console.log( "Você escreveu",a ); }

escrever('lalalalalalalal')

let escreve2 = () => { console.log("Voce escreveu alguma coisa") }

escreve2();

*/

/*

let a = () => { console.log('A!'); }

let b = [
    () => { console.log('B zero'); },
    () => { console.log('B um!'); }
];

a();
b[0]();
b[1]();


let c = () => {
    return () => { console.log('C'); };
}

c()();

let d = {
    primeiro: () => { console.log('D1') },
    segundo: () => { console.log('D2') }
};

d.primeiro();
d.segundo();

*/

/*
let numeros = [ 2, 18, 15, 5, 20 ];
let soma = 0;

for(let x of numeros){
    soma += x;
}
console.log(soma);

soma = 0;

numeros.forEach( x => { soma += x } )

console.log( soma );

function ehPar(x){
    return x%2 == 0;
}

let pares = numeros.filter( ehPar );

let pares2 = numeros.filter( x => x % 2 == 0 );


console.log( numeros );
console.log( pares );

console.log( pares2 );

*/

/*
//A PRINCIPAL DIFERENÇA ENTRE O FILTER E O MAP É O QUE FILTER RETORNA APENAS BOOLEAN E O MAP PODE RETORNAR QUALQUER COISA
let numeros = [ 2, 18, 15, 5, 20 ];

let resultado = numeros.map( x => x * 2 );

console.log( numeros );

console.log( resultado );
*/

/*
//metodo REDUCE recebe dois parametros, primeiro é a variável do acumulador e o segundo a posicao do array.
// o retorno tem primeiro a operação a ser realizada e o segundo parametro o valor inicial do acumulador
let numeros = [ 2, 18, 15, 5, 20 ];
let soma = numeros.reduce( (acumulador, posicaoArray) => acumulador + posicaoArray, 0 );

console.log( numeros );
console.log( soma );
*/

/*
//sort funciona para strings
let numeros = [ 2, 18, 15, 5, 20 ];
console.log(numeros);

numeros.sort( (a,b) => a-b ); //ordem numerica
console.log(numeros);
*/

/*
function fazFuncao(texto){
    return (quem) => texto + ' ' + quem;
}
let func1 = fazFuncao('Olá');
let func2 = fazFuncao('Hello');
console.log(func1('José'));
console.log(func1('Maria'));
console.log(func2('José'));
console.log(func2('Maria'));

*/