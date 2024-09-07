function pesquisar() {
    // Busca os elementos HTML com o ID "resultados-pesquisa" para exibir os resultados da pesquisa.
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //se o campoPesquisa for uma STRING sem nada 
    if(!campoPesquisa){
        section.innerHTML = "<p>Item não encontrado. Você precisa digitar o nome de um atleta ou esporte</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    console.log(campoPesquisa);
  
    // Inicializa uma string vazia para concatenar os resultados da pesquisa.
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    // Itera sobre cada elemento "dado" dentro do array "dados".
    // Para cada dado, cria um novo elemento HTML com as informações do dado.
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        // se titulo includes campoPesquisa
        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){      
      // Cria um novo elemento HTML para cada resultado 
      resultados += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">${dado.descricao} </p>
          <a href="${dado.link}" target="_blank">Mais informações</a>
        </div>
      `;
        }
    }

    if(!resultados){
     resultados = "<p>Item não encontrado</p>"
     
    }
  
    // Atribui a string com os resultados HTML para o elemento "section".
    // Isso substitui o conteúdo HTML anterior do elemento.
    section.innerHTML = resultados;
  }