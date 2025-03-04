import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';

import { NgxSpinnerModule } from "ngx-spinner";
import { FlowbitService } from './core/services/Folwbit/flowbit.service';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet ,NgxSpinnerModule
 ]
,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
constructor(private readonly flowbitService:FlowbitService){}
  title = 'E-Commerce';
  ngOnInit() {
    this.flowbitService.loadFlowbite(flowbite => {
      // Your custom code here
      console.log('Flowbite loaded', flowbite);
    });
    AOS.init();
  }

}

