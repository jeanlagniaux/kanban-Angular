import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardService } from '../model/card'

const url = 'api/card/'

@Injectable({
  providedIn: 'root'
})

export class ApiCardServiceService {
  constructor(private http: HttpClient) {
  }

  getCardByBoardId(id: number): Observable<CardService[]>{
    return this.http.get<CardService[]>(url + 'board/' + id + '/')
  }

}
