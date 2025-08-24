import 'zone.js'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'; 
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AuthInterceptor } from './app/auth.interceptor';
import { ConfigService } from './app/services/config.service';
import { provideAppInitializer, inject } from '@angular/core';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([AuthInterceptor])
    ),
    ConfigService,
    // ✅ Correct usage for Angular 16+
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.loadConfig(); // return the promise directly
    })
  ]
}).catch(err => console.error(err));
