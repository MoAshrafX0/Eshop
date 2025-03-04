import { Component } from '@angular/core';
import { BrandsService } from '../../services/Brands/brands.service';
import { brand } from '../../interfaces/brands';

@Component({
  selector: 'app-brads',
  imports: [],
  templateUrl: './brads.component.html',
  styleUrl: './brads.component.scss'
})
export class BradsComponent {
  brand: brand[] = []
  constructor(private readonly brands: BrandsService) {
    this.getBrands()
  }
  getBrands() {
    this.brands.getAllBrands().subscribe({
      next: (res) => {
        console.log(res);
        this.brand = res.data

      }
    })
  }
}
