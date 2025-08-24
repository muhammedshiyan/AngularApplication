// src/app/services/config.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({ providedIn: 'root' })
export class ConfigService {
  private config: any;

  constructor(private http: HttpClient) {}

   // Load configuration from API
  loadConfig(): Promise<void> {
    return firstValueFrom(this.http.get<Record<string, any>>(`${environment.baseApiUrl}/config`))
      .then(cfg => {
        this.config = cfg; // store globally in the service
        console.log(cfg);
      })
      .catch(err => {
        console.error('Failed to load config:', err);
      });
  }

  // Get a config value by key
  get(key: string, defaultValue: any = null): any {
    return this.config[key] ?? defaultValue;
  }

}
