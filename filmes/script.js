// Capturar elementos:
const filmeIndicado = document.getElementById('filme-indicado');
const sinopse = document.getElementById('sinopse');

// Adicionar eventos ao passar o mouse e sair do mouse
filmeIndicado.addEventListener('mouseover', addSinopse);
sinopse.addEventListener('mouseout', removeSinopse);

// Função para mostrar as informações da sinopse
function addSinopse() {
    sinopse.style.display = 'block';
}

// Função para ocultar as informações da sinopse
function removeSinopse() {
    sinopse.style.display = 'none';
}



