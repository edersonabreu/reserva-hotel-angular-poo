import { ClienteAbstract } from "./cliente";

export class ClienteVip extends ClienteAbstract{
    constructor(
        nome: string, tipo: string
    ){
        super(nome, tipo)
    }

    override mensagemParabens(): string {
        return 'Muito obrigado por ser nosso cliente VIP!';
    }
}