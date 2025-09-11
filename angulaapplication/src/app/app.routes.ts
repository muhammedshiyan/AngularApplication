import { Routes } from '@angular/router';
import { Logincomponent  } from './pages/login/login.component';
import { Layoutcomponent  } from './pages/layout/layout.component';
import { Dashboardcomponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent  } from './pages/profile/profile.component';
import { Registercomponent } from './pages/register/register.component';
import { ChangePasswordComponent } from './pages/changepassword/changepassword.component';
import { PaymentsuccessComponent } from './pages/paymentsuccess/paymentsuccess.component';
import { PaymentComponent } from './pages/payment/payment.component';


import { RestaurantLandingComponent } from './pages/restaurent/restaurentlanding/restaurentlanding.component';
import { MenuSectionComponent } from './pages/restaurent/menusection/menu-section.component';
import { AboutSectionComponent } from './pages/restaurent/aboutsection/about-section.component';
import { ContactSectionComponent } from './pages/restaurent/contactsection/contact-section.component';

import { Landing } from './pages/restauration/landing/landing';
import { Header } from './pages/restauration/header/header';
import { Hero } from './pages/restauration/hero/hero';
import { Testimonials } from './pages/restauration/testimonials/testimonials';
import { Gallery } from './pages/restauration/gallery/gallery';
import { Contact } from './pages/restauration/contact/contact';
import { About } from './pages/restauration/about/about';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:Logincomponent},
    { path: 'landing', component: RestaurantLandingComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'payment/success', component: PaymentsuccessComponent },
    { path: 'home', component: RestaurantLandingComponent },
    { path: 'menu', component: MenuSectionComponent },
    { path: 'about', component: AboutSectionComponent },
    { path: 'contact', component: ContactSectionComponent },

    { path: 'restauation/about', component: About },
    { path: 'restauation/hero', component: Hero },
    { path: 'restauation/gallery', component: Gallery },
    { path: 'restauation/testimonials', component: Testimonials },
    { path: 'restauation/about', component: About },

    



    //{ path: 'menu/:category', component: MenuComponent }, // Dynamic routing
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
        // {
        // path: 'landing',
        // component: Landing
        // },
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
