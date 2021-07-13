//tabuleiros de jogo
const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
];

const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
];

const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
];

let timer;
let timeRemaining;
let lives;
let selectedNum;
let selectedTile;
let disableSelect;

//funcao principal do SUDOKU, carrega o 
window.onload = function(){

    id("start-btn").addEventListener("click", startGame); //adiciona o evento CLICK a classe start-btn que chama a função startGame

    for( let i = 0; i < id("number-container").children.length; i++ ){ //itera sobre a lista de elementos filhos de number-container

        id("number-container").children[i].addEventListener("click", function() { //adiciona a espera do CLICK para todos os filhos do number-container

            if(!disableSelect){ //se algum dos Numeros disponiveis estiver selecionado irá ser desmarcado como SELECIONADO
                
                if ( this.classList.contains("selected") ){
                    
                    this.classList.remove("selected");

                    selectedNum = null;
                    
                } else { //remove a classe selected de toda a lista de NUMEROS para depois adicionar apenas so NUMERO selecionado

                    for (let i = 0; i < 9; i++){

                        id("number-container").children[i].classList.remove("selected");
                    }

                    this.classList.add("selected"); //captura o numero selecionado e popula a variavel selectedNum que será utilizada para realizar a tentativa do movimento
                    selectedNum = this;
                    updateMove();
                }
            }
        });
    }
}

//funcao que seta as condições do jogo como dificuldade, tempo e tema
//responsavel chamar a função que gera o tabuleiro
//responsavel por chamar o controle da execucao do tempo
//habilita a lista de numeros
function startGame(){
    let board;
    if ( id( "diff-1" ).checked ) {
        board = easy[0];
    } else if ( id( "diff-2" ).checked ) {
        board = medium[0];
    } else {
        board = hard[0];
    }

    lives = 3;
    disableSelect = false;

    id("lives").textContent = "Lives Remaining: 3";

    generateBoard(board);

    startTimer();

    if( id("theme-1").checked ){
        qs("body").classList.remove("dark");
    } else {
        qs("body").classList.add("dark");
    }

    id("number-container").classList.remove("hidden");
}


//funcao responsavel por popular os quadrados do tabuleiro conforme o tipo de dificuldade
//chama a funcao clearPrevious() para limpar o CSS dos P e lista de Numeros
function generateBoard(board){

    clearPrevious();   
    
    let idCount = 0;

    for( let i = 0; i < 81; i++ ){

        let tile = document.createElement("p");
        
        if( board.charAt(i) != "-" ){ //popula o tabuleiro conforme a dificuldade selecionada

            tile.textContent = board.charAt(i);
        } else { //

            tile.addEventListener("click", function(){ //cada paragrafo recebe um de evento de CLICK que fica sendo executado mesmo apos o tabuleiro já ter sido populado

                if ( !disableSelect ){ //se um novo P for selecionado todos os anteriores são removidos e apenas o selecionado é atribuido a classe SELECTED

                    if( tile.classList.contains("selected") ){

                        tile.classList.remove("selected");
                        selectedTile = null;
                    } else {

                        for( let i = 0; i< 81; i++ ){

                            qsa(".tile")[i].classList.remove("selected");
                        }

                        tile.classList.add("selected");
                        selectedTile = tile;
                        updateMove();
                    }
                }
            });
        }

        tile.id = idCount;

        idCount ++;

        tile.classList.add("tile"); //adiciona a classe TILE para cada elemento P
        
        if( (tile.id > 17 && tile.id < 27) || (tile.id > 44 && tile.id < 54) ){ //CRIA a divisão do SUDOKU em quadrantes menores
            tile.classList.add("bottomBorder");
        }

        if( ( tile.id + 1 ) % 9 == 3 || ( tile.id + 1 ) % 9 == 6 ){
            tile.classList.add("rightBorder");
        }

        id("board").appendChild(tile); //Renderiza o tabuleiro
    }
}

//remove todos os CSS dos elementos P do tabuleiro e da lista de numeros
function clearPrevious(){

    let tiles = qsa(".tile");

    for( let i = 0; i < tiles.length; i++ ){
        tiles[i].remove();
    }

    if(timer) clearTimeout(timer);

    for( let i = 0; i < id("number-container").children.length; i++ ){
        id("number-container").children[i].classList.remove("selected");
    }

    selectedTile = null;
    selectedNum = null;
}

//a funcao seta o temporizador conforme selecao
//a funcao printa no html o tempo conforme retorno do timeConversion, esse print ocorre a cada intervalo de 1000ms ou 1segundo de maneira decremental
//
function startTimer(){
    if( id("time-1").checked ){
        timeRemaining = 180;
    } else if( id("time-2").checked ) {
        timeRemaining = 300;
    } else {
        timeRemaining = 600;
    }

    id("timer").textContent = timeConversion(timeRemaining);

    timer = setInterval(function() {
        timeRemaining --;

        if(timeRemaining === 0) endGame();

        id("timer").textContent = timeConversion(timeRemaining);
    }, 1000)

}
// Apresenta em tela o temporazidor iniciado pela funcao startTimer()
function timeConversion(time){
    let minutes = Math.floor(time/60);

    if(minutes < 10) minutes = "0" + minutes;

    let seconds = time % 60;

    if(seconds < 10) seconds = "0" + seconds;

    return minutes + ":" + seconds;
}

//essa funcao verifica popula as variaveis selectedTile e selectedNum foram selecionadas e popula a selectedTile com o selectedNum
// se apenas uma das variáveis for escolhida, nada ocorre
//se o numero selecionado for correto remove as classes de SELECTED e checa se o JOGO FOI FINALIZADO
//se nao informar ao usuário que o numero selecionado foi errado por alguns segundos, checa se existem mais tentativas e finaliza o jogo
function updateMove(){
    if ( selectedTile && selectedNum ){ 

        selectedTile.textContent = selectedNum.textContent;

        if( checkCorrect(selectedTile) ){

            selectedTile.classList.remove("selected");
            selectedNum.classList.remove("selected");
            selectedNum = null;
            selectedTile = null;

            if( checkDone() ) {

                endGame();
            } 

        } else {

            disableSelect = true;
            selectedTile.classList.add("incorrect");

            setTimeout(function(){

                lives --;

                if (lives === 0 ) {

                    endGame();
                } else {

                    id("lives").textContent = "Vidas restantes: " + lives;
                    disableSelect = false;
                }

                selectedTile.classList.remove("incorrect");
                selectedTile.classList.remove("selected");
                selectedNum.classList.remove("selected");

                selectedTile.textContent = "";
                selectedTile = null;
                selectedNum = null;

            }, 1000);
        }
    }
}

function checkDone(){
    let tiles = qsa(".tile");
    for(let i = 0; i< tiles.length; i++){
        if( tiles[i].textContent === "" ) return false;
    }

    return true;
}

function endGame(){
    disableSelect = true;
    clearTimeout(timer);
    if(lives === 0 || timeRemaining === 0){
        id("lives").textContent = "Você perdeu!";
    } else {
        id("lives").textContent = "Você GANHOU!!!";
    }
}

function checkCorrect(tile){
    
    let solution;

    if ( id( "diff-1" ).checked ) {
        solution = easy[1];
    } else if ( id( "diff-2" ).checked ) {
        solution = medium[1];
    } else {
        solution = hard[1];
    }

    if( solution.charAt(tile.id) === tile.textContent ){
        return true;
    } else {
        return false;
    }
}

//funcoes auxiliares
function id(id){
    return document.getElementById(id);
}

function qs(selector){
    return document.querySelector(selector);
}

function qsa(selector){
    return document.querySelectorAll(selector);
}
