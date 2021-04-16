import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BoardService } from '../model/board'

const url = 'http://localhost:8080/api/board/7'

@Injectable({
  providedIn: 'root'
})

export class ApiBoardServiceService {
  constructor(private http: HttpClient) {
  }

  getBoardById(): Observable<BoardService> {
    return this.http.get<BoardService>(url);
  }
  
}

