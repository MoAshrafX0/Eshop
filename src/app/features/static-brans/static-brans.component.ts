import { Component } from '@angular/core';
import { brand } from '../../pages/interfaces/brands';
import { BrandsService } from '../../pages/services/Brands/brands.service';

@Component({
  selector: 'app-static-brans',
  imports: [],
  templateUrl: './static-brans.component.html',
  styleUrl: './static-brans.component.scss'
})
export class StaticBransComponent {
 brand: brand[] = []
  constructor(private readonly brands: BrandsService) {
    this.getBrands()
  }
  getBrands() {
    this.brands.getAllBrands().subscribe({
      next: (res) => {
        this.brand = res.data.slice(0,6)

      }
    })
  }
}
