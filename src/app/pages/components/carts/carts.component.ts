import { Component } from '@angular/core';
import { CartService } from '../../../shared/services/cart/cart.service';
import { carts } from '../../interfaces/cart';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-carts',
  imports:[RouterLink],



  templateUrl: './carts.component.html',
  styleUrl: './carts.component.scss'
})
export class CartsComponent {
  cart!: carts
  constructor(
    private readonly cartService: CartService,
    private readonly toastr: ToastrService
  ) {
  }
  ngOnInit(): void {
    this.getCart()
  }
  getCart() {

    this.cartService.getCart().subscribe({
      next: (res) => {
        this.cart = res
      }
    })
  }
  removeItem(id: string) {
    this.cartService.removeCart(id).subscribe({
      next: (res) => {
        this.cart = res
        this.cartService.count.next(res.numOfCartItems)
        this.toastr.success(res.message,res.status);
        

      }, 
    })
  }


  updateCart(id: string, count: number) {
    const data ={
      count:count.toString()
    }
    
    this.cartService.updateCart(id, data).subscribe({
      
      next: (res) => {
        this.cart=res
    
        this.toastr.success('Hello world!', 'Toastr fun!');
      }, 
    })
  }
  clearCart(){
    this.cartService.clearCart().subscribe({
      next:(res)=>{
        if(res='success'){
          this.getCart()
          this.cartService.count.next(0)
          this.toastr.success(res.message);
         
      }
    }
    })
  }
}
