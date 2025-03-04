import { Component, HostBinding, HostListener, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../features/navbar/navbar.component";
import { FooterComponent } from "../../features/footer/footer.component";

@Component({
  selector: 'app-main',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  goToTop() {
    window.scrollTo(0, 0);
  }
  showBtn: boolean = false;
  @HostListener('window:scroll') scrollTop() {
    let scroll = document.documentElement.scrollTop;
    if (scroll > 500) {
      this.showBtn = true;
    } else {
      this.showBtn = false;
    }
  }
}
