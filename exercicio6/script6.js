//DESAFIO: MOSTRAR QUANTAS EQUIPES É POSSIVEL FORMAR COM O NÚMERO DE
//INSCRITOS. QUANDO FORMAR 4 EQUIPES, MOSTRAR UM ALERT DIZENDO QUE O
//CAMPEONATO PODE ACONTECER.

let mostraResultado = document.querySelector("#resultado");
let inscritos = 0;
let times = 0;

function inscrever() {
    inscritos++;
    times = parseInt(inscritos / 3);
    
    mostraResultado.innerHTML = `<p>Número de inscritos: ${inscritos}.</p><p>Número de times: ${times}.`;

    if(times >= 4){
        alert("Já é possível iniciar o campeonato, pois temos 4 equipes!");
    }
}