// Importa a lista de Minha Lista
const minhaLista = JSON.parse(localStorage.getItem('minhaLista')) || [];

// Importa a função filmes do seu módulo filmes
import { filmes as listaFilmes } from "../databasefilms.js"; // Renomeando para evitar conflito

const areaSemFilmes = document.getElementById('areaSemFilmes');
const carousel = document.getElementById('carousel'); // Renomeando para evitar conflito

if (minhaLista.length > 0) {
    areaSemFilmes.style.display = 'none';

    // Itera sobre os IDs na lista e obtém informações do Mapa
    minhaLista.forEach((filmeSelecionado) => {
        // Adicione o código para exibir os detalhes do filme na página Minha Lista
        console.log('Informações do Filme na Minha Lista:', filmeSelecionado);

        // CRIANDO UM NOVO ELEMENTO QUE VAI REPRESENTAR CADA FILME
        const boxFilm = document.createElement('div');
        boxFilm.className = 'box-film';

        // ADICIONANDO O HTML AO ELEMENTO CRIADO
        boxFilm.innerHTML = `
            <a href="../filmes/index.html?id=${filmeSelecionado.id}"> 
                <img src="${filmeSelecionado.img}" alt="#">
            </a>`;

        // ADICIONANDO O ELEMENTO AO DIV CRIADO
        carousel.appendChild(boxFilm);
    });
} else {
    areaSemFilmes.style.display = 'block';
}

//Limpar local storage





