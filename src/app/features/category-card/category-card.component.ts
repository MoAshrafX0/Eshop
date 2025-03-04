import { Component, Input } from '@angular/core';

import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { Categore } from '../../pages/interfaces/icatergore';
import { CategoresService } from '../../pages/services/categores/categores.service';



@Component({
  selector: 'app-category-card',
  imports: [CarouselModule],

templateUrl: './category-card.component.html',
  styleUrl: './category-card.component.scss'
})
export class CategoryCardComponent {
  constructor(private readonly categoresService:CategoresService){

  }
 catergories:Categore[]=[]
  getCategory(){
    this.categoresService.getAllProducts().subscribe({
      next:(res)=>{
        this.catergories=res
      }
    }) 
  }}



