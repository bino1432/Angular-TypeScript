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
    console.log(sallary);
}, 2000);
