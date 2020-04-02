let nome = "Sérgio";
let idade = 40;
let ocupado = true;
let filhos = ["Lucas", "Dante"];
console.log(`Meu nome é ${nome}`);
console.log(`Tenho ${idade} anos`);
function somar(a, b) {
    return a + b;
}
//console.log(somar("3" "João"));
// dá erro pois a função somar só permite dados do tipo number
function multiplicar(a, b) {
    return a * b;
}
//console.log(multiplicar("3", "João"));
//não vai dar erro na escrita, pois a função multiplicar não define o tipo e entrada
// mas vai dar erro na hora de rodar
// enum EstadoCivil {
//     casado,
//     solteiro,
//     uniaoEstavel,
//     divorciado,
//     viuvo
// }
//let estCivil:EstadoCivil;
//estCivil = 1;
// determina que estado civil vai ser o da posição 1, casado
//console.log(estCivil);
// vai retornar "1"
var EstadoCivil;
(function (EstadoCivil) {
    EstadoCivil["casado"] = "Casado";
    EstadoCivil["solteiro"] = "Solteiro";
    EstadoCivil["uniaoEstavel"] = "Uni\u00E3o Est\u00E1vel";
    EstadoCivil["divorciado"] = "Divorciado";
    EstadoCivil["viuvo"] = "Vi\u00FAvo";
})(EstadoCivil || (EstadoCivil = {}));
let estCivil;
// variável estCivil vai ser do tipo EstadoCivil, ou seja, enum
estCivil = EstadoCivil.casado;
console.log(estCivil);
// vai retornar "Casado"
let array = [];
console.log(array);
// cria array vazio de itens do EstadoCivil
class Pessoa {
    constructor(nome, idade) {
        this._nome = nome;
        this._idade = idade;
    }
    //não precisa definir visibilidade e tipo de retorno, é predefinido
    get nome() {
        return this._nome;
    }
    //não precisa definir visibilidade e tipo de retorno, é predefinido
    get idade() {
        return this._idade;
    }
}
//interface declara atributos separando-os por vírgula
let shampoo = {
    nome: "Seda",
    categoria: 3,
    id: 4,
    //precisa definir os números
    addAoEstoque: (n) => {
        console.log(`Adicionando shampoo ao estoque: ${n}`);
        return n;
    }
};
//objeto declara atributos separando-os por vírgula
class ProdutosDeViagem {
    //pode definir números ou deixar o tipo
    addAoEstoque(n) {
        console.log(`Adicionando ${n} ao estoque`);
        return n;
    }
}
//classe declara atributos separando-os por ponto-vírgula
let pv = new ProdutosDeViagem();
