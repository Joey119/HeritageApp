import { Routes } from '@angular/router';
import { HeritageAnalysisComponent } from './heritage-analysis.component';
import { AuthGuard } from '../_guards';

// Route Configuration
export const heritageAnalysisRoutes: Routes = [
    { path: 'heritageanalysis/:id', component: HeritageAnalysisComponent, canActivate: [AuthGuard] }
  ];