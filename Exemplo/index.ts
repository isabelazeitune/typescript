let nome: string = "Sérgio";
let idade: number = 40;
let ocupado: boolean = true;
let filhos: string[] = ["Lucas", "Dante"];
console.log(`Meu nome é ${nome}`);
console.log(`Tenho ${idade} anos`);



function somar(a: number, b: number): number {
    return a+b;
}

//console.log(somar("3" "João"));
// dá erro pois a função somar só permite dados do tipo number



function multiplicar(a,b) {
    return a*b;
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



enum EstadoCivil {
    casado = "Casado",
    solteiro = "Solteiro",
    uniaoEstavel = "União Estável",
    divorciado = "Divorciado",
    viuvo = "Viúvo"
}

let estCivil:EstadoCivil;
// variável estCivil vai ser do tipo EstadoCivil, ou seja, enum
estCivil = EstadoCivil.casado;
console.log(estCivil);
// vai retornar "Casado"



let array: EstadoCivil[] = [];
console.log(array);
// cria array vazio de itens do EstadoCivil



class Pessoa {
    private _nome: string;
    private _idade: number;

    public constructor(nome: string, idade: number) {
        this._nome = nome;
        this._idade = idade;
    }
    //não precisa definir visibilidade e tipo de retorno, é predefinido

    public get nome(): string {
        return this._nome;
    }
    //não precisa definir visibilidade e tipo de retorno, é predefinido

    public get idade(): number {
        return this._idade;
    }
    //não precisa definir visibilidade e tipo de retorno, é predefinido
}



interface Produto {
    nome: string;
    categoria: number;
    id: number;

    //addAoEstoque:(n:number) => number;
    //a função addAoEstoque recebe um número e retorna outro

    addAoEstoque: (n:number) => void;
    //a função addAoEstoque passa não ter retorno

    //assinatura do método, parâmetro tipo number e sem retorno
}
//interface declara atributos separando-os por vírgula ou ponto-vírgula

let shampoo: Produto = {
    nome: "Seda",
    categoria: 3,
    id: 4,
    //precisa definir os números

    addAoEstoque: (n:number) => {
        console.log(`Adicionando shampoo ao estoque: ${n}`);
        //return n;
    }
}
//objeto declara atributos separando-os por vírgula

class ProdutosDeViagem implements Produto {
    nome: string;
    categoria: number;
    id: 5;
    //pode definir números ou deixar o tipo

    addAoEstoque(n: number) {
        console.log(`Adicionando ${n} ao estoque`);
        //return n;
    }
}
//classe declara atributos separando-os por ponto-vírgula

let pv = new ProdutosDeViagem();