import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DetailesService } from '../../pages/services/detailes/detailes.service';
import {  Prouduct } from '../../pages/interfaces/products';
import { Subscription } from 'rxjs';


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
    private readonly detailesService: DetailesService
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
  ngOnDestroy():void{
    this.cancelSubscription.unsubscribe()
  }
}
