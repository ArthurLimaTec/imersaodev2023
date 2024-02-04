// var filme1 = "https://img.elo7.com.br/product/original/2657A1E/big-poster-harry-potter-e-a-pedra-filosofal-lo01-90x60-cm-presente-geek.jpg";

// var filme2 = "https://uauposters.com.br/media/catalog/product/1/7/173720140528-uau-posters-filmes-harry-potter-2-e-a-camara-secreta--harry-potter-and-the-chamber-of-secrets-.jpg";

// var filme3 = "https://img.elo7.com.br/product/original/2657A05/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo2-90x60-geek.jpg";

// document.write('<img src=' + filme1 + '>')
// document.write('<img src=' + filme2 + '>')
// document.write('<img src=' + filme3 + '>')

var listaFilmes = []

listaFilmes[0] = "https://img.elo7.com.br/product/original/2657A1E/big-poster-harry-potter-e-a-pedra-filosofal-lo01-90x60-cm-presente-geek.jpg"

listaFilmes[1] = "https://img.elo7.com.br/product/original/2657601/big-poster-filme-harry-potter-e-a-camara-secreta-lo02-90x60-geek.jpg"

listaFilmes[2] = "https://img.elo7.com.br/product/original/2657A18/big-poster-harry-potter-e-o-prisioneiro-de-azkaban-lo3-90x60-poster.jpg"

listaFilmes[3] = "https://img.elo7.com.br/product/original/26576E3/big-poster-harry-potter-e-o-calice-de-fogo-lo01-90x60-cm-presente-nerd.jpg"

listaFilmes[4] = "https://img.elo7.com.br/product/original/26579D5/big-poster-harry-potter-e-a-ordem-da-fenix-lo04-tam-90x60-cm-geek.jpg"

listaFilmes[5] = "https://img.elo7.com.br/product/original/26578CE/big-poster-harry-potter-e-o-enigma-do-principe-lo07-90x60-cm-presente-nerd.jpg"

listaFilmes[6] = "https://img.elo7.com.br/product/original/265766C/big-poster-harry-potter-e-as-reliquias-da-morte-lo06-90x60-nerd.jpg"

listaFilmes[7] = "https://img.elo7.com.br/product/original/2657628/big-poster-harry-potter-e-as-reliquias-da-morte-lo01-90x60-presente-geek.jpg"


var nomeFilmes = ['']

nomeFilmes [0] = 'Harry Potter e a Pedra Filosofal'
nomeFilmes [1] = 'Harry Potter e a Câmara Secreta'
nomeFilmes [2] = 'Harry Potter e o Prisioneiro de Azkaban'
nomeFilmes [3] = 'Harry Potter e o Cálice de Fogo'
nomeFilmes [4] = 'Harry Potter e a Ordem da Fênix'
nomeFilmes [5] = 'Harry Potter e o Enigma do Príncipe'
nomeFilmes [6] = 'Harry Potter e as Relíquias da Morte - Parte 1'
nomeFilmes [7] = 'Harry Potter e as Relíquias da Morte - Parte 2'

// ANTIGO:
// document.write('<img src=' + listaFilmes[0] + '>')
// document.write('<img src=' + listaFilmes[1] + '>')
// document.write('<img src=' + listaFilmes[2] + '>')

// for(var i = 0; i<3; i = i + 1) {
//   document.write('<img src=' + listaFilmes[i] + '>');
// }

// var i = 0

// while (i <= 3){
//     document.write('<img src=' + listaFilmes[i] + '>');
//     i = i + 1
// }

// Alerta de inserção inválida:

var ultimoLista = (listaFilmes[listaFilmes.length - 1])
var extensao = ultimoLista.slice(-4)

if (extensao != '.jpg'){
    alert('Erro:  inserção inválida -> ' + extensao +'\n\n Adicione apenas arquivos .jpg')
    
}

// Transformando o while para exibição automática com condição de inserção em '.jpg':
var contador = 0

document.write('<div class="container">');

while (contador < listaFilmes.length){
  document.write('<div class="filme">');
  document.write('<img src=' + listaFilmes[contador] + '>')
  document.write('<p id="nome">' + nomeFilmes[contador] + '</p>');
  document.write('</div>');

    contador = contador + 1
  
  if (listaFilmes[contador] && listaFilmes[contador].slice(-4) != '.jpg'){
    break
  }  

}