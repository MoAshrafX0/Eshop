import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';
import { BehaviorSubject, Observable } from 'rxjs';
import { carts, idpro } from '../../../pages/interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count:BehaviorSubject<number>=new BehaviorSubject(0)
  constructor(private readonly http: HttpClient) { }
  getCart(): Observable<any> {
    return this.http.get<any>(environment.baseUrl + 'cart')
  }
  addCart(data: idpro): Observable<any> {
    return this.http.post<carts>(environment.baseUrl + 'cart', data
    );

  }
  removeCart(id: any): Observable<any> {
    return this.http.delete<carts>(environment.baseUrl + `cart/${id}`,

    );

  }
  updateCart(id: any, data: any): Observable<any> {
    return this.http.put<any>(environment.baseUrl + "cart/"+id,data
    )

  }
  clearCart():Observable<any>{
    return this.http.delete<any>(environment.baseUrl+'cart')
  }

}
