const menorValor = 1
const maiorValor = 1000
const numeroSecreto = gerarNumeroAleartorio()

function gerarNumeroAleartorio() {
      return parseInt(Math.random() * maiorValor + 1)
}

const elementoMenorValor = document.getElementById('menor-valor').innerHTML = menorValor

const elementoMaiorValor = document.getElementById('maior-valor').innerHTML = maiorValor

console.log(numeroSecreto)