<?php
    session_start();
    include_once("conexao.php");
    $nome = filter_input(INPUT_GET, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_GET, 'email', FILTER_SANITIZE_EMAIL);
    #$nome = $_POST['nome'];
    #$email = $_POST['email'];
    #echo $nome;
    #echo $email;
    #echo "Nome: $nome <br>";
    #echo "Email: $email <br>";

    $insere_usuarios = "insert into epiz_26503481_usuarios.usuarios (nome,email,created) values ('$nome','$email',NOW())";
    $retorno_insere = mysqli_query($conn, $insere_usuarios);

    if(mysqli_insert_id($conn)){
        $_SESSION['msg'] = "<p style='color:green;'>Usuário cadastrado com sucesso</p>";
        header("Location: contato.php");

    }else{
        $_SESSION['msg'] = "<p style='color:red;'>Usuário não cadastrado!!!!</p>";
        echo("connection failed: " . mysql_error());
        header("Location: contato.php");
        
    }

?>