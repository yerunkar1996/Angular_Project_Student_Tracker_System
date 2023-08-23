import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private http6: HttpClient) { }

  api_url="http://localhost:3000/students"

  getDetailsFromAPI(){
      return this.http6.get(this.api_url)
  }
}
