import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://localhost:7108/api/Users'; // your backend API

  constructor(private http: HttpClient) {}

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/roles`);
  }

  registerUser(user: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, user);
  }
  getUserById(userId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/userdata/${userId}`);
  }


onEditProfile(user: any): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/update/${user.userId}`, user);
}

onChangePassword(userId: number, password: string): Observable<any> {
  return this.http.put<any>(`${this.apiUrl}/change-password/${userId}`, password, {
    headers: { 'Content-Type': 'application/json' }
  });
}
  getStorageService(key: string): string | null {
    return localStorage.getItem(key);
  }

  setStorageService(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeStorageService(key: string): void {
    localStorage.removeItem(key);
  }
}