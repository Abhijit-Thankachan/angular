import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) {

   }
   getData(): Observable<any>{
    return this.http.get('http://localhost:5190/api/Country')
   }
   postData(formData: string): Observable<any>{
    return this.http.post('http://localhost:5190/api/Country',formData)
   }
}

