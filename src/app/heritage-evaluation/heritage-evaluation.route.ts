import { Routes } from '@angular/router';
import { HeritageEvaluationComponent } from './heritage-evaluation.component';
import { AuthGuard } from '../_guards';

// Route Configuration
export const heritageEvaluationRoutes: Routes = [
    { path: 'heritageevaluation/:id', component: HeritageEvaluationComponent, canActivate: [AuthGuard] }
  ];