
function questao1(){
    let texto = document.getElementById('texto');
    texto.innerText = "Texto alterado para questão 1 onClick";
}

function questao2(){
    let texto2 = document.getElementById('texto2');
    texto2.innerText = "Texto alterado para questão 2 onmouseover";
}

let contador = 0;

function questao3(){
    let div = document.getElementById('texto3');
    let texto= ["texto 1","texto 2","texto 3","texto 4","texto 5","texto 6","texto 7","texto 8","texto 9","texto 10",]
    
   

    let p = document.createElement('p');

    p.innerText = texto[contador];

    div.appendChild( p );
  
    contador++;    
}

function questao4(){

    $("#texto4").on("mouseover", function () {
        $('#texto4').text("Texto alterado com jQuery para a questão 4");
      });
}

let a = 0;
function questao5(){
    let arr= ["texto 1","texto 2","texto 3","texto 4","texto 5","texto 6","texto 7","texto 8","texto 9","texto 10"];
    
    $("#texto5").append('<p>'+arr[a]+'</p>');
    
    a++;
}

//QUESTAO 6
function questao6() {
    $('#questao6').children('h1').text('Texto alterado pra questão6');
    $('#questao6 #nomeaqui').text('JP');
    $('#questao6 p:nth-child(3)').text('Segundo paragrafo alterado para questão6');
    $('#questao6 #imagem').attr('src','https://static.giantbomb.com/uploads/original/2/26740/1529858-paragoomba.gif')
};

//QUESTAO 7
$('#questao7').on('click','p', function(){
    // let index = $(this).index() + 1;

    // $('#questao7 p:nth-child('+ index +')' ).css('color','red');
    $(this).css('color','red');
});

//QUESTAO 8
function questao8(){
    $('#questao7 span').addClass('destaque');    
}

//QUESTAO 9
$('#questao7').on('click','p', function(){
    $(this).hide();
});

function questao9(){
    $('#questao7 p').show();    
}







