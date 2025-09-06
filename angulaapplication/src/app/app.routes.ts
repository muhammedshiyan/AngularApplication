import { Routes } from '@angular/router';
import { Logincomponent  } from './pages/login/login.component';
import { Layoutcomponent  } from './pages/layout/layout.component';
import { Dashboardcomponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent  } from './pages/profile/profile.component';
import { Landing  } from './pages/landing/landing.component';
import { Registercomponent } from './pages/register/register.component';
import { ChangePasswordComponent } from './pages/changepassword/changepassword.component';
import { PaymentsuccessComponent } from './pages/paymentsuccess/paymentsuccess.component';
import { PaymentComponent } from './pages/payment/payment.component';
export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:Logincomponent},
    { path: 'payment', component: PaymentComponent },
    { path: 'payment/success', component: PaymentsuccessComponent },
    {path:'',component:Layoutcomponent,
       children:[
        {
            path:'dashboard',
            component:Dashboardcomponent
        },
        {
        path: 'profile',
        component: ProfileComponent
        },
        {
        path: 'landing',
        component: Landing
        },
        {
        path: 'register',
        component: Registercomponent
        },
        {
        path: 'changepassword',
        component: ChangePasswordComponent
        }
       ]
    }
];
