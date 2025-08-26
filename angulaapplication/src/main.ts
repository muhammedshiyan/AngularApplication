import 'zone.js'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'; 
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AuthInterceptor } from '../src/app/interceptors/auth.interceptor';
import { ConfigService } from './app/services/config.service';
import { UserService } from './app/services/user.service';
import { provideAppInitializer, inject } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),  
    provideHttpClient(
     // withFetch()
      //,withInterceptors([AuthInterceptor])
    ),
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    ConfigService,
    UserService,
    provideAppInitializer(() => inject(ConfigService).loadConfig()),
    provideAppInitializer(() => inject(UserService).loadInitialUser())
  ]
}).catch(err => console.error(err));
