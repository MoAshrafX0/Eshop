import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../layout/auth/services/auth.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,RouterLink],


templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  isLoading=true
  cancelSubscription:Subscription=new Subscription()
    private readonly auth =inject(AuthService)
    private readonly router = inject(Router)
    userData :any
  
    loginForm: FormGroup = new FormGroup({
      
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required,   ]),
    })
    login(){
      if (this.loginForm.valid) {
        this.isLoading = false
        this.auth.login(this.loginForm.value).subscribe({
          next: (res) => {
            console.log(res);
            this.isLoading = true
            if (res.message == 'success') {
              localStorage.setItem('token',res.token)
             this.userData=this.auth.getUserData(res.token)
             console.log(this.userData);
             
              this.router.navigate(['/home'])
              return res.token 
            }
          },
    }
        )
      }
    }
    ngOnDestroy():void{
      this.cancelSubscription.unsubscribe()
    }
}
