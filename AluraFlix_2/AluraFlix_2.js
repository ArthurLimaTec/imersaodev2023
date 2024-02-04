function adicionarFilme() {
    
    var nomeInserido = document.getElementById('nome').value
    var filmeInserido = document.getElementById('filme').value 
    var elementoListaLinks = document.getElementById('listaLinks')
    var elementoListaNomes = document.getElementById('listaNomes')
    var elementoMinhaImagem = document.getElementById('meuBotao')

    
    if(filmeInserido.slice(-4) == '.jpg'){
      
      elementoListaNomes.innerHTML = elementoListaNomes.innerHTML + nomeInserido + ', '
      elementoListaLinks.innerHTML = elementoListaLinks.innerHTML + '<img src=' + filmeInserido + '>' //isso faz inserir na lista
      
      elementoListaLinks.style.display = 'none' //isso faz a lista de links não aparecer na página
            
      elementoMinhaImagem.innerHTML = elementoListaLinks.innerHTML //isso faz da imagem um botão
      alert(elementoMinhaImagem.innerHTML)
      
        elementoMinhaImagem.addEventListener('click', function() {
          window.location.href = 'https://www.youtube.com/watch?v=lAxgztbYDbs';
          alert('A imagem foi clicada!')
        })  
      
      document.getElementById('nome').value = ''
      document.getElementById('filme').value = ''       
    }
    
    else{
      alert('Por favor, insira apenas extensão -> .jpg')
    }
}

// Ainda falta atribuir um link por imagem/botão
