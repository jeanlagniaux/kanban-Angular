import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../model/user';

const url = '/api/user/'

@Injectable({
  providedIn: 'root'
})

export class ApiUserServiceService {
  constructor(private http: HttpClient) {
  }
  getUser() {
    return this.http.get<UserService[]>(url + 'all/', { observe: 'response' });
  }
}


