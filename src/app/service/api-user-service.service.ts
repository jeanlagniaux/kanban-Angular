import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = 'http://localhost:8080/api/user/'

@Injectable({
  providedIn: 'root'
})

export class ApiUserServiceService {
  constructor(private http: HttpClient) {
  }
}

