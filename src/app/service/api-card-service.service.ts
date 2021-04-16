import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:8080/api/card/'

@Injectable({
  providedIn: 'root'
})

export class ApiCardServiceService {
  constructor(private http: HttpClient) {
  }
}
