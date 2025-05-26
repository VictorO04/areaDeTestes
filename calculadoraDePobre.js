//comando para instalar a biblioteca readline sync: npm i readline-sync

console.log("Operaçoes matematicas, escolha a letra da operacao.");
console.log("a - adicao;");
console.log("b - subtracao;");
console.log("c - multiplicacao;");
console.log("d - divisao.");
console.log("-----------------------------");

let readline = require("readline-sync");

let operacao = readline.question("Escolha uma operacao matematica: ");

if (operacao !== "a" && operacao !== "b" && operacao !== "c" && operacao !== "d") {
    console.log("Operação inválida, escolha novamente");
    operacao = readline.question("Escolha uma operacao matematica: ");
}

let num1 = readline.questionFloat("escolha o primeiro numero: ");
let num2 = readline.questionFloat("escolha o segundo numero: ");

switch (operacao) {
    case "a":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        break;
    case "b":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        break;
    case "c":
        console.log(`${num1} * ${num2} = ${num1 * num2}`);
        break;
    case "d":
        console.log(`${num1} / ${num2} = ${num1 / num2}`);
        break;
    default:
        console.log("ERRO");
}