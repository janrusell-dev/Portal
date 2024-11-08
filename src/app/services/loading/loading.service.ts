import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private loading = new BehaviorSubject<boolean>(false);

  setLoading(loadingState: boolean){
    this.loading.next(loadingState);
  }

  getLoadingState(){
    return this.loading.asObservable();
  }
}
