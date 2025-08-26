import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshSubject = new BehaviorSubject<string | null>(null);

  constructor(private authService: AuthService) {
    console.log('AuthInterceptor constructor called');
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getAccessToken();
    let authReq = token ? req.clone({ setHeaders: { Authorization: `Bearer ${token}` } }) : req;

    console.log('AuthInterceptor intercept called for URL:', req.url);

    return next.handle(authReq).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshSubject.next(null);

            return this.authService.refreshToken().pipe(
              switchMap(newToken => {
                this.isRefreshing = false;
                this.refreshSubject.next(newToken);
                const newReq = req.clone({ setHeaders: { Authorization: `Bearer ${newToken}` } });
                return next.handle(newReq);
              })
            );
          } else {
            return this.refreshSubject.pipe(
              filter(token => token != null),
              take(1),
              switchMap(newToken => {
                const newReq = req.clone({ setHeaders: { Authorization: `Bearer ${newToken!}` } });
                return next.handle(newReq);
              })
            );
          }
        }
        return throwError(() => error);
      })
    );
  }
}
