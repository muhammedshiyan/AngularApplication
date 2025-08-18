import { Routes } from '@angular/router';
import { Logincomponent  } from './pages/login/login.component';
import { Layoutcomponent  } from './pages/layout/layout.component';
import { Dashboardcomponent } from './pages/dashboard/dashboard.component';
import { ProfileComponent  } from './pages/profile/profile.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:Logincomponent},
    {path:'',component:Layoutcomponent,
       children:[
        {
            path:'dashboard',
            component:Dashboardcomponent
        },
        {
        path: 'profile',
        component: ProfileComponent
        }
       ]
    }
];
