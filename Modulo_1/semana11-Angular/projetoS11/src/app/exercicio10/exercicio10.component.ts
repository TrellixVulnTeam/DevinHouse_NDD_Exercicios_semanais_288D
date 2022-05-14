import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pag-exercicio10',
  templateUrl: './exercicio10.component.html',
  styleUrls: ['./exercicio10.component.css']
})
export class Exercicio10Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tarefas:string[] = []

  toDo:string = "";

  addTarefa(){
    this.tarefas.push(this.toDo)
  }


}
