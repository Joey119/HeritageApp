import { Routes } from '@angular/router';
import { HeritageNavComponent } from './heritage-nav.component';
import { AuthGuard } from '../_guards';

// Route Configuration
export const heritageNavRoutes: Routes = [
    { path: 'heritagenav/:id', component: HeritageNavComponent, canActivate: [AuthGuard] }
  ];