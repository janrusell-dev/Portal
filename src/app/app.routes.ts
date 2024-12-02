import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { MainComponent } from './components/main/main.component';
import { authGuard } from './auth/auth.guard';


export const routes: Routes = [
    {path : "oneui", component: MainComponent, canActivate: [authGuard] },
    {path : "oneui/login", component: LoginComponent, canActivate: [authGuard] },
    { path: '**', redirectTo: 'oneui/login' },

];
