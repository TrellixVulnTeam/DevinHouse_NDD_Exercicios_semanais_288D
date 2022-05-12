import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Route, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { PastelComponent } from './pages/pastel/pastel.component';
import { ContentDrinkComponent } from './components/content-drink/content-drink.component';
import { BebidasComponent } from './pages/bebidas/bebidas.component';
import { PedidoComponent } from './pages/pedido/pedido.component';
import { ItemCardapioComponent } from './components/item-cardapio/item-cardapio.component';
import { FormsModule } from '@angular/forms';

const ROUTES: Route[] = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'sobrenos',
    component: AboutComponent
  },
  {
    path:'pastel',
    component: PastelComponent
  },
  {
    path:'bebidas',
    component: BebidasComponent
  },
  {
    path:'pedido',
    component: PedidoComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    HomeComponent,
    AboutComponent,
    PastelComponent,
    ContentDrinkComponent,
    BebidasComponent,
    PedidoComponent,
    ItemCardapioComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
