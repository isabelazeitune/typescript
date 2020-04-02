import { Prioridade } from './Prioridade'

export class Tarefa {

    constructor(
        private _descricao: string,
        private _concluido: boolean = false,
        private _prioridade: Prioridade
    ) { }
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

    public set concluido (concluido: boolean) {
        this._concluido = concluido;
    }

    public get concluido(): boolean {
        return this._concluido;
    }
}