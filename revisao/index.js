console.log("Revisão de JS")

// Variáveis
const nome = "Marcos" // escopo local e não altera
var sobrenome = "Antonio" // escopo global e altera
let ultimoNome = "Santos" // escopo local e altera
const idade = 50

const nomeCompletoComIdade = nome + " " + sobrenome + " " +  ultimoNome + " " +  idade //  isto funciona, pois o JS faz a inferencia de tipos, considerando o tipo mais maleável

console.log(nomeCompletoComIdade)

// Template strings
const texto = `Nome: ${nome} ${sobrenome} Idade: ${idade < 50 ? idade : ""}` // operador ternário.
console.log(texto)


// arrow function
const soma = (num1, num2) => { return num1 + num2 }
//const soma = (num1, num2) => num1 + num2 // Esta forma pode usar apenas quando temos uma única instruçao no escopo da função

const somaDiferente = (num1, num2) => {
    num1 *= 2
    return num1 + num2
}

console.log(`A soma de 2 + 2 é igual a ${soma(2,2)}`)

// Desestruturação

const aluno = {
    nome_aluno: "Eduardo",
    sobrenome_aluno: "Abrão",
    idade_aluno: 49
}

// const nome_aluno = aluno.nome_aluno
// const sobrenome_aluno = aluno.sobrenome_aluno

const {nome_aluno, sobrenome_aluno, idade_aluno} = aluno
console.log(nome_aluno, sobrenome_aluno)


// Métodos do array
const numeros = [1,2,3,4,5]
// map
// passar por todos os valores e criar um novo array com mesmo tamanho modificando os elementos
const numeros_dobrados = numeros.map((numero) => numero * 2)
// numeros.map(function(numero){
//     return numero*2
// })
console.log(numeros_dobrados)

// filter
const numeros_impares = numeros.filter((numero) => numero % 2 != 0)
console.log(numeros_impares)

// reduce
const somaDoArray = numeros.reduce((anterior, atual) => anterior + atual, 0)
console.log(somaDoArray)



const alunos = [
    { nome: "Ana", nota: 8},
    { nome: "Bruno", nota: 5},
    { nome: "Carlos", nota: 7},
    { nome: "Daniela", nota: 4}
]

// Filtrar e mostrar em tela apenas os alunos aprovados (nota >= 6)

const alunosAprovados = alunos.filter(aluno => aluno.nota >= 6)
console.log(alunosAprovados)

// Usando desestruturação mapeie os alunos aprovados para um texto no seguinte formato:
// Aluno(a) {{Nome}} foi Aprovado(a) com nota {{nota}}.

// Template string, map e desestruturação

const textos = alunosAprovados.map((aluno) => {
    const {nome, nota} = aluno

    return `Aluno(a) ${nome} foi Aprovado(a) com nota ${nota}.` 
})
console.log(textos)