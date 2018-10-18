import { Routes } from '@angular/router';
import { ActivationModeListComponent } from './activation-mode-list.component';
import { AuthGuard } from '../_guards';

// Route Configuration
export const activationModeListRoutes: Routes = [
    { path: 'activationmodelist', component: ActivationModeListComponent, canActivate: [AuthGuard]}
  ];