import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';

@Component({
  selector: 'app-all-orders',
  imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent {
  constructor(private readonly orders:OrdersService){
    this.order()
  }
  ordersList:any[]=[];
  order(){
    this.orders.getAllOrders().subscribe({
      next:(res)=>{
        console.log(res);
        
        this.ordersList=res
      },
      

    })
}
}