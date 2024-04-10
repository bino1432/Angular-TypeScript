// 1 - Arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
var strings = ["Bernardo", "Zapelini"];
console.log(strings[0]);
// 2 - Outra sintaxe Array
var numeros = [100, 200];
numeros.push(300);
console.log(numeros[2]);
//3 - Any
var qualquerCoisa = [1, "Bernardo", true];
console.log(qualquerCoisa);
// 4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
// 5 - retorno de funcao
function greeting(nome) {
    return "olá: " + nome;
}
console.log(greeting("Bernardo"));
// 6 - funcao anonima
setTimeout(function () {
    var sallary = 2000;
    // console.log(sallary)
}, 2000);
// 7 - tipos de objetos
function passCordinates(coord) {
    console.log("O X é: " + coord.x);
    console.log("O Y é: " + coord.y);
}
var objCoord = {
    x: 124,
    y: 43.2
};
passCordinates(objCoord);
var pessoaObj = { nome: "Bernardo", sobrenome: "Zapelini" };
// 8 - props opcinais
function showNumbers(a, b, c) {
    console.log("A: " + a);
    console.log("A: " + b);
    if (c) {
        console.log("A: " + c);
    }
}
showNumbers(1, 2, 3);
showNumbers(4, 5);
// 9 - validando argumento opcional
function advancedGreeting(firstname, lastName) {
    if (lastName !== undefined) {
        return console.log("Olá, " + firstname, lastName + " tudo bem?");
    }
    return console.log("Olá, " + firstname + " tudo bem?");
}
console.log(advancedGreeting("bernardo", "zapelini"));
console.log(advancedGreeting("bernardo"));
// 10 - unoin type
function showBalance(balance) {
    console.log("O saldo da conta é R$" + balance);
}
showBalance(100);
showBalance("500");
var arr2 = [1, "teste", true];
