import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Email } from './components/email/email';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'email', component: Email },
    { path: '**', redirectTo: '' }
];
