<?php session_start(); ?>
<!doctype html>
<html>

  <head>
    <meta charset="utf-8"> <!-- metadado para incluir caracteres especiais-->
    <title>João DEV</title> <!-- metadado para incluir na barra de título o nome da página-->
    <meta name="author" content="João Paulo Pires Dantas"> <!-- metadado para incluir nos buscadores o nome do autor-->
    <meta name="keywords" content="desenvolvimento, web, paginas, site" /> <!-- metadado para buscadores localizarem a página por palavras-chaves -->
    <meta name="description"
        content="Homepage para projeto da matéria de construção de páginas 2 do IFB - 2020/01"> <!-- metadado para buscadores localizarem a página por descrição -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- metadado para retirar margens e espaços padrão do navegador-->
    <link href="css/materialize.css" type="text/css" rel="stylesheet" media="screen,projection" /> <!-- importa materialize -->
    <link href="css/style.css" type="text/css" rel="stylesheet" media="screen,projection" /> <!-- importa estilo personalizado de css -->
    <link href="css/contatoStyle.css" type="text/css" rel="stylesheet" media="screen,projection" /> <!-- importa estilo personalizado da pagina contato -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">   <!-- importa fontawesome  -->
    <link rel="stylesheet" href="materialize-social.css"> <!-- importa materialize css -->
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> <!-- importa fontes do google -->
    <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon/favicon-32x32.png"> <!-- importa favico -->
  </head>  

  <body>
          <!-- INICIO NAV BAR -->
          <div class="navbar-fixed "> <!-- barra de navegação do topo da página, classe css do materialize -->
            <nav>
              <div class="nav-wrapper teal darken-4"> <!-- classe css do materialize para colorir barra de navegação-->
                <a href="index.html" class="brand-logo">João Paulo Desenvolvedor</a> <!-- classe css do materialize para logo da página -->
                <a href="index.html" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a> <!-- classe css do materialize para criar icone quando pagina abrir no mobile-->
                <ul class="right hide-on-med-and-down"> <!-- classe css do materialize para lista -->
                  <li><a href="index.html">Início</a></li> <!-- item da "lista" na barra de navegação-->
                  <li><a href="#servicos">Serviços</a></li> <!-- item da "lista" na barra de navegação-->
                  <li><a href="#sobre">Sobre</a></li> <!-- item da "lista" na barra de navegação-->
                  <li><a href="#parceiros">Parceiros</a></li> 
                  <li><a href="contato.html">Contato</a></li> <!-- item da "lista" na barra de navegação-->
                </ul>
              </div>
            </nav>
          </div>
            <ul class="sidenav" id="servicos">
              <li><a href="index.html">Início</a></li> <!-- item da "lista" na barra de navegação do mobile -->
              <li><a href="#servicos">Serviços</a></li> <!-- item da "lista" na barra de navegação do mobile -->
              <li><a href="#sobre">Sobre</a></li> <!-- item da "lista" na barra de navegação do mobile -->
              <li><a href="#parceiros">Parceiros</a></li> <!-- item da "lista" na barra de navegação do mobile -->
              <li><a href="contato.html">Contato</a></li> <!-- item da "lista" na barra de navegação do mobile -->
            </ul>
        <!-- FIM NAV BAR -->
    
    <div class="row"><h1>Faça seu cadastro e receba informações atualizadas!</h1></div>
    <div class="row">
      <form class="col s12" method="GET" action="processa.php">
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="Digite seu nome" id="nome" name="nome" type="text" class="validate">
            <label class="active" for="nome">Nome completo</label>
          </div>
        </div>
        <div class="row">
          <div class="input-field col s12">
            <input placeholder="Digite email" id="email" name="email" type="email" class="validate">
            <label class="active" for="email">Email</label>
          </div>
        </div>
        <?php 
          if(isset($_SESSION['msg'])){
            echo $_SESSION['msg'];
            unset($_SESSION['msg']);
          }
        ?>

        <button class="btn waves-effect waves-light" type="submit" name="action">Cadastrar
          <i class="material-icons right">send</i>
        </button>
      </form>
    </div>
  </body>
</html>
