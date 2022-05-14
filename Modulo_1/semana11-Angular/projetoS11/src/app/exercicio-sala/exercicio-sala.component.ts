import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pag-exercicio-sala',
  templateUrl: './exercicio-sala.component.html',
  styleUrls: ['./exercicio-sala.component.css']
})
export class ExercicioSalaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  arrayGeneros: any = [
    "Comedia",
    "Terror",
    "Acao",
    "Drama"
]
generoEscolhido : string = "";

}
