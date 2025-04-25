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

const produtos = [
    {
      "id": 1,
      "nome": "Produto 1",
      "valor": 695.21
    },
    {
      "id": 2,
      "nome": "Produto 2",
      "valor": 345.01
    },
    {
      "id": 3,
      "nome": "Produto 3",
      "valor": 414.25
    },
    {
      "id": 4,
      "nome": "Produto 4",
      "valor": 239.45
    },
    {
      "id": 5,
      "nome": "Produto 5",
      "valor": 943.85
    },
    {
      "id": 6,
      "nome": "Produto 6",
      "valor": 164.43
    },
    {
      "id": 7,
      "nome": "Produto 7",
      "valor": 822.48
    },
    {
      "id": 8,
      "nome": "Produto 8",
      "valor": 55.17
    },
    {
      "id": 9,
      "nome": "Produto 9",
      "valor": 580.65
    },
    {
      "id": 10,
      "nome": "Produto 10",
      "valor": 609.57
    },
    {
      "id": 11,
      "nome": "Produto 11",
      "valor": 631.37
    },
    {
      "id": 12,
      "nome": "Produto 12",
      "valor": 893.78
    },
    {
      "id": 13,
      "nome": "Produto 13",
      "valor": 86.85
    },
    {
      "id": 14,
      "nome": "Produto 14",
      "valor": 488.91
    },
    {
      "id": 15,
      "nome": "Produto 15",
      "valor": 415.94
    },
    {
      "id": 16,
      "nome": "Produto 16",
      "valor": 661.35
    },
    {
      "id": 17,
      "nome": "Produto 17",
      "valor": 745.36
    },
    {
      "id": 18,
      "nome": "Produto 18",
      "valor": 423.91
    },
    {
      "id": 19,
      "nome": "Produto 19",
      "valor": 437.02
    },
    {
      "id": 20,
      "nome": "Produto 20",
      "valor": 65.86
    },
    {
      "id": 21,
      "nome": "Produto 21",
      "valor": 81.65
    },
    {
      "id": 22,
      "nome": "Produto 22",
      "valor": 484.84
    },
    {
      "id": 23,
      "nome": "Produto 23",
      "valor": 16.24
    },
    {
      "id": 24,
      "nome": "Produto 24",
      "valor": 861.82
    },
    {
      "id": 25,
      "nome": "Produto 25",
      "valor": 10.16
    },
    {
      "id": 26,
      "nome": "Produto 26",
      "valor": 41.64
    },
    {
      "id": 27,
      "nome": "Produto 27",
      "valor": 360.59
    },
    {
      "id": 28,
      "nome": "Produto 28",
      "valor": 798.81
    },
    {
      "id": 29,
      "nome": "Produto 29",
      "valor": 208.83
    },
    {
      "id": 30,
      "nome": "Produto 30",
      "valor": 237.13
    },
    {
      "id": 31,
      "nome": "Produto 31",
      "valor": 929.09
    },
    {
      "id": 32,
      "nome": "Produto 32",
      "valor": 281.07
    },
    {
      "id": 33,
      "nome": "Produto 33",
      "valor": 574.72
    },
    {
      "id": 34,
      "nome": "Produto 34",
      "valor": 195.38
    },
    {
      "id": 35,
      "nome": "Produto 35",
      "valor": 253.1
    },
    {
      "id": 36,
      "nome": "Produto 36",
      "valor": 44.16
    },
    {
      "id": 37,
      "nome": "Produto 37",
      "valor": 380.49
    },
    {
      "id": 38,
      "nome": "Produto 38",
      "valor": 444.72
    },
    {
      "id": 39,
      "nome": "Produto 39",
      "valor": 981.97
    },
    {
      "id": 40,
      "nome": "Produto 40",
      "valor": 525.89
    },
    {
      "id": 41,
      "nome": "Produto 41",
      "valor": 811.49
    },
    {
      "id": 42,
      "nome": "Produto 42",
      "valor": 355.15
    },
    {
      "id": 43,
      "nome": "Produto 43",
      "valor": 80.14
    },
    {
      "id": 44,
      "nome": "Produto 44",
      "valor": 457.49
    },
    {
      "id": 45,
      "nome": "Produto 45",
      "valor": 376.3
    },
    {
      "id": 46,
      "nome": "Produto 46",
      "valor": 294.42
    },
    {
      "id": 47,
      "nome": "Produto 47",
      "valor": 771.09
    },
    {
      "id": 48,
      "nome": "Produto 48",
      "valor": 426.54
    },
    {
      "id": 49,
      "nome": "Produto 49",
      "valor": 970.66
    },
    {
      "id": 50,
      "nome": "Produto 50",
      "valor": 783.69
    },
    {
      "id": 51,
      "nome": "Produto 51",
      "valor": 309.72
    },
    {
      "id": 52,
      "nome": "Produto 52",
      "valor": 113.4
    },
    {
      "id": 53,
      "nome": "Produto 53",
      "valor": 746.27
    },
    {
      "id": 54,
      "nome": "Produto 54",
      "valor": 116.94
    },
    {
      "id": 55,
      "nome": "Produto 55",
      "valor": 963.38
    },
    {
      "id": 56,
      "nome": "Produto 56",
      "valor": 434.21
    },
    {
      "id": 57,
      "nome": "Produto 57",
      "valor": 821.9
    },
    {
      "id": 58,
      "nome": "Produto 58",
      "valor": 596.36
    },
    {
      "id": 59,
      "nome": "Produto 59",
      "valor": 625.44
    },
    {
      "id": 60,
      "nome": "Produto 60",
      "valor": 80.49
    },
    {
      "id": 61,
      "nome": "Produto 61",
      "valor": 907.75
    },
    {
      "id": 62,
      "nome": "Produto 62",
      "valor": 214.88
    },
    {
      "id": 63,
      "nome": "Produto 63",
      "valor": 614.76
    },
    {
      "id": 64,
      "nome": "Produto 64",
      "valor": 144.91
    },
    {
      "id": 65,
      "nome": "Produto 65",
      "valor": 668.01
    },
    {
      "id": 66,
      "nome": "Produto 66",
      "valor": 136.52
    },
    {
      "id": 67,
      "nome": "Produto 67",
      "valor": 506.51
    },
    {
      "id": 68,
      "nome": "Produto 68",
      "valor": 963.21
    },
    {
      "id": 69,
      "nome": "Produto 69",
      "valor": 929.7
    },
    {
      "id": 70,
      "nome": "Produto 70",
      "valor": 553.35
    },
    {
      "id": 71,
      "nome": "Produto 71",
      "valor": 412.27
    },
    {
      "id": 72,
      "nome": "Produto 72",
      "valor": 719.11
    },
    {
      "id": 73,
      "nome": "Produto 73",
      "valor": 441.22
    },
    {
      "id": 74,
      "nome": "Produto 74",
      "valor": 324.44
    },
    {
      "id": 75,
      "nome": "Produto 75",
      "valor": 477.44
    },
    {
      "id": 76,
      "nome": "Produto 76",
      "valor": 626.59
    },
    {
      "id": 77,
      "nome": "Produto 77",
      "valor": 791.92
    },
    {
      "id": 78,
      "nome": "Produto 78",
      "valor": 903.17
    },
    {
      "id": 79,
      "nome": "Produto 79",
      "valor": 773.17
    },
    {
      "id": 80,
      "nome": "Produto 80",
      "valor": 176.15
    },
    {
      "id": 81,
      "nome": "Produto 81",
      "valor": 369.51
    },
    {
      "id": 82,
      "nome": "Produto 82",
      "valor": 995.62
    },
    {
      "id": 83,
      "nome": "Produto 83",
      "valor": 357.08
    },
    {
      "id": 84,
      "nome": "Produto 84",
      "valor": 200.16
    },
    {
      "id": 85,
      "nome": "Produto 85",
      "valor": 851.14
    },
    {
      "id": 86,
      "nome": "Produto 86",
      "valor": 849.56
    },
    {
      "id": 87,
      "nome": "Produto 87",
      "valor": 945.87
    },
    {
      "id": 88,
      "nome": "Produto 88",
      "valor": 946.44
    },
    {
      "id": 89,
      "nome": "Produto 89",
      "valor": 769.68
    },
    {
      "id": 90,
      "nome": "Produto 90",
      "valor": 396.52
    },
    {
      "id": 91,
      "nome": "Produto 91",
      "valor": 37.16
    },
    {
      "id": 92,
      "nome": "Produto 92",
      "valor": 677.88
    },
    {
      "id": 93,
      "nome": "Produto 93",
      "valor": 336.69
    },
    {
      "id": 94,
      "nome": "Produto 94",
      "valor": 537.47
    },
    {
      "id": 95,
      "nome": "Produto 95",
      "valor": 590.67
    },
    {
      "id": 96,
      "nome": "Produto 96",
      "valor": 247.56
    },
    {
      "id": 97,
      "nome": "Produto 97",
      "valor": 79.75
    },
    {
      "id": 98,
      "nome": "Produto 98",
      "valor": 344.23
    },
    {
      "id": 99,
      "nome": "Produto 99",
      "valor": 982.19
    },
    {
      "id": 100,
      "nome": "Produto 100",
      "valor": 93.81
    },
    {
      "id": 101,
      "nome": "Produto 101",
      "valor": 572.2
    },
    {
      "id": 102,
      "nome": "Produto 102",
      "valor": 192.08
    },
    {
      "id": 103,
      "nome": "Produto 103",
      "valor": 234.35
    },
    {
      "id": 104,
      "nome": "Produto 104",
      "valor": 749.8
    },
    {
      "id": 105,
      "nome": "Produto 105",
      "valor": 253.67
    },
    {
      "id": 106,
      "nome": "Produto 106",
      "valor": 319.02
    },
    {
      "id": 107,
      "nome": "Produto 107",
      "valor": 848.29
    },
    {
      "id": 108,
      "nome": "Produto 108",
      "valor": 656.72
    },
    {
      "id": 109,
      "nome": "Produto 109",
      "valor": 469.05
    },
    {
      "id": 110,
      "nome": "Produto 110",
      "valor": 825.69
    },
    {
      "id": 111,
      "nome": "Produto 111",
      "valor": 667.52
    },
    {
      "id": 112,
      "nome": "Produto 112",
      "valor": 519.16
    },
    {
      "id": 113,
      "nome": "Produto 113",
      "valor": 330.34
    },
    {
      "id": 114,
      "nome": "Produto 114",
      "valor": 155.85
    },
    {
      "id": 115,
      "nome": "Produto 115",
      "valor": 652.86
    },
    {
      "id": 116,
      "nome": "Produto 116",
      "valor": 168.08
    },
    {
      "id": 117,
      "nome": "Produto 117",
      "valor": 697.2
    },
    {
      "id": 118,
      "nome": "Produto 118",
      "valor": 978.61
    },
    {
      "id": 119,
      "nome": "Produto 119",
      "valor": 415.73
    },
    {
      "id": 120,
      "nome": "Produto 120",
      "valor": 201.17
    },
    {
      "id": 121,
      "nome": "Produto 121",
      "valor": 228.06
    },
    {
      "id": 122,
      "nome": "Produto 122",
      "valor": 116.5
    },
    {
      "id": 123,
      "nome": "Produto 123",
      "valor": 940.18
    },
    {
      "id": 124,
      "nome": "Produto 124",
      "valor": 474.96
    },
    {
      "id": 125,
      "nome": "Produto 125",
      "valor": 887.13
    },
    {
      "id": 126,
      "nome": "Produto 126",
      "valor": 673.54
    },
    {
      "id": 127,
      "nome": "Produto 127",
      "valor": 350.29
    },
    {
      "id": 128,
      "nome": "Produto 128",
      "valor": 374.84
    },
    {
      "id": 129,
      "nome": "Produto 129",
      "valor": 172.35
    },
    {
      "id": 130,
      "nome": "Produto 130",
      "valor": 515.91
    },
    {
      "id": 131,
      "nome": "Produto 131",
      "valor": 350.94
    },
    {
      "id": 132,
      "nome": "Produto 132",
      "valor": 152.79
    },
    {
      "id": 133,
      "nome": "Produto 133",
      "valor": 597.23
    },
    {
      "id": 134,
      "nome": "Produto 134",
      "valor": 293.46
    },
    {
      "id": 135,
      "nome": "Produto 135",
      "valor": 681.48
    },
    {
      "id": 136,
      "nome": "Produto 136",
      "valor": 121.39
    },
    {
      "id": 137,
      "nome": "Produto 137",
      "valor": 623.0
    },
    {
      "id": 138,
      "nome": "Produto 138",
      "valor": 996.79
    },
    {
      "id": 139,
      "nome": "Produto 139",
      "valor": 701.12
    },
    {
      "id": 140,
      "nome": "Produto 140",
      "valor": 905.59
    },
    {
      "id": 141,
      "nome": "Produto 141",
      "valor": 959.2
    },
    {
      "id": 142,
      "nome": "Produto 142",
      "valor": 41.17
    },
    {
      "id": 143,
      "nome": "Produto 143",
      "valor": 820.5
    },
    {
      "id": 144,
      "nome": "Produto 144",
      "valor": 849.49
    },
    {
      "id": 145,
      "nome": "Produto 145",
      "valor": 208.74
    },
    {
      "id": 146,
      "nome": "Produto 146",
      "valor": 842.99
    },
    {
      "id": 147,
      "nome": "Produto 147",
      "valor": 541.98
    },
    {
      "id": 148,
      "nome": "Produto 148",
      "valor": 618.87
    },
    {
      "id": 149,
      "nome": "Produto 149",
      "valor": 989.35
    },
    {
      "id": 150,
      "nome": "Produto 150",
      "valor": 548.6
    }
  ]

