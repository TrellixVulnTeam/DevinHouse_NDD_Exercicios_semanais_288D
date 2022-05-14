import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pag-exercicio4',
  templateUrl: './exercicio4.component.html',
  styleUrls: ['./exercicio4.component.css']
})
export class Exercicio4Component implements OnInit {

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  


    arrayFotos: any = [
      {
        url: "https://marsemfim.com.br/wp-content/uploads/2021/10/ilha-a-venda.jpg",
        description:"Polinésia Francesa"
      },
      {
        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Machu_Picchu%2C_Peru.jpg/1200px-Machu_Picchu%2C_Peru.jpg",
        description:"Machipichu"
      },
      {
        url: "https://www.seumochilao.com.br/wp-content/uploads/2013/05/Deserto-do-Atacama-como-chegar.jpg",
        description:"Deserto do Atacama"
      },
      {
        url: "https://images.adsttc.com/media/images/5c65/7317/284d/d176/a900/0436/medium_jpg/burning-man-1024x593.jpg?1550152464",
        description:"the burning man"
      },
      {
        url: "https://catracalivre.com.br/wp-content/uploads/2016/07/iStock_44108528_SMALL.jpg",
        description:"Republica checa"
      }
    ]
  }
  

