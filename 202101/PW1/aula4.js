/*
let a = [10,20,30];
let b= ['texto','coisa'];
let c= ['texto',131321,true];

c[2] = 'outra coisa';
console.log(a);
console.log(b);
console.log(c.length);
console.log(c[2]);
*/

/*
let a = [10,20,30]
a.descricao = 'sequencia de numeros';
a['outra'] = 'Outro texto';
a[3]=500;
a[5]=1234;

console.log(a.descricao);
console.log(a.outra);
console.log(a.length);
console.log(a);
*/
/*
a = [10,20,30];
a.push('novo elemento');
a.push(123);

console.log(a);
console.log(a.length);
*/

/*
let frutas = ['Banana','Laranja','Maçã','Manga'];
console.log(frutas);
frutas.splice(2,0,'Limão');
console.log(frutas);
frutas.splice(1,2);
console.log(frutas);
frutas.splice(-1, 1,'Morango','Kiwi')

console.log(frutas);
*/

/*
let frutas = ['Banana','Laranja','Maçã','Manga'];

let[a,b,c,d] = frutas;

console.log(a,b,c,d);
*/

/*
let frutas = ['Banana','Laranja','Maçã','Manga'];
for(let i=0; i<frutas.length;i++){
    console.log(frutas[i]);

}
*/

/*
let frutas = ['Banana','Laranja','Maçã','Manga'];
for(let i in frutas){
    console.log(i, frutas[i]);

}
*/

/*
let frutas = ['Banana','Laranja','Maçã','Manga'];
for(let f of frutas){
    console.log(f);
}
*/

/*
function lista(...args){
    for(let i in args){
        console.log(i, args[i]);
    }
}

lista('batata',12345,true,'alooooou')

*/

/*
let s = 'IFB';
let x = s.split('');

let s2='Instituto Federal de Brasília';
let y=s2.split('i');

for (let i of y){
    console.log(i);
}
*/

/*
let familia = [
    ['Fred','Barney'],
    ['George','Jane','Elroy'],
    ['Homer','Marge','Barney'],
]

console.log(familia);
*/
/*
let usuarios = [
    { 
        nome: 'Rodrigo Melo Fernandes', 
        email: 'rodrigo1999@zzzmail.com', 
        categorias: ['premium', 'admin', 'proprietario'], 
    },
    { 
        nome: 'Letícia Goncalves Azevedo', 
        email: 'lga@dayrep.com', 
        categorias: ['admin'], 
    },
    { 
        nome: 'Pedro Almeida Oliveira', 
        email: 'poliv3@armyspy.com', 
        categorias: ['premium', 'promocao'], 
    }
];

console.log(usuarios[0].categorias[2]);
*/