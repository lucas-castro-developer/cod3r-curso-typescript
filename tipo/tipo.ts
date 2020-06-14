// String
let nome: string = "João"
console.log(nome)
// nome = 28

// Numbers
let idade: number = 27
// idade = 'Ana'
idade = 27.5
console.log(idade);

// boolean
let possuiHobbies: boolean = false
// possuiHobbies = 1
console.log(possuiHobbies)

// tipos explícitos
let minhaIdade: number
minhaIdade = 27
console.log(typeof minhaIdade)
// minhaIdade= 'idade é 27'

// array
let hobbies: any[] = ["Cozinhar", "Praticar Esportes"]
console.log(hobbies[0])
console.log(typeof hobbies)

hobbies = [100, 200, 300]
// hobbies = 100
console.log(hobbies)

// tuplas
let endereco: [string, number, string] = ["Av. Principal", 99, ""]
console.log(endereco)

endereco = ["Rua importante", 1260, "Bloco C"]
console.log(endereco)

// enums
enum Cor {
    Cinza, // 0
    Verde = 100, // 100
    Azul = 10, // 2
    Laranja,
    Amarelo,
    Vermelho = 100
}

let minhaCor: Cor = Cor.Verde
console.log(minhaCor)

console.log(Cor.Azul)
console.log(Cor.Laranja, Cor.Amarelo)
console.log(Cor.Verde, Cor.Vermelho)

// any
let carro: any = "BMW"
console.log(carro)
carro = { marca: 'BMW', ano: 2019 }
console.log(carro)

// funções
function retornaMeuNome(): string {
    // return minhaIdade
    return nome
}

console.log(retornaMeuNome())

function digaOi(): void {
    console.log('Oi')
    // return minhaIdade    
}

digaOi()

function multiplicar(numA: number, numB: number): number {
    return numA * numB
}

// console.log(multiplicar(2, 'Lucas'))
console.log(multiplicar(2.9, 4))

// tipo função
const teste = function (a: number, b: number): boolean {
    let c = a + b
    console.log(c)
    return false
}

let calculo: (numeroA: number, numeroB: number) => number
// calculo = digaOi
// calculo()
// calculo = {}

calculo = multiplicar
console.log(calculo(5,6))

// objetos
let usuario: { nome: string, idade: number } = {
    nome: 'João',
    idade: 27    
}

console.log(usuario)
// usuario = {}

// usuario = {
//     name: 'Maria',
//     age: 31
// }

usuario = {
    idade: 22,    
    nome: 'Lucas'
}

console.log(usuario)

// Desafio - Bater ponto
// Alias
type Funcionario = {
    supervisores: string[],
    baterPonto: (horas: number) => string
}

let funcionarios: Funcionario = {
    supervisores: ['Ana', 'Fernando'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

let funcionarios2: Funcionario = {
    supervisores: ['Bia', 'Carlos'],
    baterPonto(horario: number): string {
        if(horario <= 8) {
            return 'Ponto normal'
        } else {
            return 'Fora do horário!'
        }
    }
}

console.log(funcionarios.supervisores)
console.log(funcionarios.baterPonto(8))
console.log(funcionarios.baterPonto(9))

// funcionarios = {}

// Union Types
let nota: number | string = 10
console.log(`Minha nota é ${nota}!`)
nota = '10'
console.log(`Minha nota é ${nota}!`)
// nota = true

// Checando tipos
let valor = 30

if (typeof valor === "number") {
    console.log("É um number!")
} else {
    console.log(typeof valor)
}

//never
function falha(msg: string): never {
    throw new Error(msg)
}

const produto = {
    nome: 'Sabão',
    preco: 4,
    validarProduto() {
        if(!this.nome || this.nome.trim().length == 0) {
            falha('Precisa ter um nome!')
        }
        if(this.preco <= 0) {
            falha('Preço inválido!')
        }
    }
}

produto.validarProduto()

let altura = 12
//altura = null

let alturaOpcional: null | number = 12
alturaOpcional = null

type Contato = {
    nome: string,
    tel1: string,
    tel2: string | null
}

const contato1: Contato = {
    nome: "Lucas",
    tel1: '98735345',
    tel2: null
}

console.log(contato1.nome)
console.log(contato1.tel1)
console.log(contato1.tel2)

let podeSerNulo = null
podeSerNulo = 12
console.log(podeSerNulo)
podeSerNulo = 'abc'
console.log(podeSerNulo)

// Desafio - Conta bancária
type ContaBancaria = {
    saldo: number,
    depositar: (valor: number) => void
}

let contaBancaria: ContaBancaria = {
    saldo: 3456,
    depositar(valor: number) {
        this.saldo += valor
    }
}
 
type Correntista = {
    nome: string,
    contaBancaria: ContaBancaria,
    contatos: string[]
}

let correntista: Correntista = {
    nome: 'Ana Silva',
    contaBancaria: contaBancaria,
    contatos: ['34567890', '98765432']
}
 
correntista.contaBancaria.depositar(3000)
console.log(correntista)
