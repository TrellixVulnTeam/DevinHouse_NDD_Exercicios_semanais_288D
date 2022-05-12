import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { card } from 'src/app/models/card-model';
import { ServPastelService } from 'src/app/services/serv-pastel.service';
import { ServPedidoService } from 'src/app/services/serv-pedido.service';


@Component({
  selector: 'esp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  foodList: card[] = []

  @Output() adicionaPedido = new EventEmitter();

  constructor(private pastelService: ServPastelService, private pedidoService: ServPedidoService) { }

  ngOnInit(): void {
    this.buscarPasteis()
  }

  buscarPasteis(){
    this.pastelService.bancoPastel().subscribe((resposta: card[]) =>{
      this.foodList= resposta;
    })
  }

  adicionarPedido(item:card){
    const itemPedido = {
      itemP : item

    }
    this.pedidoService.adicionarItemPedido(item)
  }



}
