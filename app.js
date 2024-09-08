function pesquisar() {

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = '';
  
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    let titulo = "";
    let descricao = "";
    let tags = "";

    if(campoPesquisa == ""){

        section.innerHTML = "<p>Nenhuma banda foi encontrada</p>"

        //Não executa o resto da função
        return
    
    }

    console.log(campoPesquisa);
  
    // Itera sobre os dados da pesquisa
    for (let dado of dados) {

        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

            // Cria um novo elemento HTML para cada resultado pesquisado
            resultados += `
            <div class="item-resultado">
                <h2 class="descricao-meta">${dado.titulo}</h2>
                <p>${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais Informações</a>
            </div>
            `;

        }

        console.log(dado.titulo.includes(campoPesquisa));

    }

    if(!resultados){

        resultados = "<p>Nenhuma banda foi encontrada</p>"

    }
  
    // Atualiza o conteúdo HTML da seção com os resultados
    section.innerHTML = resultados;

  }