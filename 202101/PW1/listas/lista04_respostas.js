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
