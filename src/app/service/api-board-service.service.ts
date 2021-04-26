import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { IBoard } from '../model/board'

const url = '/api/board/all'

@Injectable({
  providedIn: 'root'
})

export class ApiBoardServiceService {
  constructor(private http: HttpClient) {
  }

  // getBoards() {
  //   return this.http.get<IBoard[]>(url, {observe: 'response'});
  // }
  
  getBoards(): Observable<IBoard[]> {
    return this.http.get<IBoard[]>(url);
  }
  
}

