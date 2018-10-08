import { Routes } from '@angular/router';
import { HeritageListComponent } from './heritage-list.component';
import { AuthGuard } from '../_guards';

// Route Configuration
export const heritageListRoutes: Routes = [
    { path: 'heritagelist', component: HeritageListComponent, canActivate: [AuthGuard]}
  ];