let aleatorio = parseInt(Math.random() * 101);
let mostraResultado = document.querySelector("#resultado");
let jogador;
let tentativas = 0;

function pensar() {
    jogador = Number(window.prompt("Digite um número entre 1 e 100"));

    if(jogador > 0 && jogador < 101){

        tentativas += 1;

        if (jogador != aleatorio) {

            if(jogador > aleatorio) {
                mostraResultado.innerHTML += `<p><b>TENTATIVA ${tentativas}: </b>Você tentou o número <b>${jogador}</b>, tente um número <b>MENOR!</b></p>`;
            } else {
                mostraResultado.innerHTML += `<p><b>TENTATIVA ${tentativas}: </b>Você tentou o número <b>${jogador}</b>, tente um número <b>MAIOR!</b></p>`;
            }
        } else {
            mostraResultado.innerHTML += `<p><b>Parabéns! Você acertou o número ${aleatorio} em ${tentativas} tentativas.</b></p>`;
        }
    } else {
        alert("Por favor, digite um número entre 1 e 100.");
    }
}
