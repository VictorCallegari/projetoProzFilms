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

// ---------------- FUNÇÃO PARA O MENU HAMBURGUER --------------//

document.addEventListener('DOMContentLoaded', function () {
    const btnmenu = document.getElementById('btnmenu');
    const areamenu = document.getElementById('areamenu');
    const imgmenu = document.getElementById('imgmenu');
  
    if (btnmenu && areamenu) {
      btnmenu.addEventListener('click', menuHamburguer);
    }
  
    function menuHamburguer() {
      if (areamenu.style.display === 'block' || areamenu.style.display === '') {
        areamenu.style.top = '-100%';
        areamenu.style.display = 'none';
        imgmenu.src = './imagens/burger-menu.svg';
      } else {
        areamenu.style.top = '50px';
        areamenu.style.display = 'block';
        imgmenu.src = './imagens/x-symbol.svg';
      }
    }
  });
  





