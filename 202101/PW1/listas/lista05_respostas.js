console.log('\n*************************** RESPOSTA QUESTAO 1 **************************************')

function fazAlgo(oque, x){
    return oque(x);
}

let dobra = n => n * 2;
let quadrado = n => n * n ;

for(let n of [2,3,4,5]){
    console.log( `${n}: ${fazAlgo(dobra, n)}, ${fazAlgo(quadrado, n)}` );    
}


console.log('\n*************************** RESPOSTA QUESTAO 2 **************************************')
let operacoes = [ dobra, quadrado ];
let metade = n => n/2;
let negativo = n => n*-1;
operacoes.push(metade,negativo);

for(let op of operacoes){
    console.log( op(8)  );
}

console.log('\n*************************** RESPOSTA QUESTAO 3 **************************************')


let fazEmTodos = function(func,x){
    let arr =[];
    for(let i of x){
        arr.push(func(i));
    }
    return arr;
}

let lista = [2,3,4,5];

console.log( fazEmTodos(dobra, lista) );
console.log( fazEmTodos(quadrado, lista) );


console.log('\n*************************** RESPOSTA QUESTAO 4 **************************************')

let geraFuncao = function(x){
    if(x)
        return () => "V1";
    else
        return () => "V2";
}

let func1 = geraFuncao(true);
let func2 = geraFuncao(false);

console.log(func1());
console.log(func2());

console.log(geraFuncao(true)());
console.log(geraFuncao(false)());


console.log('\n*************************** RESPOSTA QUESTAO 5 **************************************')

let palavras = ['Java', 'Javascript', 'CSS', 'C#'];


 palavras.forEach( x => console.log(`${x}: ${x.length} caracteres` ) )



console.log('\n*************************** RESPOSTA QUESTAO 6 **************************************')

let fazEmTodos2 = (func,lista) => lista.map( x => func(x)) ;


console.log(fazEmTodos2(dobra,lista));
console.log(fazEmTodos2(quadrado,lista));


console.log('\n*************************** RESPOSTA QUESTAO 7 **************************************')

let lista2 = [ 
    {nome: 'Bruna', idade: 28},
    {nome: 'Lucas', idade: 22},
    {nome: 'Martim', idade: 24},
    {nome: 'Júlia', idade: 31},
];

let listar = arr => arr.map( x => x.nome );

console.log( listar(lista2) );

console.log(lista2.map( x => x.nome ));


console.log('\n*************************** RESPOSTA QUESTAO 8 **************************************')

let idade = arr => arr.filter( x => x.idade > 25).map( y => y.nome );

console.log(idade(lista2));


console.log('\n*************************** RESPOSTA QUESTAO 9 **************************************')

console.log( lista2.sort( (x,y) => x.idade-y.idade ) );


console.log('\n*************************** RESPOSTA QUESTAO 10 **************************************')

function geraMultiplicador(x){
    return func => x * func;
}


let mult3 = geraMultiplicador(3);

let mult5 = geraMultiplicador(5);

console.log(mult3(10), mult5(5), geraMultiplicador(8)(10));