// Filtrar os produtos com valor maior que 100
const produtosMaisCaros = produtos.filter((produto) => produto.valor > 100)
// Calcular o valor total dos produtos filtrados (reduce)
const somaTotal = produtosMaisCaros
                .reduce((anterior, atual) => anterior + atual.valor, 0)
// Exibir o texto abaixo no console usando template string
// "Valor dos produtos mais caros: XXX"
console.log(`Valor dos produtos mais caros: ${somaTotal.toFixed(2)}`)

// Gerar uma string contendo os nomes dos produtos que terminam com 7,
// separados por ; (usar reduce)

const produtosQueTerminamComSete = produtos.filter((produto) => {
    return produto.nome.endsWith("7")
})

const textoConcatenado = produtosQueTerminamComSete
                            .reduce((anterior, atual) => {
                                if(anterior != '') // a partir da segunda vez ele adiciona o ; para separar os nomes
                                    return anterior + ";" + atual.nome
                                else // na primeira vez ele coloca apenas o nome do primeiro produto
                                    return atual.nome
                            }, '')

console.log(textoConcatenado)




// operadores rest x spread

// o rest possibilita a criação de uma função dinamica que posso receber vários parâmetros e tratar como um array
function somar(...numeros){ // rest
    return numeros.reduce((anterior, atual) => anterior + atual, 0)
}

console.log(somar(1,2,3,4,5,6))


const valores = [1,2,3]

// O spread vai espalhar todo o conteúdo de um array dentro de outro
const valoresAdicionados = [4,5,6, ...valores] // spread

console.log(valoresAdicionados)



// operador ternário e operador coalescência nula

const Idade = 17

console.log(Idade >= 18 ? "Maior de idade" : "Menor de idade") //operador ternário


// 0, null, undefined => falso
let usuario = null

// o operador ?? verifica o conteúdo da variável à esquerda, se for verdadeiro, utiliza ele, caso contrário utiliza o conteúdo à direita
let Nome = usuario ?? "Visitante"

console.log(Nome)