import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class PinService {
  private apiUrl = 'https://localhost:7298/api/pin/validate-pin'; 

  constructor() { }

  async validatePin(pin: string) {
    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ pin }),
      });

      if (!response.ok) {
        // If the response status is not OK, throw an error with the response data
        const errorData = await response.json();
        throw errorData;
      }

      // Parse and return the response data as JSON
      return await response.json();
    } catch (error) {
      // Handle error (e.g., network failure or HTTP error)
      throw error;
    }
  }
}
