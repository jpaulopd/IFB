$(document).ready(function(){
    
    getUsuarios();

    
    $('#atualizarBtn').hide()

    function getUsuarios(){
        $("#listausuarios").html('');
        $.ajax({
            url: 'http://localhost:3000/usuarios',
            method: 'get',
            dataType: 'json',
            success: function(data) {
                $(data).each(function(i, usuario){
                    $('#listausuarios').append($("<tr>")
                                            .append($("<td class='1nome'>").append(usuario.primeiro_nome))
                                            .append($("<td class='2nome'>").append(usuario.ultimo_nome))
                                            .append($("<td class='email'>").append(usuario.email))
                                            .append($("<td class='telefone'>").append(usuario.telefone))
                                            .append($("<td>").append(usuario.id))
                                            .append($("<td>").append("<button id=btn_edit value="+usuario.id+">Editar"))
                                            .append($("<td>").append("<button id=btn_apag value="+usuario.id+">Apagar"))
                                            );
                    });
                }
        });
    };
    
    $(document).on("click", "#btn_edit", function(e) {
        e.preventDefault();

        $('#atualizarBtn').show()
        $('#cadastrarBtn').hide()

        let id = $(this).val();

        //CAPTURA DADOS DA LINHA DA TABELA
        let row = $(this).closest('tr');
        
        let nome1 = row.find('.1nome').text();
        let nome2 = row.find('.2nome').text();
        let email = row.find('.email').text();
        let telefone = row.find('.telefone').text();


        //ATUALIZA DADOS DO FORMULARIO
        $('#nome1').val( nome1 );
        $('#nome2').val( nome2 );
        $('#email').val( email );
        $('#telefone').val( telefone );


        //ACOMPANHA ALTERACOES NOS CAMPOS DO FORMULARIO 
        $("#nome1").change(function(){
            nome1 = $(this).val();
            console.log(nome1);
        });

        $("#nome2").change(function(){
            nome2 = $(this).val();
            console.log(nome2);
        });

        $("#email").change(function(){
            email = $(this).val();
            console.log(email);
        });

        $("#telefone").change(function(){
            telefone = $(this).val();
            console.log(telefone);
        });

       
        $("#atualizarBtn").click(function(){
            let data = {
                primeiro_nome: nome1,
                ultimo_nome: nome2,
                email: email,
                telefone: telefone
            } 
            console.log(data);

            submterUsuario( id, data, "PUT");

            limparFomulario();

            getUsuarios();

            $('#atualizarBtn').show()
            $('#cadastrarBtn').hide()
        });
       
     });

    $("#cadastrarBtn").click(function(e){

        e.preventDefault();

        let data = {
            primeiro_nome: $('#nome1').val(),
            ultimo_nome: $('#nome2').val(),
            email: $('#email').val(),
            telefone: $('#telefone').val()
        } 
        console.log(data);

        submterUsuario( 0, data, "POST");

        limparFomulario();

        getUsuarios();
    });
    
    $(document).on("click","#btn_apag",function(e){

        e.preventDefault();

        let id = $(this).val();

        console.log(id);

        let data = {};

        submterUsuario( id, data, "DELETE");
           
        getUsuarios();
    });


         
    function submterUsuario(id, data, metodo){

        if("PUT" == metodo){
            $.ajax({
                url: 'http://localhost:3000/usuarios/' + id,
                method: 'PUT',
                dataType: 'text',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(data) {
                    alert(data);
                }
            });

        }else if(metodo == "POST"){

            console.log(data);

            $.ajax({
                url: 'http://localhost:3000/usuarios/',
                method: 'POST',
                dataType: 'text',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function(data) {
                    alert(data);
                }
            });
        }else if(metodo == "DELETE"){
            $.ajax({
                url: 'http://localhost:3000/usuarios/' + id,
                method: 'DELETE',
                dataType: 'text',
                success: function(data) {
                    alert(data);
                }
            });

        }else{}
        
    }

    function limparFomulario(){
        $('#nome1').val('');
        $('#nome2').val('');
        $('#email').val('');
        $('#telefone').val('');
    }
    
});
  




