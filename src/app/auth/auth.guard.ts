import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router, } from '@angular/router';
import { LoadingService } from '../services/loading/loading.service';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loadingService = inject(LoadingService);

  if (typeof window !== 'undefined') {
    
    const storedHashedPin = sessionStorage.getItem('hashedPin'); 
    

    const isLoginPage = route.routeConfig?.path === 'oneui/login';
    

    if (storedHashedPin) {
      if (isLoginPage) {
      
        router.navigate(['oneui']);
        return false;
      }
      return true;
    } else {
      if (isLoginPage) {
        return true; // Allow access to login page if not authenticated
      }
      router.navigate(['oneui/login']); 
      return false; // User is not authenticated
    }
  } else {
    return true;
  }
};
