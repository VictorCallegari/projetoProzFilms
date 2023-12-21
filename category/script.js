import { filmes } from "../databasefilms.js";


/////////////////////////////////////Função para adicionar filmes ao carousel////////////////////////////////


// CAPTURANDO O ELEMENTO
const conjuntoFilmes = document.getElementById('carousel');

// ITERANDO SOBRE OS FILMES DO ARRAY USANDO O METODO ENTRIES
for (const [id, filme] of filmes.entries()) { //utiliza o entries para pesquisar iteraveis no array
    const urlImagem = filme.img; //recebe apenas os links das imagens

    //CRIANDO UM NOVO ELEMENTO QUE VAI REPRESENTAR CADA FILME
    const boxFilm = document.createElement('div');
    boxFilm.className = 'box-film';

    //ADICIONANDO O HTML AO ELEMETO CRIADO
    boxFilm.innerHTML = `
        <a href="../filmes/index.html?id=${id}"> 
            <img src="${urlImagem}" alt="#">
        </a>`;

    //ADICIONANDO O ELEMENTO AO DIV CRIADO
    conjuntoFilmes.appendChild(boxFilm);
}

//////////////////////////////Função para rolar o conjunto de filmes//////////////////////////

const clicRightScroll = () => conjuntoFilmes.scrollLeft += 150; //utilizando arrow function

const clicLeftScroll = () => conjuntoFilmes.scrollLeft -= 150;

// Adicionando event listeners aos botões
const rightButton = document.getElementById('btnRight');
const leftButton = document.getElementById('btnLeft');

rightButton.addEventListener('click', clicRightScroll);
leftButton.addEventListener('click', clicLeftScroll);

///////////////////////////////Função par área de busca///////////////////////////////////

//Fução para pesquisar toda a lista
function listaBuscaFilmes() { //função para pesquisar toda a lista pelo id e pelo nome
    const listaFilmes = {};

    for (const [id, filme] of filmes.entries()) { // retorna um objeto iterável que consiste em pares chave-valor
        listaFilmes[id] = filme.nome.toLowerCase();//Recebe os nomes dos filmes e converte tudo para mínusculo
    }

    return listaFilmes;
}


// Adicionar evento ao clicar no teclado e chamar função
const campoBusca = document.getElementById('pesquisa');
campoBusca.addEventListener('input', realizarBusca);
campoBusca.addEventListener('input', limparAreaPesquisa); 


// Função para realizar a busca e exibir o resultado
function realizarBusca() {
    const resultadoBusca = document.getElementById('resultadoBusca');
    const listaFilmes = listaBuscaFilmes();
    const valorBusca = campoBusca.value.toLowerCase();

    const resultados = Object.entries(listaFilmes)
        .filter(([id, nome]) => nome.toLowerCase().includes(valorBusca))
        .map(([id, nome]) => `<p id="resultado"><a href="../filmes/index.html?id=${id}">${nome}</a></p>`);

    resultadoBusca.innerHTML = resultados.length > 0 ? resultados.join('') : 'Nenhum resultado encontrado.';

    // Adiciona a tela de volta quando tiver algo no valor de pesquisa
    resultadoBusca.style.display = 'block';

}

///////////////////////// Função para excluir os resultados quando o campo de busca estiver vazio
function limparAreaPesquisa() {
    const valorBusca = campoBusca.value;
    const resultadoBusca = document.getElementById('resultadoBusca');

    if (valorBusca.length === 0) {
        //esconde a div caso esteja com o input vazio
        resultadoBusca.style.display = 'none';
    }
}


