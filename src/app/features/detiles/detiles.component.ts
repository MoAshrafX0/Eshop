import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailesService } from '../../pages/services/detailes/detailes.service';
import {  Prouduct } from '../../pages/interfaces/products';
import { Subscription } from 'rxjs';
import { CartService } from '../../shared/services/cart/cart.service';


@Component({
  selector: 'app-detiles',
  imports: [],
 
templateUrl: './detiles.component.html',
  styleUrl: './detiles.component.scss'
})
export class DetilesComponent {
  id: string = ''
  cancelSubscription:Subscription=new Subscription()
  detales: Prouduct = {} as Prouduct;
  constructor(private readonly activatedRoute: ActivatedRoute,
    private readonly detailesService: DetailesService,
    private readonly cartService:CartService
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res) => {
      this.id = res['id'];
      this.getDetailes(this.id)
    })
  }
  getDetailes(id: string) {
    this.detailesService.getProductDeaties(id).subscribe({
      next: (res) => {
        this.detales   = res.data;
       
        
      },
      
    })
  }
  addCart(id: string) {
    const data = {
      productId: id,
    };



    this.cartService.addCart(data).subscribe({
      next: (res) => {
        this.cartService.count.next(res.numOfCartItems);
        
      }

    })
  }
 
  ngOnDestroy():void{
    this.cancelSubscription.unsubscribe()
  }
}
