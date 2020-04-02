export class Tarefa {
    constructor(_descricao, _concluido = false, _prioridade) {
        this._descricao = _descricao;
        this._concluido = _concluido;
        this._prioridade = _prioridade;
    }
    //substitui tudo escrito abaixo
    // private descricao: string;
    // //private id: number;
    // private concluido: boolean;
    // private prioridade: Prioridade;
    // constructor(
    //     descricao: string,
    //     concluido: boolean = false,
    //     prioridade: Prioridade) {
    //     this.descricao = descricao;
    //     this.concluido = concluido;
    //     this.prioridade = prioridade;
    // }
    set concluido(concluido) {
        this._concluido = concluido;
    }
    get concluido() {
        return this._concluido;
    }
}
