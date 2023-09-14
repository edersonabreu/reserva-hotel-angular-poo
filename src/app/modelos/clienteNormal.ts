import { ClienteAbstract } from "./cliente";

export class ClienteNomal extends ClienteAbstract{
    constructor(
        nome: string,
        tipo: string
    ){
        super(nome, tipo)
    }
}