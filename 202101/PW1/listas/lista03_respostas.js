
//QUESTAO 1
console.log('\n*************************** RESPOSTA QUESTAO 1 **************************************')
let livro = {
    titulo:'Alice no País das Maravilhas',
    autor:'Lewis Carrol',
    num_paginas:176
};

console.log(livro);

console.log('\n*************************** RESPOSTA QUESTAO 2 **************************************')

for(prop in livro){
    console.log(`O objeto "livro" possui a propriedade ${prop}`);
}

console.log('\n*************************** RESPOSTA QUESTAO 3 **************************************')

for(prop in livro){
    console.log(`O objeto "livro" possui a propriedade "${prop}" cujo valor é "${livro[prop]}"`);
}

console.log('\n*************************** RESPOSTA QUESTAO 4 **************************************')


livro.titulo = 'Dom Casmurro';
livro.autor = 'Machado de Assis';
livro.num_paginas = 256

function obterDescricao(obj){
    return `${obj.titulo}, autor: ${obj.autor}, ${obj.num_paginas} páginas`
}

console.log(obterDescricao(livro));

console.log('\n*************************** RESPOSTA QUESTAO 5 **************************************')


function criaLivro(tit,aut,num){
    return livro = {
        titulo: tit,
        autor:aut,
        num_paginas: num

    }
}

livroDoJp = criaLivro('Alou Brasil','JP',150);

console.log( livroDoJp) 

livroTeste = criaLivro( livroDoJp )

console.log( livroTeste )

console.log('\n*************************** RESPOSTA QUESTAO 6 **************************************')
let contaX = {
    nome: 'José Fontes',
    saldo: 1000
};

let contaY = {
    nome: 'Felipe Silva',
    saldo: 3000
}

function deposita(conta, valor){
    conta.saldo = conta.saldo + valor;
    console.log("Deposito realizado! R$", valor)
    console.log("O saldo atual da conta é R$", conta.saldo,'\n')
}


function retira(conta, valor){
    if ( conta.saldo > 0 & (  conta.saldo - valor >= 0) ){
        conta.saldo = conta.saldo - valor;
        console.log("Saque realizado! R$", valor);
        console.log("O saldo atual da conta é R$", conta.saldo,'\n');
    }else{
        console.log("Saldo insuficiente");
    }

}

function transfere(conta1, conta2, valor){
    if( conta1.saldo > 0 & (  conta1.saldo - valor >= 0)  ){
        conta1.saldo = conta1.saldo - valor;
        conta2.saldo = conta2.saldo + valor;
        console.log("Transferência realizada! R$", valor);
        console.log("O saldo atual da conta é R$", conta2.saldo,'\n');
    }else{
        console.log("Saldo insuficiente");
    }
}

deposita(contaX,2000);
retira(contaY,1500);
transfere(contaX,contaY,1000)

