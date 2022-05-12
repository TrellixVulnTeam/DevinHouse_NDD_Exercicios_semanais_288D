import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { card } from '../models/card-model';

@Injectable({
  providedIn: 'root'
})
export class ServiceBebidaService{
  constructor(private http: HttpClient) { }

  bancoBebidas(): Observable <card[]>{
    return this.http.get<card[]>('http://localhost:3000/listaBebidas')
  }


}
