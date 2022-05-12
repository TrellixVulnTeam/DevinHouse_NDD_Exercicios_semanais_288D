import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from '../models/card-model';

@Injectable({
  providedIn: 'root'
})
export class ServPastelService {
  constructor(private http: HttpClient) { }

  bancoPastel(): Observable<card[]>{
    return this.http.get<card[]>('http://localhost:3000/listaComidas');
  }

}
