import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './../../layout/auth/services/auth.service';
import { inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router: Router = inject(Router);
  const token = localStorage.getItem('token')!;
  const platform_Id = inject(PLATFORM_ID);
  if (isPlatformBrowser(platform_Id)) {
    try {
      if (token && authService?.getUserData(token)) {
       
        return true
      } else {
        router.navigate(['/login'])
        return false;
      }

    } catch (error) {
      router.navigate(['/login'])
      return false;
    }
  } else {
   
    return false
  }

};
