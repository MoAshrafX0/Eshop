import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../layout/auth/services/auth.service';
import { inject } from '@angular/core';


export const logGuard: CanActivateFn = (route, state) => {
   const authService = inject(AuthService);
    const router: Router = inject(Router);
    const token = localStorage.getItem('token')!;
    if(!token||!authService.getUserData(token) ){
      return true
     }else{
      router.navigate(['/home'])
      return false
     }

};
