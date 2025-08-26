import 'zone.js'; 
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http'; 
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { AuthInterceptor } from './app/auth.interceptor';
import { ConfigService } from './app/services/config.service';
import { provideAppInitializer, inject } from '@angular/core';
import { APP_INITIALIZER } from '@angular/core';
import { UserService } from './app/services/user.service';

bootstrapApplication(App, {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withFetch(),
      withInterceptors([AuthInterceptor])
    ),
    ConfigService,
      UserService,
    // ✅ Correct usage for Angular 16+
    provideAppInitializer(() => {
      const configService = inject(ConfigService);
      return configService.loadConfig(); // return the promise directly
    })
    , provideAppInitializer(() => {
      const userService = inject(UserService);
      return userService.loadInitialUser(); // should return Promise or void
    })
  ]
}).catch(err => console.error(err));
