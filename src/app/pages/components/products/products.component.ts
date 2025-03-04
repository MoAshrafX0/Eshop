import { Component } from '@angular/core';
import { ProductCartComponent } from "../../../features/product-cart/product-cart.component";
import { StaticSliderComponent } from "../../../features/static-slider/static-slider.component";

@Component({
  selector: 'app-products',
  imports: [ProductCartComponent, StaticSliderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

}
