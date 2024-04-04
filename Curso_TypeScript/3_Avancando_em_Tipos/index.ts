// 1 - Arrays
let numbers:number[] = [1, 2, 3]

numbers.push(5)

console.log(numbers[2])

let strings:String[] = ["Bernardo", "Zapelini"]

console.log(strings[0])

// 2 - Outra sintaxe Array

let numeros: Array<number> = [100, 200]

numeros.push(300)

console.log(numeros[2])

//3 - Any

const qualquerCoisa:any = [1, "Bernardo", true]

console.log(qualquerCoisa)

// 4 - parametros tipados

function soma(a: number, b: number){
    console.log(a + b)
}

soma(4, 5)

// 5 - retorno de funcao
function greeting(nome: string): string{
    return "olá: " + nome
}

console.log(greeting("Bernardo"))

// 6 - funcao anonima
setTimeout(function() {

    const sallary = 2000

    // console.log(sallary)

}, 2000)

// 7 - tipos de objetos

function passCordinates(coord: {x: number, y: number}){
    console.log("O X é: " + coord.x)
    console.log("O Y é: " + coord.y)
}

const objCoord = {
    x: 124,
    y: 43.2
}

passCordinates(objCoord)

const pessoaObj: {nome: string, sobrenome: string} = {nome: "Bernardo", sobrenome: "Zapelini"}