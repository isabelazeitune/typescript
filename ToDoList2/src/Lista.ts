import { Tarefa } from "./Tarefa";

export class Lista {
    private _lista: Tarefa[] = [];
    
    //addTarefa(t: Tarefa): Tarefa {
    //    this._lista.push(t);
    //    return t;
    //}

    addTarefa(...t: Tarefa[]) {
        this._lista.push(...t);
    }
    // adiciona várias tarefas ao mesmo tempo ???

    removeTarefa(t: Tarefa) {
        // for(var i = 0; i < this._lista.length; i++) {
        //     if(this._lista[i] == t){
        //            
        //     } else {
        //          alert("Este item não existe.")
        //     }
        // }

        let pos: number = this._lista.indexOf(t);
        if(pos > -1) {
            this._lista.splice(pos,1);
        }
    }


    
    // checkTarefa() {

    // }
}