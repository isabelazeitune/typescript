import "./style.css";
import "material-icons/iconfont/material-icons.css";

import { Tarefa } from "./Tarefa";
import { Prioridade } from "./Prioridade";
import { Lista } from "./Lista"

//console.log("Uêpah!");

let t1 = new Tarefa(
    "Escovar os dentes",
    false,
    Prioridade.alta
);

let t2 = new Tarefa(
    "Lavar prato",
    false,
    Prioridade.alta
);

let t3 = new Tarefa(
    "Sair de casa",
    false,
    Prioridade.alta
);

let lista = new Lista();
lista.addTarefa(t1, t2, t3);
//lista.addTarefa(t1);
//lista.addTarefa(t2);
//lista.addTarefa(t3);

//console.log(lista);
//lista.removeTarefa(t2);
//console.log(lista)

const form: HTMLFormElement = <HTMLFormElement> document.getElementById("form");
const input: HTMLInputElement = <HTMLInputElement> document.getElementById("tf_2do");

form.addEventListener(
    'submit',
    (evt) => {
        evt.preventDefault();
        let t = new Tarefa(input.value, false, Prioridade.baixa);
        lista.addTarefa(t);
        console.log(lista)
    }
)

