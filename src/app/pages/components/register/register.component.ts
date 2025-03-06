import { Component, inject } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../layout/auth/services/auth.service';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


type NewType = AbstractControl;

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule],

  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  cancelSubscription:Subscription=new Subscription()
  //  apiservices
  isLoading = true
  isLogin= false
  private readonly authService = inject(AuthService)
  private readonly router = inject(Router)
  // FormGroup 
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)]),
    rePassword: new FormControl(null, [Validators.required]),

  }, [this.matchPassword]
  );
  // matchPassword Function

  matchPassword(form: AbstractControl) {
    const password = form.get('password')
    const rePassword = form.get('rePassword')
    if (password?.value == rePassword?.value) {
      return null
    } else {
      return {
        misMatch: true

      }
    }
  }
  
  // submit button
  submit() {
    
    if (this.registerForm.valid) {
      this.isLoading = false
      this.authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.isLoading = true
          if (res.message == 'success') {
            this.router.navigate(['/login'])
          }
        }, 
      })
    } else {

      this.registerForm.markAllAsTouched()
    }
  }
  ngOnDestroy():void{
    this.cancelSubscription.unsubscribe()
  }
}
