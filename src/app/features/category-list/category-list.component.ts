import { Component } from '@angular/core';
import { Categore } from '../../pages/interfaces/icatergore';
import { CategoresService } from '../../pages/services/categores/categores.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CategoryCardComponent } from "../category-card/category-card.component";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-category-list',
  imports: [CarouselModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.scss'
})
export class CategoryListComponent {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplayHoverPause:true,
    autoplay:true,
    navSpeed: 700,
    navText: ['<i class="fa-solid text-lg fa-backward"></i>', '<i class="fa-solid text-xl fa-forward"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: true
  }


  cancelSubscription:Subscription=new Subscription()
    constructor(private readonly categoresService:CategoresService){
      this.ngOnInit()
    }
    
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

