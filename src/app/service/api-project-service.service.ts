import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const url = '/api/project/'

@Injectable({
  providedIn: 'root'
})

export class ApiProjectServiceService {
  constructor(private http: HttpClient) {
  }
}

