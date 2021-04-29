import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { card, CardService } from '../model/card'

const url = 'api/card/' 
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})

export class ApiCardServiceService {
  constructor(private http: HttpClient) {
  }

  getCardByBoardId(id: number) {
    return this.http.get<CardService[]>(url + 'board/' + id + '/', {observe: 'response' });
  }

  postCreatCard(card: CardService) { 
    console.log(card)
    return this.http.post<CardService[]>(url + 'addCard/', card, {observe: 'response'})
  }
  
 

}
