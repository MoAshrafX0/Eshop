import { Component, Input } from '@angular/core';
import { IProducts, Prouduct } from '../../pages/interfaces/products';
import { ProductsService } from '../../pages/services/products.service';
import { ProductcardComponent } from '../productcard/productcard.component';
import { SearchPipe } from '../../shared/services/cart/pipes/search.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-cart',
  imports: [ProductcardComponent,SearchPipe,FormsModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss'
})
export class ProductCartComponent {
    constructor(private readonly productsService:ProductsService){
      this.ngOnInit()
    }
    @Input() inHome:boolean=true
    Products:Prouduct[] =[]
    searchterm:string=''
    
   ngOnInit():void{
      this.productsService.getAllProducts().subscribe({
        next:(res:IProducts)=>{
          if(this.inHome){
            // home
            this.Products=res.data.slice(0,10)
          }else{
            // products 
            this.Products=res.data
          }

        },
        
      })
   }
  
}
