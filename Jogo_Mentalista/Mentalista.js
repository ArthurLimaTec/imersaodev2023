var numeroSecreto = parseInt(Math.random() * 1001) + 1;
const numeroMaximo = 1000;
const numeroMinimoTentativas = Math.ceil(Math.log2(numeroMaximo));
var tentativa = 1

var chute = prompt('Digite um número entre 0 e 1000')

while (chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 1000')

  var resto = numeroMinimoTentativas - tentativa
  tentativa += 1
  
  if (resto == 0) {
    alert('Acabaram as suas tentativas!')
   break
  }
  
  
  if (chute == numeroSecreto) {
    alert('Você acertou!')
  } else if (chute > numeroSecreto) {
    alert('Errou! O número secreto é menor do que ' + chute)
    alert('Você tem mais ' + resto + ' tentativas.')
  } else if (chute < numeroSecreto) {
    alert('Errou! O número secreto é maior do que ' + chute)
    alert('Você tem mais ' + resto + ' tentativas.')
  }
}

