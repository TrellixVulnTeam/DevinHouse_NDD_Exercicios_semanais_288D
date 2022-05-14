import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pag-exercicio9',
  templateUrl: './exercicio9.component.html',
  styleUrls: ['./exercicio9.component.css']
})
export class Exercicio9Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  donoAnimal :any = {
    name : "",
    cpf : "",
    email:"",
    nomeAnimal:"",
    id: 0,
  }

  imprimeValores: boolean = false;

  imprimir(){
    this.imprimeValores = true
    console.log(this.donoAnimal)
  }

}
