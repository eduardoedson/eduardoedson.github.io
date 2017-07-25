<?php
    $array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    $delicada = $array[rand(0, 9)];
    $bruta = 100 - $delicada;
?>
<html xmlns="https://www.w3.org/1999/xhtml" lang="pt-br" xml:lang="pt-br">
    <head>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"></script>
    </head>
    <body>
        <div id="div_1" name="div_1">
            Qual sua % de pessoa delicada x bruta? <br />
            <button type="button" class="btn btn-success" onclick="init_load()">Iniciar Teste</button>
        </div>
        <div id="load"></div>
        <div id="resultado"></div>
        
        <script>
            function init_load(){
                $("div_1").hide();
                document.getElementById("load").innerHTML = "<b>Por favor, aguarde...</b>";
		setTimeout(load2, 2000);
            }
            function load2(){
                document.getElementById("load").innerHTML = "<b>Conectando com Facebook...</b>";
		setTimeout(load3, 1500);
            }
            function load3(){
                document.getElementById("load").innerHTML = "<b>Coletando dados importantes...</b>";
		setTimeout(load4, 2000);
            }
            function load4(){
                document.getElementById("load").innerHTML = "<b>Analisando seu Perfil...</b>";
		setTimeout(load5, 1500);
            }
            function load5(){
                document.getElementById("load").innerHTML = "<b>Gerando seu Resultado...</b>";
		setTimeout(resultado, 1500);
            }
            function resultado(){
		$("load").hide();
                document.getElementById("resultado").innerHTML = "<b>Você é uma pessoa <?= $delicada ?>% delicada e <?= $bruta ?>% bruta</b>";
            }
        </script>
    </body>
</html>