function sortear() {
  let quantidade = parseInt(document.getElementById("quantidade").value);
  let de = parseInt(document.getElementById("de").value);
  let ate = parseInt(document.getElementById("ate").value);
  let contador = 0;
  let listaDeNumeros = [];
  let numero;
  if (de < ate) {
  while (contador < quantidade) {
    numero = obterNumeroAleatorio(de, ate);
    if (listaDeNumeros.includes(numero)) {
    } else {
      listaDeNumeros.push(numero);
      contador++;
    }
  }
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${listaDeNumeros}</label>`;
  alterarStatusBotao();
} else {alert("o primeiro número precisa ser menor que o segundo")}
}

function obterNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function reiniciar() {
  document.getElementById("quantidade").value = ''
  document.getElementById("de").value = ''
  document.getElementById("ate").value = ''
  resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: nenhum numero ainda`;
  alterarStatusBotao()
}

function alterarStatusBotao() {
  let botao = document.getElementById('btn-reiniciar')
  if(botao.classList.contains('container__botao-desabilitado')) {
    botao.classList.remove('container__botao-desabilitado')
    botao.classList.add('container__botao')
  }
  else {
    botao.classList.remove('container__botao')
    botao.classList.add('container__botao-desabilitado')
  }
}
