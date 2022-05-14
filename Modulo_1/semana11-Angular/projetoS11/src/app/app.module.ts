import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Exercicio1Component } from './exercicio1/exercicio1.component';
import { ExercicioSalaComponent } from './exercicio-sala/exercicio-sala.component';
import { Exercicio2Component } from './exercicio2/exercicio2.component';
import { Exercicio3Component } from './exercicio3/exercicio3.component';
import { Exercicio4Component } from './exercicio4/exercicio4.component';
import { Exercicio5Component } from './exercicio5/exercicio5.component';
import { Exercicio9Component } from './exercicio9/exercicio9.component';
import { Exercicio6Component } from './exercicio6/exercicio6.component';
import { Exercicio8Component } from './exercicio8/exercicio8.component';
import { Exercicio10Component } from './exercicio10/exercicio10.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercicio1Component,
    ExercicioSalaComponent,
    Exercicio2Component,
    Exercicio3Component,
    Exercicio4Component,
    Exercicio5Component,
    Exercicio9Component,
    Exercicio6Component,
    Exercicio8Component,
    Exercicio10Component

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
