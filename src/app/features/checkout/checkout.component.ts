import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CheckoutService } from '../../pages/services/checkout/checkout.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule,],


  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  constructor(private readonly checkoutService: CheckoutService, 
    private readonly route: ActivatedRoute,
  private readonly router:Router) {

  }
  user:string=''
  cancelSubscription:Subscription=new Subscription()
  id!: string;
  ngOnInit() {
this.id=this.route.snapshot.params['id']

  }
  isLoding: boolean = true;
  // FormGroup 
  orderForm: FormGroup = new FormGroup({
    details: new FormControl(null, Validators.required),
    phone: new FormControl(null, Validators.required),
    city: new FormControl(null, Validators.required),
    type: new FormControl('cash')
  });
  placeOrder() {
    if (this.orderForm.valid) {
      this.isLoding = false
      const type = this.orderForm.value.type;
      delete this.orderForm.value.type;
      const data = {
        shippingAddress: this.orderForm.value
      }
        if (type == 'cach') {
        
          // cash order
          this.checkoutService.cashPayment(this.id, data).subscribe({
            next: (res) => {
              this.user=res.data.user
              
              this.router.navigate([`/allorders/${this.user}`])
            this.isLoding = false
          },
          
        })
      } else {
        // online order
        this.checkoutService.onlinePayment(this.id, data).subscribe({
          next: (res) => {
            open(res.session.url,'_self')
            this.isLoding = false
          },
          
        })
      }
    }
  }
  ngOnDestroy():void{
    this.cancelSubscription.unsubscribe()
  }
    }
  


