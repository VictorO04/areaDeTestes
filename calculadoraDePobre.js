//comando para instalar a biblioteca readline sync: npm i readline-sync

console.log("Operaçoes matematicas (Nao use acentuacao ou caracteres especiais!!!):");
console.log("adicao;");
console.log("subtracao;");
console.log("multiplicacao;");
console.log("divisao.");
console.log("-----------------------------");

let readline = require("readline-sync");

let operacao = readline.question("Escolha uma operacao matematica: ");

let num1 = readline.questionFloat("escolha o primeiro numero: ");
let num2 = readline.questionFloat("escolha o segundo numero: ");

switch (operacao) {
    case "adicao":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "subtracao":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "multiplicacao":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "divisao":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("ERRO")
}