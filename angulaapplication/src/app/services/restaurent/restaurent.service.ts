import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurentService {
  private apiUrl = 'https://localhost:7108/api/restaurent'; // your backend API
  constructor(private http: HttpClient) {}
  getMenus(): Observable<any[]> {
    return  this.http.get<any[]>(`${this.apiUrl}/menus`);

  }
  getTestimonials(): Observable<any[]> {
    return  this.http.get<any[]>(`${this.apiUrl}/testimonials`);

  }
}
