// src/app/services/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, map } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  getAccessToken(): string | null {
    return localStorage.getItem('token');
  }

  setAccessToken(token: string) {
    localStorage.setItem('token', token);
  }

  login(credentials: { username: string; password: string }): Observable<any> {
    return this.http.post<{ accessToken: string; refreshToken: string }>('/api/login', credentials)
      .pipe(
        tap(res => this.setAccessToken(res.accessToken))
      );
  }

  refreshToken(): Observable<string> {
    return this.http.post<{ accessToken: string }>('/api/refresh-token', {})
      .pipe(
        tap(res => this.setAccessToken(res.accessToken)),
        map(res => res.accessToken)
      );
  }

  logout() {
    localStorage.removeItem('token');
    // optionally call /logout API to delete refresh token
  }
}
