import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private readonly http:HttpClient) { 
  }
  getAllOrders(id:string):Observable<any>{
    return this.http.get(environment.baseUrl+`orders/user/${id}`)
  }
}
