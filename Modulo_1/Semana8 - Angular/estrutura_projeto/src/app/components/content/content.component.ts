import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { card } from 'src/app/models/card-model';
import { drink_mock } from 'src/app/utils/drink-mock';
import { food_mock } from 'src/app/utils/food-mock';


@Component({
  selector: 'esp-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  foodList: card[] = []
  drinkList: card[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<card[]>('http://localhost:3000/listaComidas').subscribe((resultado) =>{
      this.foodList = resultado
    })

    this.http.get<card[]>('http://localhost:3000/listaBebidas').subscribe((resultado) =>{
      this.drinkList = resultado
    })
    
  }

  clickAlert(){
    alert('Deseja comprar este item?')
  }
}
