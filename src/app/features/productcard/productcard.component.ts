import { Component, Input } from '@angular/core';
import { Prouduct } from '../../pages/interfaces/products';

import { RouterLink } from '@angular/router';
import { CartService } from '../../shared/services/cart/cart.service';
import { idpro } from '../../pages/interfaces/cart';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
import { StockStatusPipe } from '../../shared/services/cart/pipes/stock-status.pipe';

@Component({
  selector: 'app-productcard',
  imports: [RouterLink,StockStatusPipe],

  templateUrl: './productcard.component.html',
  styleUrl: './productcard.component.scss'
})
export class ProductcardComponent {
  constructor(private readonly cartService: CartService,
        private readonly toastr: ToastrService
    
  ) { }
  @Input() product!: Prouduct
  cancelSubscription:Subscription=new Subscription()

  addCart(id: string) {
    const data = {
      productId: id,
    };



    this.cartService.addCart(data).subscribe({
      next: (res) => {
        console.log(this.cartService.count);
        this.cartService.count.next(res.numOfCartItems);
        
        this.toastr.success(res.message,res.status);
        

      },

    })
  }
  ngOnDestroy():void{
    this.cancelSubscription.unsubscribe()
  }
}
