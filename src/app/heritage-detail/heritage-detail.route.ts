import { Routes } from '@angular/router';
import { HeritageDetailComponent } from './heritage-detail.component';
import { AuthGuard } from '../_guards';

// Route Configuration
export const heritageDetailRoutes: Routes = [
    { path: 'heritagedetail', component: HeritageDetailComponent, canActivate: [AuthGuard] },
    { path: 'heritagedetail/:id', component: HeritageDetailComponent, canActivate: [AuthGuard] }
  ];