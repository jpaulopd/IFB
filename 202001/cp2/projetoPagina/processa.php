<?php
    session_start();
    include_once("conexao.php");
    $nome = filter_input(INPUT_POST, 'nome', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL);
    #$nome = $_POST['nome'];
    #$email = $_POST['email'];
    #echo $nome;
    #echo $email;
    #echo "Nome: $nome <br>";
    #echo "Email: $email <br>";

    $insere_usuarios = "insert into usuarios (nome,email,created) values ('$nome','$email',NOW())";
    $retorno_insere = mysqli_query($conn, $insere_usuarios);

    if(mysqli_insert_id($conn)){
        $_SESSION['msg'] = "<p style='color:green;'>Usuário cadastrado com sucesso</p>";
        header("Location: contato.php");

    }else{
        $_SESSION['msg'] = "<p style='color:red;'>Usuário não cadastrado!!!!</p>";
        header("Location: contato.php");
    }

?>