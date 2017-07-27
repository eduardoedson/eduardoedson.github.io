function init_load(){
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
