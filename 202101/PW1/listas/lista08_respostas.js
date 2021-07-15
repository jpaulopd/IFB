
//resposta 1
// function exercicio1(){
//     $('#resultado1').load(
//         'http://numbersapi.com/8',
//         function(){
//             console.log("Feito");
//         }
//     );
// }

//resposta 2
// function exercicio2(){

//     let n = $("#textoEntrada").val();
//     let url = "http://numbersapi.com/"+ n ;

//     $('#resultado2').load(
//         url,
//         function(){
//             console.log("Feito");
//         }
//     );
// }


//resposta 3
$(document).on({
    ajaxStart: function() {  $('#load').text("Carregando..."); },
        // $body.load("loading");    },
     ajaxStop: function() {$('#load').text("Pronto!"); }    
});

//resposta 4
function exercicio1(){
    $.ajax({
        type: 'GET',
        url: 'http://numbersapi.com/8',
        success: function(dados) {
            $('#resultado1').html(dados);
            console.log("Feito");
        },
        error: function(dados) {
            console.log("Erro na requisição");
        }
    });
}

function exercicio2(){

    let n = $("#textoEntrada").val();
    let url = "http://numbersapi.com/"+ n ;

    $.ajax({
        type: 'GET',
        url: url,
        success: function(dados) {
            $('#resultado2').html(dados);
            console.log("Feito");
        },
        error: function(dados) {
            console.log("Erro na requisição");
        }
    });
}

//resposta 5 e 6
function exercicio5(){
    let entry = $("#textoEntrada2").val();
    let url = 'https://reqres.in/api/users/' + entry;
    
    $('#erro').empty();

    $.ajax({
        type: 'GET',
        url: url,
        success: function(dados) {

            $('#1stname').text(dados.data.first_name);
            $('#2ndname').text(dados.data.last_name);
            $('#email').text(dados.data.email);
            $('#pic').attr('src', dados.data.avatar)
            // $('#pic').text(dados.data.avatar);
            
            console.log("Feito");
        },
        error: function(dados) {
            $('#erro').text("Não foi possível identificar o usuário")
        }
    });

}

//resposta 7
function exercicio7(){
    let nome = $("#nome").val();
    let profissao = $("#nome").val();

    let url = 'https://reqres.in/api/users';
    
    $.ajax({
        type: 'POST',
        url: url,
        data:{
            name: nome,
            job: profissao,
        },
        success: function(dados) {

            $('#retorno_criacao').text("Usuario #" + dados.id + " criado! nome: " + dados.name + ", profissão: " + dados.job);          
            console.log("Feito");
        },
        error: function(dados) {
            $('#retorno_criacao').text("Não foi possível criar o usuário")
        }
    });

}

//resposta 8
function exercicio8(){
    let id = $("#numUser").val();

    let url = 'https://reqres.in/api/users/' + id;
    
    $.ajax({
        type: 'DELETE',
        url: url,
        success: function(dados,textost, xhr) {
            
            console.log(xhr.status);
            if(xhr.status == '204') $('#retorno_delete').text("Usuario #" + id + " deletado!");          
            
        },
        error: function(dados,textost, xhr) {
            if(xhr.status != '204') $('#retorno_delete').text("Usuario #" + id + " deletado!");          
        }
    });

}