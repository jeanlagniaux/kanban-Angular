import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:8080/api/project/'

@Injectable({
  providedIn: 'root'
})

export class ApiProjectServiceService {
  constructor(private http: HttpClient) {
  }
}

