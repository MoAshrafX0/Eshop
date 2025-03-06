import { Component } from '@angular/core';
import { CartService } from '../../shared/services/cart/cart.service';
import { carts } from '../../pages/interfaces/cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cartcard',
  imports: [],
  templateUrl: './cartcard.component.html',
  styleUrl: './cartcard.component.scss'
})
export class CartcardComponent {
  cart!:carts
  cancelSubscription:Subscription=new Subscription()
  constructor(private readonly cartService:CartService){
}
ngOnInit(): void{
  this.getCart()
}
getCart(){
  this.cartService.getCart().subscribe({
    next:(res)=>{
    
      this.cart=res

      
    }
  })
}
ngOnDestroy():void{
  this.cancelSubscription.unsubscribe()
}
}
