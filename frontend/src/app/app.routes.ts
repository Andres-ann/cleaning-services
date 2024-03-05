import { Routes } from '@angular/router';
import { HomeComponent } from './templates/home/home.component';
import { AboutComponent } from './templates/about/about.component';
import { ServicesComponent } from './templates/services/services.component';
import { CovidComponent } from './templates/covid/covid.component';
import { ContactComponent } from './templates/contact/contact.component';

export const routes: Routes = [
   { path: '', component: HomeComponent },
   { path: 'about', component: AboutComponent },
   { path: 'services', component: ServicesComponent },
   { path: 'covid', component: CovidComponent },
   { path: 'contact', component: ContactComponent },
   { path: '**', redirectTo: '' },
];
