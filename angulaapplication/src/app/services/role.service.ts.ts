import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceTs {
  private apiUrl = 'https://localhost:7108/api/Users'; // your backend API
  constructor(private http: HttpClient) {}
  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/roles`);
  }
}
