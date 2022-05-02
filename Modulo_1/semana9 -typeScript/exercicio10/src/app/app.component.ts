import { Component, OnInit } from '@angular/core';
import {Aluno, Nota} from '../assets/exercicio10'

@Component({
  selector: 'esp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends Aluno implements Nota, OnInit{
  title = 'exercicio10';
  mostrar:string;

  media:number;
  passou:boolean;
  Nome:string;
  

  constructor(){
    super("",0)
  }


  cadeira: string;
  ponto: number;
  aluno: Aluno;




  ngOnInit(): void {
  let aluno1: Aluno = new Aluno("Jonas", 7);
        let notas: Nota[] = [
            {
                cadeira: "Geografia",
                ponto: 4,
                aluno: aluno1
            },
            {
                cadeira: "Geografia",
                ponto: 8,
                aluno: aluno1
            },
            {
                cadeira: "Geografia",
                ponto: 3,
                aluno: aluno1
            },
            {
                cadeira: "Geografia",
                ponto: 10,
                aluno: aluno1
            }
        ]
        
        //implemente o resto do código aqui
          
          

        let media:number = 0;
        for (let i = 0; i < notas.length; i++){
          media += notas[i].ponto
        }
        media = media / notas.length;
        aluno1.aprovado(media);
        if(this.aluno.passou){
          this.passou = true;
          this.mostrar = "Aprovado"
        }else{
          this.passou = true;
          this.mostrar = "Reprovado"
        }

      
        

  }
}
