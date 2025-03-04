import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-static-slider',
  imports: [CarouselModule],
  templateUrl: './static-slider.component.html',
  styleUrl: './static-slider.component.scss'
})
export class StaticSliderComponent {
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
 
}
