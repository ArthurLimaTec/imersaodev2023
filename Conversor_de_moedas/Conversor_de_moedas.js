var valorEmBitcoin = 1;
var cotacaoReal = 180421.53;
var nome = "Arthur";
var valorEmReal = valorEmBitcoin * cotacaoReal;
valorEmReal = valorEmReal.toFixed([2]);

alert("Olá, " + nome + ", o valor em real é: R$" + valorEmReal);
