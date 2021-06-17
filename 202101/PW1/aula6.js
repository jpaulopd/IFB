/*
let novoobjeto = {
    nome: 'nome',
    numero: 123
}

console.log(novoobjeto);
console.log(novoobjeto.nome);

novoobjeto.nome = 'lalalal';

console.log(novoobjeto);
*/

/*
function criaCirculo(c,r){
    let tmp={
        cor:c,
        raio:r,

        mudacor: function(c){
            console.log('mudando de cor...');
            this.cor = c;
        },

        toString: function(){
            return `Círculo ${this.cor} `
                    + `de raio ${this.raio}`;
        }
    };
    return tmp;
}

let circulo1 = criaCirculo('azul', 10);

console.log( circulo1.toString() );

*/

/*
function Circulo(c, r) {
    this.cor = c;
    this.raio = r;
    this.mudaCor = function(c) {
        console.log("Mudando de cor...");
        this.cor = c;
    };
    this.toString = function() {
        return `Círculo ${this.cor} `
        + `de raio ${this.raio}`;
    }
}

let circ1 = new Circulo('azul', 10);
let circ2 = new Circulo('verde', 20);

console.log(circ1.toString());
console.log(circ2.toString());
*/

/*
//prototipo = usado para compartilhar funções em objetos diferentes 
//              e assim reduzir espaço em memoria.
//            O prototype sabe diferenciar os objetos por conta do NEW.

function Circulo(c, r) {
    this.cor = c;
    this.raio = r;
}

Circulo.prototype.mudaCor = function(c) {
    console.log("Mudando de cor...");
    this.cor = c;
};

Circulo.prototype.toString = function() {
    return `Círculo ${this.cor} `
    + `de raio ${this.raio}`;
}

let circ1 = new Circulo('azul', 10);
let circ2 = new Circulo('verde', 20);

console.log(circ1);
console.log(circ2);

circ1.mudaCor('vermelho');
console.log(circ1);
*/

/*
class Circulo{
    constructor(c,r){
        this.cor = c;
        this.raio = r;
    }

    mudaCor(c){
        console.log("Mudando de cor...");
        this.cor = c;
    }

    toString() {
        return `Círculo ${this.cor} `
        + `de raio ${this.raio}`;
    }
}

let circ1 = new Circulo('azul', 10);
let circ2 = new Circulo('verde', 20);

console.log(circ1);
console.log(circ2);

circ1.mudaCor('vermelho');
console.log(circ1);
*/

/*
//herança
class Ave{
    voar(){
        console.log("voando...");
    }

    vocalizar(){
        console.log("vocalizando...");
    }
}

class Pato extends Ave{
    vocalizar(){
        console.log('Quack!');
    }

    nadar(){
        console.log('Pato nadando');
    }
}

class Arara extends Ave{
    vocalizar(){
        console.log('Arara!');
    }
}


let pato = new Pato();
pato.voar();
pato.vocalizar();
pato.nadar();

let arara = new Arara();
arara.vocalizar();
arara.voar();
arara.nadar();

*/

class Usuario{
    constructor(){
        console.log('construindo um novo usuario...');
    }
}

class UsuarioPremium extends Usuario{
    constructor(){
        super();
        console.log('construindo um usuário premium...');
    }

    toString(){
        return 'Eu sou premium!';
    }
}

let usuario = new Usuario();
let usuario1 = new UsuarioPremium();
console.log( usuario1.toString() );


