import { Component } from '@angular/core';

import { CategoryCardComponent } from "../../../features/category-card/category-card.component";
import { CategoresService } from '../../services/categores/categores.service';
import { Categore } from '../../interfaces/icatergore';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-categores',
  imports: [ ],
  templateUrl: './categores.component.html',
  styleUrl: './categores.component.scss'
})
export class CategoresComponent {
constructor(private readonly categoresService:CategoresService){
      this.ngOnInit()
    }
    cancelSubscription:Subscription=new Subscription();
    categore !:Categore[] 
    
   ngOnInit():void{
      this.categoresService.getAllProducts().subscribe({
        next:(res)=>{
            
            this.categore=res.data
  
        },
        
      })
   }
   ngOnDestroy():void{
     this.cancelSubscription.unsubscribe()
   }
}
