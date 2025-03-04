import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RestService } from '../../layout/auth/services/forget/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forget-password',
  imports: [ReactiveFormsModule],

  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {
  constructor(private readonly restService: RestService,
    private readonly router:Router
  ) { }
  isLoading = true
  step: number = 0;

  restForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
  });
  verfaiyForm: FormGroup = new FormGroup({

    resetCode: new FormControl(null, [Validators.required, Validators.maxLength(6)]),
  });
  newPasswordForm: FormGroup = new FormGroup({

    email: new FormControl(null, [Validators.required, Validators.email]),
    newPassword: new FormControl(null, Validators.required),
  })
  rest() {
    if (this.restForm.valid) {
      this.isLoading = false
      this.restService.forgetPassword(this.restForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = true
          this.step = 1;
        },
        

      })

    }


  }
  rest2() {
    console.log(this.verfaiyForm.value);

    if (this.verfaiyForm.valid) {
      this.isLoading = false
      this.restService.resetCode(this.verfaiyForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = true
          this.step = 2;
          this.newPasswordForm.get('email')?.patchValue(this.restForm.get('email')?.value)
        },
        

      })

    }
  }
  rest3() {
    console.log(this.newPasswordForm.value);
    
    if (this.newPasswordForm.valid) {
      this.isLoading = false
      this.restService.updatePassword(this.newPasswordForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isLoading = true,
          this.router.navigate(['/home'])

        },
        

      })

    }

  }
}
