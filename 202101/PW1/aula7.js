// let h4 = document.getElementsByTagName('h4')[0];

// h4.onclick = function(e){
//     // let primeiro = document.getElementById('primeirao');
//     // let paragrafos = 
//     //             document.getElementsByTagName('p');
//     // let verdes =
//     //             document.getElementsByClassName('verde');

//     // let login = 
//     //             document.getElementsByName('login');

//     // console.log(primeiro);

//     // console.log(paragrafos);

//     // console.log(verdes);

//     // console.log(login);

//     console.log(e.type);

//     console.log(e.target);

// }


// function adiciona(){
//     let p = document.createElement('p');
//     // let texto = document.createTextNode('Um novo parágrafo');
//     // p.appendChild(texto);

//     // p.innerText = "texto criado com innerText";

//     p.innerHTML = "Texto <b>criado</b> com innerTexto";

//     let div = document.getElementById('paragrafos');

//     div.appendChild(p);
// }



function teste(){
    // $('#primeirao').text('Novo texto');
    // $('#primeirao').html('Novo <em>texto</em>');
    // $('p').eq(1).text('Novo texto');
    // $('p').each( function(i ){
    //     console.log(i, $(this));
    // });
    // let novop = $('<p>Novo parágrafo</p>');

    // $('#primeirao').append(novop);
    // $('#primeirao').prepend(novop);
    // console.log( $('#primeirao').parent().text('Novo Texto') );

    // $('#primeirao').next().text('Novo Texto');

    // $('#principal').children().text('Novo Texto');

    // $('strong').parent().text('Novo texto!!!')

    // $('#figura').attr('style','width:200px')

    
    // $('#figura').remove();

    // $('#primeirao').css({
    //     color:'blue',
    //     'font-weight':'bold'
    // });

        // $('#segundo').removeClass('titulo');
        // $('#segundo').addClass('rodape');

    // $('#figura').toggle();

    // $('#figura').fadeToggle('slow', function(){
    //     $('#segundo').text('Terminou!');
    // })

}

// $('#botao').on('click',teste);

// $('p').on('click', function(e) {
//     console.log('Clicou no paragrafo');
//     console.log(e.type);
//     console.log($(this).text());
//     $(this).text('Novo texto');
// });

$('#botao').on('click', function(e) {
    // console.log( $('#texto').val() );
    $('#primeirao').text( $('#texto').val() )
});