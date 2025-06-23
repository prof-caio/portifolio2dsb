
//função que vai somar os valores
function somar(){
    //declaração de variáveis
    let num1 = 0;
    let num2 = 0;

    //Entrada de dados pelo usuário e atribuição nas variáveis
    num1 = Number(window.prompt('Digite um número: '));
    num2 = Number(window.prompt('Digite outro número: '));

    //a variável soma recebe o resultado da soma das variáveis num1 e num2
    let soma = num1 + num2;

    //mostra o resultado pro usuário
    alert(soma);

    //verifica se o resultado da soma é maior ou menor que 10
    if(soma > 10) {
        //caso seja maior que 10, mostra a frase abaixo pro usuário
        alert("O resultado é maior do que 10");
    } else {
        //se for menor que 10, mostra essa frase.
        alert("Não é maior do que 10");
    }
}

