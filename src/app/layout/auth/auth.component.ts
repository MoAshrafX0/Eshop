import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../features/navbar/navbar.component";
import { FooterComponent } from "../../features/footer/footer.component";

@Component({
  selector: 'app-auth',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss'
})
export class AuthComponent {

}
