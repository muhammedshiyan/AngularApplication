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
import { Dashboard } from './pages/restauration/dashboard/dashboard'; 

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

    { path: 'restauration/about', component: About },
    { path: 'restauration/hero', component: Hero },
    { path: 'restauration/gallery', component: Gallery },
    { path: 'restauration/testimonials', component: Testimonials },
    { path: 'restauration/about', component: About },
    { path: 'restauration/header', component: Header },
    { path: 'restauration/landing', component: Landing },
    { path: 'restauration/contact', component: Contact },
    { path: 'restauration/dashboard', component: Dashboard },

    



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
