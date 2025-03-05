import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive,  } from '@angular/router';
import { CartService } from '../../shared/services/cart/cart.service';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { TranslationService } from '../../core/interceptors/translate/translate.service';
import { DarkThemeSelectorService } from '../../core/services/Folwbit/darkmode/darkmode.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink,RouterLinkActive,TranslatePipe],
templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  theme=localStorage.getItem('theme')
 @Input() layout!:string
 constructor(private readonly router:Router,
  private readonly cartService:CartService,
  private readonly trans:TranslationService,
  private translate: TranslateService,
  protected darkThemeSelectorService: DarkThemeSelectorService
 ){
  translate.setDefaultLang('en');

 } 
 count:number=0
 ngOnInit():void{
  this.cartService.getCart().subscribe((res)=>{
    this.cartService.count.next(res.numOfCartItems)
  })
  this.cartService.count.subscribe((value)=>{
    console.log(value);
    this.count=value
    
  })
 }
 changeLang(lang: string) {
  this.trans.changeLang(lang);
}
 logout(){
  localStorage.removeItem('token')
  this.router.navigate(['/login'])
  
 }
}
