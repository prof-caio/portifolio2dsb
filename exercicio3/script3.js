//Calculadora simples com as 5 operações básicas: 
//Adição, Subtração, Multiplicação, Divisão e Divisão com sobra.
//O DESAFIO É MOSTRAR TAMBÉM SE O RESULTADO É PAR OU IMPAR.
let num1;
let num2;
let resultado;

function sobra() {
    num1 = Number(window.prompt("Digite o primeiro número: "));
    num2 = Number(window.prompt("Digite o segundo número: "));

    resultado = num1 % num2;

    alert("O resultado é " + resultado + ".");
}
function multiplicacao() {
    num1 = Number(window.prompt("Digite o primeiro número: "));
    num2 = Number(window.prompt("Digite o segundo número: "));

    resultado = num1 * num2;

    alert("O resultado é " + resultado + ".");
}