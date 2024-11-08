import { Injectable } from '@angular/core';
import axios from 'axios';


@Injectable({
  providedIn: 'root'
})
export class PinService {
  private apiUrl = 'https://localhost:7298/api/pin/validate-pin'; 

  constructor() { }

  validatePin(pin: string) {
    return axios.post(this.apiUrl, { pin })
      .then(response => {
        return response.data; // Handle the response data
      })
      .catch(error => {
        throw error.response.data; // Handle errors appropriately
      });
  }
}
