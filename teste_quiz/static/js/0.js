var signos = [
  'Aquário',
  'Peixes',
  'Áries',
  'Touro',
  'Gêmeos',
  'Câncer',
  'Leão',
  'Virgem',
  'Libra',
  'Escorpião',
  'Sagitário',
  'Capricórnio'
]

function resultado (){
  var res = signos[Math.floor(Math.random() * 11)];
  document.getElementById("load").innerHTML = "<b>O signo perfeito para você é: " + res + "!!!</b>";
}
