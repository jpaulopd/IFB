<!DOCTYPE html>
<html lang="pt-br">
<head>
	<!-- <link href="https://fonts.googleapis.com/css?family=Lexend+Peta|Lobster|Lobster+Two|Open+Sans|Roboto&display=swap" rel="stylesheet"> -->
	<!-- <link href="css/estilo.css" rel="stylesheet" type="text/css"> -->

	<title>SQL INJECTION - LOGIN</title>
	<meta charset = "UTF-8"/>
	<meta name="author" content="Joao Paulo">
	<!-- <meta name="keywords" content="pica pau, games, jogo, dicas de jogos"/> -->
	<!-- <meta name="description" content="Site de jogos com o tema Pica Pau com noticias, rankings e escambos dos melhores jogos"> -->
</head>
<body>
    <?php
        //CAMPOS RECEBIDOS POR POST
        $user = $_POST["user"];
        $senha = $_POST["senha"];

        //CONEXÃO COM BANCO DE DADOS
        $conn = mysqli_connect("localhost","root","","sas") or print (mysqli_error()); 
        

        //CONSULTA NO BANCO DE DADOS
        // $select = "SELECT true FROM sas.users WHERE login = '".$user."' AND senha = '".$senha."'";
        // $sql = mysql_query($select);
        // $result = mysql_num_rows($sql);

        $result = mysqli_query($conn,"SELECT * FROM users WHERE login = '".$user."' AND senha = '".$senha."'");

        //VERIFICANDO RESULTADO DA CONSULTA

        if($result){
            echo '<h1>Login efetuado com sucesso</h1>';
        }else{
            echo '<h1>Erro: Login ou senha incorretos</h1>';
        }
        // mysql_free_result(); 
        // mysql_close($conn);
    ?>
</body>
</html>