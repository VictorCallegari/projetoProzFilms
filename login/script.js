const form = document.querySelector('form');
const feedbackMessage = document.querySelector('#feedback-message');
const accessMessage = document.querySelector('#access-message');
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const tempoExibicao = 3000;

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const usernameValue = username.value;
    const passwordValue = password.value;

    if (usernameValue === 'admin' && passwordValue === 'admin') {
        showSuccessMessage();
    } else if (usernameValue === 'admin' && passwordValue !== 'admin') {
        showErrorMessage('Usuário ou Senha incorreto!');
    } else if (usernameValue === '' || passwordValue === '') {
        showErrorMessage('Digite usuário e senha');
    } else {
        showErrorMessage('Usuário não encontrado.');
    }
});

function showSuccessMessage() {
    window.location.href = '../home/index.html';
}

function showErrorMessage(message) {
    feedbackMessage.textContent = message;
    feedbackMessage.classList.add('error-message'); // Adiciona a classe de erro
    setTimeout(clearMessages, tempoExibicao);
}

function clearMessages() {
    feedbackMessage.textContent = '';
    accessMessage.textContent = '';
    feedbackMessage.classList.remove('error-message');
}
