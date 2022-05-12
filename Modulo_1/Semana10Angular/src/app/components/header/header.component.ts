import { Component, OnInit } from '@angular/core';
import { ServPedidoService } from 'src/app/services/serv-pedido.service';

@Component({
  selector: 'esp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  quantidadePedido:number = 0

  constructor(private pedidoService: ServPedidoService) { }

  ngOnInit(): void {
    this.totalItensPedido()
  }

  totalItensPedido(){
    return this.pedidoService.getTotalItensPedido();
  }

}
