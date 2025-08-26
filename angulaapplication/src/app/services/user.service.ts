import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user :any;
  private apiUrl = environment.apiUrlusers;//'https://localhost:7108/api/Users'; // your backend API

  constructor(private http: HttpClient) {}
  loadInitialUser(): Promise<any> {
    return this.http.get(`${this.apiUrl}/userdata/1`)
      .toPromise()
      .then(data => {
        this.user = data;
      })
      .catch(err => {
        console.error('User init failed', err);
        this.user = null;
      });
  }
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
  return this.http.put<any>(`${this.apiUrl}/change-password/${userId}`, JSON.stringify(password), {
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