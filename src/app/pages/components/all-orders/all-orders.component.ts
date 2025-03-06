import { Component } from '@angular/core';
import { OrdersService } from '../../services/orders/orders.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-orders',
  imports: [],
  templateUrl: './all-orders.component.html',
  styleUrl: './all-orders.component.scss'
})
export class AllOrdersComponent {
  orders:any=[]
  
  constructor(private readonly allOrders:OrdersService,
    private readonly route: ActivatedRoute
  ){}
  id!: string;
  ngOnInit() {
this.id=this.route.snapshot.params['id']

  }
  getAllOrders(){
    this.allOrders.getAllOrders(this.id).subscribe({
      next:(res)=>{
        this.orders=res
      }
    })
  }
  }

