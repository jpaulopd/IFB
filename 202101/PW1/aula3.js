/*
let usuario = {
    "nome completo": 'Alice Sousa Almeida',
    login: 'alice93',
    email: 'alice93@gmail.com',
    premium: true,
    pontos: 513
};

usuario['pontos']++;
usuario['email'] = 'alice_novo@gmail.com';
usuario['foto'] = 'alice.jpg';

//delete usuario.pontos

for(let prop in usuario){
    console.log(`O valor de ${prop} é ${usuario[prop]}`)
}

*/

/* 
let item = {
    nome: 'Computador',
    preco: 1500
}

function mudaPreco(obj){
    obj.preco = 2000;
}

console.log(item);
mudaPreco(item);
console.log(item);

*/

/*
let dino = {
    nome: 'Tyrannosaurus rex',
    periodo: 'Cretáceo',
    peso: 14000,
    info: function(){
        return `O ${this.nome} viveu no período ${this.periodo} e pesava ${this.peso} kg`
    }
}

console.log(dino.info())

*/

/*
let prot = {
    nome: 'novo usuário',
    pais: 'br',
    tipo: 'comum'
};

let user1 = Object.create(prot);
user1.nome='Cebolinha';
console.log(user1);

let user2 = Object.create(prot);
user2.nome = 'Donald Duck';
user2.pais = 'us'
console.log(user2)
*/

/*
let quadrado = {
    altura: 5,

    get largura(){
        return this.altura;
    },

    get area(){
        return this.altura ** 2;
    },

    set area(a){
        this.altura = Math.sqrt(a);
    }

};

quadrado.altura = 8;
console.log(quadrado.altura, quadrado.largura);
console.log(quadrado.area);

quadrado.area = 100;
console.log(quadrado.altura, quadrado.largura);
console.log(quadrado.area);

*/
/*
let familias = {
    Flinstons:{
        pais:'Fred',
        amigo:'Barney'
    },
    Jetsons:{
        pai:'George',
        mae:'Jane',
        filho:'Elroy'
    },
    Simpsons:{
        pai:'Homer',
        mae:'Marge',
        filho:'Bart'
    }
};

console.log(familias.Simpsons.pai)
*/