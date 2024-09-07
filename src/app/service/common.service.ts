import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment'; 
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  apiUrl = 'http://localhost:4000/api'
  constructor(private http : HttpClient) { }


  
}
