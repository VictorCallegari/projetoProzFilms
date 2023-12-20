// Importa a função filmes do seu módulo filmes
import { filmes } from "../databasefilms.js";

// Função para obter o parâmetro "id" da URL
function obterIdDoFilmeDaURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Obtém o id do filme da URL
const idDoFilme = obterIdDoFilmeDaURL();

// Use o id para obter as informações específicas do filme
const filmeSelecionado = filmes.get(idDoFilme);

////////////////////////Adicionando informações de cada filme selecionado////////////////////////

// CAPTURANDO O ELEMENTO
const areaInfoFilmes = document.getElementById('containerFilmeSelecionado');

//CRIANDO UM NOVO ELEMENTO QUE VAI REPRESENTAR CADA FILME
const sectioFilmes = document.createElement('section');
sectioFilmes.className = 'container';

//ADICIONANDO O HTML AO ELEMETO CRIADO
sectioFilmes.innerHTML = `
<section id="indicacao-filme">

    <div class="filme-indicado" id="filme-indicado">

        <div>
            <img src="${filmeSelecionado.img}" alt="">
        </div>
        
    </div>

    <div id="sinopse">
        <section id="sinopse-filmes">
            <h1>Sinopse:</h1>
            <section class="texto-sinopse">
                <p>
                    ${filmeSelecionado.sinopse}
                </p>
                <hr>
                <p>
                    <span>Direção:</span> ${filmeSelecionado.direcao}
                </p>
                <hr>
                <p>
                    <span>Roteiristas:</span> ${filmeSelecionado.roteirista}
                </p>
                <hr>
                <p>
                    <span>Artistas:</span> ${filmeSelecionado.artista}
                </p>
            </section>
        </section>
    </div>
</section>

<section class="iframe">
    <iframe src="${filmeSelecionado.trailer}" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

    <section id="button">
        <button type="button" class="btn-play">PLAY</button>
        <button type="button" class="btn-add" id="btnMinhaLista" data-texto="Adicionar na minha lista">
            <img src="./imagens/add-icon.png" alt="">
        </button>
    </section>
</section>`;

//ADICIONANDO O ELEMENTO AO section CRIADO
areaInfoFilmes.appendChild(sectioFilmes);

// Lista que armazenará os IDs dos filmes
const minhaLista = [];

//Função para criar lista baseada no botão minha lista
function adicionarMinhaLista() {
    const idDoFilme = obterIdDoFilmeDaURL();
    const filmeSelecionado = filmes.get(idDoFilme);

    if (filmeSelecionado) {
        // Adiciona o filme à Minha Lista
        const minhaLista = JSON.parse(localStorage.getItem('minhaLista')) || [];
        minhaLista.push(filmeSelecionado);
        localStorage.setItem('minhaLista', JSON.stringify(minhaLista));

        alert('Filme adicionado à Minha Lista!');

    } else {
        console.log(`Filme com ID ${idDoFilme} não encontrado.`);
    }
}

//Capturando o elemento
const btnMinhaLista = document.getElementById('btnMinhaLista');

btnMinhaLista.addEventListener('click', adicionarMinhaLista);


///////////////////////////Aplicar ação ao passar o mouse por cima do filme////////////////////////

// Capturar elementos:
const filmeIndicado = document.getElementById('filme-indicado');
const sinopse = document.getElementById('sinopse');

filmeIndicado.addEventListener('mouseover', addSinopse);
filmeIndicado.addEventListener('mouseout', removeSinopse);

// Função para mostrar as informações da sinopse
function addSinopse() {
    sinopse.style.display = 'block';
}

// Função para ocultar as informações da sinopse
function removeSinopse() {
    sinopse.style.display = 'none';
}

