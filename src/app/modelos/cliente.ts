import { Cliente } from "../interfaces/cliente.interface";

export abstract class ClienteAbstract implements Cliente{
    constructor(
        public nome: string, 
        public tipo: string
    ) {}

    mensagemParabens(): string {
        return '';
    }
}