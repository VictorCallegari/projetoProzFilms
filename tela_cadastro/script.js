const form = document.querySelector('form');
const feedbackMessage = document.querySelector('#feedback-message');
const accessMessage = document.querySelector('#access-message');

const email = document.getElementById('email');
const nome = document.getElementById('nome');
const senha = document.getElementById('senha');
const data = document.getElementById('date');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userEmail = email.value.trim();
    const username = nome.value.trim();
    const passwordValue = senha.value.trim();
    const userData = data.value.trim();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(userEmail) || username === '' || passwordValue === '' || userData === '') {
        showErrorMessage('Cadastro Incompleto ou E-mail Inválido!');
    } else {
        showSuccessMessage();
    }
});

function showSuccessMessage() {
    window.location.replace('../tela_checkout/index.html');
}

function showErrorMessage(message) {
    feedbackMessage.textContent = message;
    feedbackMessage.classList.add('error-message');
    setTimeout(clearMessages, 3000);
}

function clearMessages() {
    feedbackMessage.textContent = '';
    accessMessage.textContent = '';
    feedbackMessage.classList.remove('error-message');
}

