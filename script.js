//Declarar todas as variaveis
const display = document.querySelector('.tela');

//Criar uma function para cada onclick
function inserir(valor) {
    display.innerHTML += valor;
    display.classList = 'style-display';
};

//Function para limpar o display
function limpar() {
    display.innerHTML = ' ';
};

//Function para fazer o calculo desejado ao clicar no botão igual
function btnigual() {
    if (display.textContent != undefined) {
        display.innerHTML = eval(display.innerHTML);
        display.classList = 'style-display';

        setTimeout(() => {
            display.innerHTML = '';
        }, 10000);
        return;
    };
};
