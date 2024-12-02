import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from "../../auth/login/login.component";
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { LoadingService } from '../../services/loading/loading.service';





@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, CommonModule,],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private router: Router, private loadingService : LoadingService ) {}  

  logout() {
    this.loadingService.setLoading(true);

     sessionStorage.removeItem('hashedPin');
    
     setTimeout(() => {
      this.loadingService.setLoading(false); // Hide spinner
      this.router.navigate(['oneui/login']); 
    }, 10000); 
   }
}
