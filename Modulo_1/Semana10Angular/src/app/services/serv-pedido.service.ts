import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from '../models/card-model';

@Injectable({
  providedIn: 'root'
})
export class ServPedidoService {

  constructor(private http: HttpClient){ }
  itensPedidoLista : card[] = []


  getTotalItensPedido():number{
    return this.itensPedidoLista.length;
  }

  adicionarItemPedido(item:card){
    this.itensPedidoLista.push(item)
    console.log(this.itensPedidoLista)
    this.buscarItensPedido()
  }

  limparPedido(){
    this.itensPedidoLista = []
  }

  removerItemPedido(id:any){
    const itemindex = this.itensPedidoLista.findIndex((item)=> item.id ===id)
    this.itensPedidoLista.splice(itemindex,1)
  }

  buscarItensPedido() : card[]{
    return this.itensPedidoLista
  }

  bancoPedido(): Observable<card[]>{
    return this.http.get<card[]>('http://localhost:3000/listaPedidos');
  }
  adicionarItem(item:card):Observable<card>{
    return this.http
    .post<card>('http://localhost:3000/listaPedidos', item)
  }
  
}
