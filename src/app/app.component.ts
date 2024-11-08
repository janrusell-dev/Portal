import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet,  NavigationStart, NavigationEnd, NavigationCancel, NavigationError, Router  } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { FilterpipePipe } from './pipes/filterpipe.pipe';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './auth/login/login.component';
import { LoadingComponent } from './components/loading/loading.component';
import { LoadingService } from './services/loading/loading.service';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, MainComponent,
     FooterComponent, NavbarComponent, FormsModule, FilterpipePipe, LoginComponent, LoadingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',


})
export class AppComponent {
  title : string = "Rd Pawnshop";
  loading = false;

  constructor(private router: Router, private loadingService: LoadingService) {
    // Subscribe to router events
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.loadingService.setLoading(true); // Show spinner on route change start
      } 
      else if (
        event instanceof NavigationEnd || 
        event instanceof NavigationCancel || 
        event instanceof NavigationError
      ) {
        this.loadingService.setLoading(false); // Hide spinner on route change end
      }
    });

    // Listen for changes in loading state
    this.loadingService.getLoadingState().subscribe((loadingState: boolean) => {
      this.loading = loadingState;
    });
  }
}
