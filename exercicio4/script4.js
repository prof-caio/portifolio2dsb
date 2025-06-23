//FAZER A MÉDIA DA NOTA DOS 3 TRIMESTRES E SE A MÉDIA FOR MAIOR QUE 60, 
//INFORMAR SE ESTUDANTE FOI APROVADO, SE FOR MENOR, INFORMAR QUE FOI
//REPROVADO E INFORMAR QUANTOS PONTOS DE MÉDIA FALTARAM PARA APROVAR.

function media() {
    let nota1 = Number(window.prompt("Digite a primeira nota: "));
    let nota2 = Number(window.prompt("Digite a segunda nota: "));
    let nota3 = Number(window.prompt("Digite a terceira nota: "));

    let media = (nota1 + nota2 + nota3) / 3;

    let mostraResultado = document.querySelector('#resultado');

    if (media >= 60) {
        mostraResultado.innerHTML = `<p>O resultado é ${media}. Parabéns!</p>`;
    } else {
        let dif = 60 - media;
        mostraResultado.innerHTML = `<p>O resultado é ${media}. Você não está na média. Ainda faltam ${dif} pontos.</p>`;
    }

    console.log(mostraResultado);
}