<!DOCTYPE html>
<html lang="pt-br">
<head>
	<!-- <link href="https://fonts.googleapis.com/css?family=Lexend+Peta|Lobster|Lobster+Two|Open+Sans|Roboto&display=swap" rel="stylesheet"> -->
	<!-- <link href="css/estilo.css" rel="stylesheet" type="text/css"> -->

	<title>SQL INJECTION - LOGIN</title>
	<meta charset = "UTF-8"/>
	<meta name="author" content="Joao Paulo">
</head>
<body>
    <?php
        //CAMPOS RECEBIDOS POR POST
        $user = $_POST["user"];
        $senha = $_POST["senha"];

        //CONEXÃO COM BANCO DE DADOS

        // $conn = mysqli_connect("localhost","root","","sas") or print (mysqli_error()); 

        $dsn = "mysql:host=localhost;dbname=sas;charset=UTF8";
        $conn = new PDO($dsn, "root", "");

        // REALIZANDO A CONSULTA AO BANCO DE DADOS

        // $sql = mysqli_query($conn,"SELECT * FROM users WHERE login = '".$user."' AND senha = '".$senha."'");
        // $result = mysqli_num_rows($sql);


        $stmt = $conn->prepare("SELECT * FROM users WHERE login = :user AND senha = :senha");
        $stmt->bindValue(":user",$user);
        $stmt->bindValue(":senha",$senha);
        $run = $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        
        //VERIFICANDO RESULTADO DA CONSULTA
        if($result){
            echo '<h1>Login efetuado com sucesso</h1>';
        }else{
            echo '<h1>Erro: Login ou senha incorretos</h1>';
        }
    ?>
</body>
</html>