var paulo = {
    nome: "Paulo",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  }; //isto se trata de um objeto, ou seja, um conjunto de informação sobre a variável (não é uma lista)
  var rafa = {
    nome: "Rafa",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var gui = {
    nome: "Gui",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var renato = {
    nome: "Renato",
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };
  
  var elementoTabela = document.getElementById("tabelaJogadores");
  
  exibirNaTela();
  
  function exibirNaTela() {
    //isso fará com que tudo o que foi atualizado na memória seja exibido
    elementoTabela.innerHTML = `
        <tr> 
            <td>${paulo.nome}</td>
            <td>${paulo.vitoria}</td>
            <td>${paulo.empate}</td>
            <td>${paulo.derrota}</td>
            <td>${paulo.pontos}</td>
            <td><button onClick="adicionarVitoria(paulo)">Vitória</button></td>
            <td><button onClick="adicionarEmpate(paulo)">Empate</button></td>
            <td><button onClick="adicionarDerrota(paulo)">Derrota</button></td>
          </tr>
    `;
  }
  
  function adicionarVitoria(jogador) {
    //assim, funcionará para qualquer objeto com o item 'vitoria'
    jogador.vitoria++;
    jogador.pontos = jogador.pontos + 3;
  
    exibirNaTela(); //isso chamará a função que atualiza a exibição
  }
  
  function adicionarEmpate(jogador) {
    jogador.empate++;
    jogador.pontos++;
  
    exibirNaTela();
  }
  
  function adicionarDerrota(jogador) {
    jogador.derrota++;
  
    exibirNaTela();
  }
  