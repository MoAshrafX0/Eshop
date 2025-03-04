import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { ProductDetaies, Prouduct } from '../../interfaces/products';

@Injectable({
  providedIn: 'root'
})
export class DetailesService {

  constructor(private readonly http:HttpClient) { }
  getProductDeaties(id:string):Observable<ProductDetaies>{
    return this.http.get<ProductDetaies>(environment.baseUrl +`products/${id}`)
  }
}
