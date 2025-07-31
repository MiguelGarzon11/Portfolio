import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Email } from './components/email/email';
import { Skills } from './components/skills/skills';
import { Me } from './components/me/me';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'email', component: Email },
    { path: 'skills', component: Skills },
    { path: "me", component: Me},
    { path: '**', redirectTo: '' }, // Redirect any unknown paths to Home
];
