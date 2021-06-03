console.log('\n*************************** RESPOSTA QUESTAO 1 **************************************')
let cores = ['ciano', 'verde', 'amarelo'];
console.log(`No sistema de cores CYMK, a cor ${cores[1]} é formada pela adição das cores ${cores[2]} e ${cores[0]}.`);

console.log('\n*************************** RESPOSTA QUESTAO 2 **************************************')

for(let i =0; i<cores.length;i++){
    console.log(`- ${cores[i]}`);
}

for(let i in cores){
    console.log(`- ${cores[i]}`);
}

for(let i of cores){
    console.log(`- ${i}`);
}

console.log('\n*************************** RESPOSTA QUESTAO 3 **************************************')

cores.splice(1,0,'roxo','laranja')
cores.push('cinza')
for (let cor of cores){
    console.log('-', cor);
}

console.log('\n*************************** RESPOSTA QUESTAO 4 **************************************')

function calcula(array){
    let soma = 0;
    let media = 0;

    for(let i of array){
        soma = soma + i;
    }

    media = soma/array.length;

    return {'soma':soma,'media':media}

}

console.log(calcula( [4, 8, 20, 6] ) );

console.log('\n*************************** RESPOSTA QUESTAO 5 **************************************')

function calcular(...numeros){
    let soma = 0;
    let media = 0;

    for(let i of numeros){
        soma = soma + i;
    }

    media = soma/numeros.length;

    return {'soma':soma,'media':media}

}

console.log(calcular( 4, 8, 20, 6 ) );


console.log('\n*************************** RESPOSTA QUESTAO 6 **************************************')
let a = [ 4, 5, 10 ];
let b = [ 2, 3, 8 ];

function somaArrays(arr1,arr2){
    let arr= [];
    if(arr1.length === arr2.length){

        for(let j in arr1){
            arr.push( arr1[j] + arr2[j] );
        }

        return arr;
    }
    console.log('Os arrays devem ter o mesmo tamanho')
}

console.log(  somaArrays(a,b) );

console.log('\n*************************** RESPOSTA QUESTAO 7 **************************************')
/*
function ehPalindromo(str) {     
    for(var i = 0; i < str.length / 2; i++) {
        if (str[i] != str[str.length - i - 1]) {
            return false;
        }
            
    return true;
    }
        
} */

function ehPalindromo(str){
    let str_inversa = str.split("").reverse().join("");
    return str == str_inversa;
}
console.log(ehPalindromo("radar"));
console.log(ehPalindromo("reviver"));
console.log(ehPalindromo("osso"));
console.log(ehPalindromo("palindromo"));

console.log('\n*************************** RESPOSTA QUESTAO 8 **************************************')

function inverte(str){
    return str.split("").reverse().join("");
}

console.log( inverte("Abacaxi") );


console.log('\n*************************** RESPOSTA QUESTAO 9 **************************************')

let familias = [
    ['Fred','Barney'],
    ['George','Jane','Elroy'],
    ['Homer','Marge','Barney'],
]

for (let familia of familias){
    let linha = "";
    for( let membro of familia){
        linha = linha + membro + '\t' ;   
    }
    console.log(linha)
}

console.log('\n*************************** RESPOSTA QUESTAO 10 **************************************')
let usuarios = [
    {
        nome:'Rodrigo Melo Fernandes',
        email:'rodrigo1999@zzzmail.com',
        categorias: ['premium', 'admin', 'proprietario'],
    },
    {
        nome:'Letícia Goncalves Azevedo',
        email:'lga@dayrep.com',
        categorias: ['admin'],
    },
    {
        nome:'Pedro Almeida Oliveira',
        email:'poliv3@armyspy.com',
        categorias: ['premium', 'promocao'],
    }
];

for(let usuario of usuarios){
    for(let item in usuario){
        console.log(`${item}:${usuario[item]}`)
    }
    console.log('---')
}

console.log('\n*************************** RESPOSTA QUESTAO 11 **************************************')
let aa = [ 
            [4,5,6],
            [10,20,30] 
        ];
let bb = [ 
            [1,2,3],
            [5,8,20] 
        ];
/*
function somaMatrizes(arr1,arr2){
    let arr= [];
    if(arr1.length === arr2.length){

        for(let j in arr1){
            arr.push( arr1[j] + arr2[j] );
        }

        return arr;
    }
    console.log('Os arrays devem ter o mesmo tamanho')
}*/

function somaMatrizes(arr1,arr2){
    let arr =[];
    let arrElem = [];
    let arrSum = [];

    let len = arr1.length;
    
    for(let i=0; i<len; i++){

        arrElem=[];
        for(let j of arr1[i]){
            
            arrElem.push(j);
        }

        arrSum = [];
        for(let k in arr2[i]){

          arrSum.push(arrElem[k] + arr2[i][k]) ;
        }

        arr.push(arrSum);
        
    }

    console.log(arr)
}

console.log(  somaMatrizes(aa,bb) );
