import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandsService {

  constructor(private readonly http:HttpClient) { }
  getAllBrands():Observable<any>{
    return this.http.get<any>(environment.baseUrl+'brands')
  }
}
