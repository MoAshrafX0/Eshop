import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { IProducts, Prouduct } from '../../interfaces/products';
import { ProductCartComponent } from '../../../features/product-cart/product-cart.component';

import { CategoryListComponent } from "../../../features/category-list/category-list.component";
import { StaticSliderComponent } from "../../../features/static-slider/static-slider.component";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  imports: [ProductCartComponent, CategoryListComponent, StaticSliderComponent],
 
templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
  cancelSubscription:Subscription=new Subscription()
  constructor(private readonly productsService:ProductsService){
    this.ngOnInit()
  }
  Products!:Prouduct[]
 ngOnInit():void{
    this.productsService.getAllProducts().subscribe({
      next:(res:IProducts)=>{
        this.Products=res.data
      },
      
    })
 }
 ngOnDestroy():void{
  this.cancelSubscription.unsubscribe()
}
}
