import { Component, OnInit } from '@angular/core';
import {Produto} from "../assets/exercicio09"


@Component({
  selector: 'esp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,Produto {
  
  name: string;
  valor: number;
  codigo: number;
  quantidade: number;
  emEstoque: boolean;
  comprar?(produto: Produto, quantidade: number) {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}


// var valorTotal:number = 0;

// class Sofa implements Produto{
//   name: string;
//   valor: number;
//   codigo: number;
//   quantidade: number;
//   emEstoque: boolean;

//   constructor(name:string,valor:number,codigo:number,quantidade:number,emEstoque:boolean){
//     this.name = name;
//     this.valor = valor;
//     this.codigo = codigo;
//     this.quantidade = quantidade
//     this.emEstoque = emEstoque
//     this.comprar();
//   }
//   comprar() {
//     if(this.emEstoque == true){
//       valorTotal = this.quantidade * this.valor
//     }
//   }
  
// }

let sofa = new Sofa("Sofa 4 lugares", 120, 1, 30, true)
