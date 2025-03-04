import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly http: HttpClient) { }
  register(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + 'auth/signup' , data)
  }
  login(data: any): Observable<any> {
    return this.http.post(environment.baseUrl + 'auth/signin' , data)
  }
  getUserData(token:string){
    return jwtDecode(token)
  }
}
