function calculo() {
    let anoNascimento = 0;
    let idade = 0;

    anoNascimento = Number(window.prompt('Digite o ano em que você nasceu:'));
    idade = 2025 - anoNascimento;

    alert("Sua idade é " + idade);

    if(idade > 18){
        alert("Você pode tirar carteira de motorista");
    } else {
        let dif = 18 - idade;
        alert("Você não pode tirar carteira de motorista pois ainda faltam " + dif + " anos para completar 18 anos.");
    }
}