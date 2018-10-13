import { Routes } from '@angular/router';
import { HeritageActivationComponent } from './heritage-activation.component';
import { AuthGuard } from '../_guards';

// Route Configuration
export const heritageActivationRoutes: Routes = [
    { path: 'heritageeactivation/:id', component: HeritageActivationComponent, canActivate: [AuthGuard] }
  ];