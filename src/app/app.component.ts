import { Component, OnInit, ApplicationModule } from '@angular/core';
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

export class AppComponent implements OnInit {
  constructor(private loadingService: LoadingService) {}

  ngOnInit(): void {
    // Show the spinner globally when the app is loading
    this.loadingService.setLoading(true);

    // Simulate app initialization or data loading
    setTimeout(() => {
      this.loadingService.setLoading(false);  // Hide the spinner after initialization
    }, 600); // You can replace this with real async calls like HTTP requests
  }
}
