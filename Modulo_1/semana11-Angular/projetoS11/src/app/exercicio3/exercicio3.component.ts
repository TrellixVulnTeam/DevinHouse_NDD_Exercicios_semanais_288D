import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pag-exercicio3',
  templateUrl: './exercicio3.component.html',
  styleUrls: ['./exercicio3.component.css']
})
export class Exercicio3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arrayList:string[]=['a morte da bezerra', 'perdidos em alto-mar', 'a volta dos que não format']

}
