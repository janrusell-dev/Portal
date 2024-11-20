import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PinService } from '../../services/pin/pin.service';
import { LoadingService } from '../../services/loading/loading.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  pin: string = '';

  constructor(private pinService: PinService, private loadingService: LoadingService) { }

// Method to handle form submission
onSubmit() {
  this.loadingService.setLoading(true); // Start loading spinner

  this.pinService.validatePin(this.pin)
    .then(data => {
      console.log('API Response:', data);
      const hashedPin = data.hashedPin;
      sessionStorage.setItem('hashedPin', hashedPin);
      
      // Use a timeout to ensure the spinner shows before the alert
      setTimeout(() => {

        // Start loading spinner before redirecting
        this.loadingService.setLoading(true); 
        setTimeout(() => {
          window.location.href = "/"; // Navigate to homepage
        }, 800); // Show for a short duration before navigating
      }, 100); // A short delay to show spinner before alert
    })
    .catch(error => {
      this.loadingService.setLoading(false); // Stop loading spinner
      alert("Invalid Pin!");
      console.error('Invalid PIN:', error);
    })
    .finally(() => {
      this.loadingService.setLoading(false); // Reset loading state
    });
}
}
