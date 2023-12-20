const form = document.querySelector('form');
const feedbackMessage = document.querySelector('#feedback-message');

const numeroCartao = document.querySelector('.inputnumerocartao');
const nomeTitular = document.querySelector('.inputnometitular');
const mesExpiracao = document.querySelector('.mes');
const anoExpiracao = document.querySelector('.ano');
const csv = document.querySelector('.csv');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const numeroCartaoValue = numeroCartao.value;
    const nomeTitularValue = nomeTitular.value;
    const mesExpiracaoValue = mesExpiracao.value;
    const anoExpiracaoValue = anoExpiracao.value;
    const csvValue = csv.value;

    // Validar se todos os campos estão preenchidos
    if (
        numeroCartaoValue === '' ||
        nomeTitularValue === '' ||
        mesExpiracaoValue === '' ||
        anoExpiracaoValue === '' ||
        csvValue === ''
    ) {
        showErrorMessage('Preencha todos os campos!');
    } else {
        // Se todas as validações passarem, mostrar mensagem de sucesso
        showSuccessMessage();
    }
});

function showSuccessMessage() {
    window.location.href = '../home/index.html';
}

function showErrorMessage(message) {
    if (feedbackMessage !== null) {
        feedbackMessage.textContent = message;
        feedbackMessage.classList.remove('success-message');
        feedbackMessage.classList.add('error-message');
        setTimeout(clearMessages, 3000);
    }
}

function clearMessages() {
    if (feedbackMessage !== null) {
        feedbackMessage.textContent = '';
        feedbackMessage.classList.remove('error-message', 'success-message');
    }
}
