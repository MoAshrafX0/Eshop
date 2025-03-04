import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private readonly http: HttpClient) { }

  onlinePayment(id: string, data: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + `orders/checkout-session/${id}?url=${environment.fUrl}`, data
     
    )
  }
  cashPayment(id: string, data: any): Observable<any> {
    return this.http.post<any>(environment.baseUrl + `orders/${id}`, data 
     
    )
  }
}
