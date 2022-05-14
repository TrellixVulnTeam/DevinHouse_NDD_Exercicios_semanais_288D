import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pag-exercicio6',
  templateUrl: './exercicio6.component.html',
  styleUrls: ['./exercicio6.component.css']
})
export class Exercicio6Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  pessoa:any = {
    name : "",
    cpf : "",
    dataAniversario: 0,
    senha : ""
  }

  imprimeValores: boolean = false;

  imprimir(){
    this.imprimeValores = true
    console.log(this.pessoa)
  }
}
