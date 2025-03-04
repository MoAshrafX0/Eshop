import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private readonly http:HttpClient) 
  { 

  }
  forgetPassword(data:any):Observable<any>{
    return this.http.post(environment.baseUrl +'auth/forgotPasswords',data)
  }
  resetCode(data:any):Observable<any>{
    return this.http.post(environment.baseUrl +'auth/verifyResetCode',data)
  }
  updatePassword(data:any):Observable<any>{
    return this.http.put(environment.baseUrl +'auth/resetPassword',data)
  }
}
