import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/models/card-model';
import { ServPedidoService } from 'src/app/services/serv-pedido.service';
import { ServiceBebidaService } from 'src/app/services/service-bebida.service';

@Component({
  selector: 'esp-content-drink',
  templateUrl: './content-drink.component.html',
  styleUrls: ['./content-drink.component.scss']
})
export class ContentDrinkComponent implements OnInit {
  drinkList: card[]=[]
  constructor(private bebidaService: ServiceBebidaService,private pedidoService: ServPedidoService ) { }

  ngOnInit(): void {
    this.buscarBebidas();
  }

  buscarBebidas(){
    this.bebidaService
    .bancoBebidas()
    .subscribe((resposta: card[]) =>{
      this.drinkList= resposta;
    });
  }

  adicionarPedido(item:card){
    this.pedidoService.adicionarItemPedido(item)

  }


}
