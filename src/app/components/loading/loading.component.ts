import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading/loading.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { AsyncPipe } from '@angular/common';



@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.css'
})
export class LoadingComponent {
  isLoading = false;

   constructor(private loadingService: LoadingService) {
    // Subscribe to loading state changes
    this.loadingService.getLoadingState().subscribe((loadingState: boolean) => {
      this.isLoading = loadingState;
    });
  }
}
