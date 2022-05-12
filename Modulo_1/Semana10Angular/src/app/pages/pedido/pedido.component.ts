import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from 'src/app/models/card-model';
import { ServPedidoService } from 'src/app/services/serv-pedido.service';

@Component({
  selector: 'esp-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {
  pedidoList: card[]=[]

  constructor(private pedidoService: ServPedidoService, private http: HttpClient) { }

  ngOnInit(): void {
    this.buscarPedido();
  }
  buscarPedido(){
    this.pedidoList = this.pedidoService.buscarItensPedido();
  }

  removerPedido(item:card){
    this.pedidoService.removerItemPedido(item.id)
  }

  limparLista(){
    this.pedidoService.limparPedido()
    this.buscarPedido();
  }

}
