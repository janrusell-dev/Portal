import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router, } from '@angular/router';
import { LoadingService } from '../services/loading/loading.service';


export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const loadingService = inject(LoadingService);

  if (typeof window !== 'undefined') {
    const storedHashedPin = sessionStorage.getItem('hashedPin'); 

    const isLoginPage = route.routeConfig?.path === 'login';
    

    if (storedHashedPin) {
      if (isLoginPage) {
        // If authenticated and trying to access login, redirect to home
        router.navigate(['/']); // Adjust to your desired route
        return false; // Prevent access to the login page
      }
      return true; // User is authenticated, allow access to other routes
    } else {
      if (isLoginPage) {
        return true; // Allow access to login page if not authenticated
      }
      router.navigate(['/login']); // Redirect to login if not authenticated
      return false; // User is not authenticated
    }
  } else {
    // If not in browser, allow access (modify based on your requirements)
    return true;
  }
};
