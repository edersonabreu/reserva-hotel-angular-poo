import { Component } from '@angular/core';
import { Quarto } from 'src/app/interfaces/quarto.interface';
import { ClienteNomal } from 'src/app/modelos/clienteNormal';
import { ClienteVip } from 'src/app/modelos/clienteVip';
import { QuartoLuxo } from 'src/app/modelos/quartoLuxo';
import { QuartoSimples } from 'src/app/modelos/quartoSimples';
import { Reserva } from 'src/app/modelos/reserva';
import { HotelService } from 'src/app/servicos/hotel.service';

@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent {
  clienteInput = {nome: ''}
  cliente = {nome: ''};
  tipoCliente = 'normal';
  quarto!: Quarto;
  tipoQuarto = '';
  quantidadeDias!: number;

  constructor(public hotelService: HotelService){

  }

  criarCliente(): void{
    if(this.tipoCliente === 'normal'){
      this.cliente = new ClienteNomal(this.clienteInput.nome, 'Normal');
      this.tipoQuarto = 'simples';
    }else if(this.tipoCliente === 'vip'){
      this.cliente = new ClienteVip(this.clienteInput.nome, 'VIP');
      this.tipoQuarto = 'deluxo';
    }
    
    this.hotelService.setCliente(this.cliente);
    this.escolherQuarto();
  }

  escolherQuarto(): void {
    if(this.tipoQuarto === 'simples'){
      this.quarto = new QuartoSimples();
    }else if(this.tipoQuarto === 'deluxo'){
      this.quarto = new QuartoLuxo();
    }

    this.hotelService.setQuarto(this.quarto);
  }

  fazerReserva(): void{
    this.criarCliente();
    let cliente = this.hotelService.getCliente();
    let quarto = this.hotelService.getQuarto();
    let reserva = new Reserva(cliente, quarto, this.quantidadeDias);

    this.hotelService.addReserva(reserva);

    console.log(this.hotelService.getReservas());
  }


}
