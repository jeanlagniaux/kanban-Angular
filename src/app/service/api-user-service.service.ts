import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = '/api/user/'

@Injectable({
  providedIn: 'root'
})

export class ApiUserServiceService {
  constructor(private http: HttpClient) {
  }
}

