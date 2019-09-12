import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http:HttpClient) { }
  url = 'http://localhost:5000/authentication/signIn';
  verify(body):Observable<any>{
    return this.http.post(this.url,body)
  }
}
