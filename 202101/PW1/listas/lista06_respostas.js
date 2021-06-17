console.log('\n*************************** RESPOSTA QUESTAO 1 **************************************')

function Usuario(nome){
    this.nome = nome;
}

Usuario.prototype.obtemNome = function(){
    return this.nome;
}


let user = new Usuario('Fulano');
console.log(`Meu nome é ${user.obtemNome()}.`);


console.log('\n*************************** RESPOSTA QUESTAO 2 **************************************')

class Usuarioo{
    constructor(nome){
        this.nome = nome;
    }
    
    obtemNome(){
        return this.nome;
    }
}


let user2 = new Usuarioo('Fulano');
console.log(`Meu nome é ${user2.obtemNome()}.`);


console.log('\n*************************** RESPOSTA QUESTAO 3 **************************************')

class Ponto{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }

    distancia(p){
        let a = p.x;
        let b = p.y
        
        return Math.sqrt( ( (a-this.x) ** (a-this.x) ) + ( (b-this.y) ** (b-this.y) ) )
    }
}

let p1 = new Ponto(3, 4);
let p2 = new Ponto(5, 6);
console.log(p1.distancia(p2));

console.log('\n*************************** RESPOSTA QUESTAO 4 **************************************')

class Livro{
    constructor(nome,autor,nu_paginas){
        this.nome = nome;
        this.autor = autor;
        this.nu_paginas = nu_paginas;
    }

    obterDescricao(){
        return `"${this.nome}", autor: ${this.autor}, ${this.nu_paginas} páginas`
    }
}

class EBook extends Livro{
    constructor(nome,autor,nu_paginas,tamanho){
        super(nome,autor,nu_paginas);
        this.tamanho= tamanho;
    }

    obterTamanho(){
        return `${this.tamanho}.kb`;
    }
}

let dom = new Livro('Dom Casmurro', 'Machado de Assis', 256);
let hp = new EBook('Harry Potter e a Pedra Filosofal', 'J. K. Rowling', 309, 420);
console.log(dom.obterDescricao());
console.log(hp.obterDescricao());
console.log(hp.obterTamanho());

console.log('\n*************************** RESPOSTA QUESTAO 5 **************************************')

class TrianguloEq{
    constructor(lado){
        this.lado = lado;
    }

    perimetro(){
        return this.lado *3;
    }

    area(){
        return ( (this.lado*this.lado) * Math.sqrt(3) ) /4;
    }
}

class Quadrado{
    constructor(lado){
        this.lado = lado;
    }

    perimetro(){
        return 4*this.lado;
    }

    area(){
        return this.lado * this.lado;
    }
}

let t = new TrianguloEq(10);
console.log(t.perimetro(), t.area());

let q = new Quadrado(10);
console.log(q.perimetro(), q.area());
//08007741515

console.log('\n*************************** RESPOSTA QUESTAO 6 **************************************')
class Forma{
    constructor(lado){
        this.lado = lado
    }

    toString(){
        return `p=${this.perimetro()}, a=${this.area()}`
    }
}

class TrianguloEqq extends Forma{
    constructor(lado){
        super(lado);
    }

    perimetro(){
        return this.lado *3;
    }

    area(){
        return ( (this.lado*this.lado) * Math.sqrt(3) ) /4;
    }

 
}

class Quadradoo extends Forma{
    constructor(lado){
        super(lado);
    }

    perimetro(){
        return 4*this.lado;
    }

    area(){
        return this.lado * this.lado;
    }
}

let formas = [ new Quadradoo(5), new Quadradoo(10),
    new TrianguloEqq(5), new TrianguloEqq(10) ];
for(forma of formas){
console.log(`${forma.constructor.name}: ${forma.toString()}`);
}
