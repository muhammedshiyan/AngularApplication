import { Component } from '@angular/core';
import { RouterOutlet,RouterLink, RouterLinkActive,Router  } from '@angular/router';
import { ConfigService } from '../../services/config.service'
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class Layoutcomponent  {
  AppConstants: { [key: string]: any } = {};
  public AppConstantsconfig: any = {};
constructor(private router: Router,private appConfig: ConfigService,private ChangeDetectorRef: ChangeDetectorRef) {}
  ngOnInit(): void {
    // Instead of hardcoding, fetch dynamically
 const AppConstantKeys = [
'appName', 'apiUrl', 'supportEmail'
,'Theme'
,'PageSize'
,'MaxPageSize'  
,'EnableLogging'
,'EnableDebugTools'
,'DefaultLanguage'
,'FileUploadMaxSize'
,'ApiTimeout'
,'RetryAttempts'
,'TokenKey'
,'RefreshTokenKey'
    ];
this.AppConstantsconfig=this.appConfig.config;
console.log(this.AppConstantsconfig);
// AppConstantKeys.forEach(k => {
//   console.log(this.appConfig.config);
//   console.log(k);
//   console.log(this.appConfig.config.hasOwnProperty(k));
//   if (this.appConfig.config && this.appConfig.config.hasOwnProperty(k)) {
//    this.AppConstants[k] = this.appConfig.get(k);
//   }
// });


AppConstantKeys.forEach(k => {
  if (this.appConfig.config && this.appConfig.config.hasOwnProperty(k)) {
   this.AppConstants[k] = this.appConfig.get(k);
  }
});

 // If your component or its child uses OnPush, nudge CD:
    this.ChangeDetectorRef.markForCheck();

    console.log('AppConstants now:', JSON.parse(JSON.stringify(this.AppConstants)));
   this.AppConstants = { ...this.AppConstants };
console.log(this.AppConstants);
  }
  logout() {
    // 🔹 Clear stored token/session
    localStorage.removeItem('token'); 
    sessionStorage.clear();

    // 🔹 Navigate to login
    this.router.navigate(['/login']);
  }
}
