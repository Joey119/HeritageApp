import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome';
import { heritageDetailRoutes } from './heritage-detail';
import { heritageListRoutes } from './heritage-list';
import { heritageCommentRoutes } from './comment/comment.component.route';
import { heritageEvaluationRoutes } from './heritage-evaluation';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { UserListComponent } from './user-list/user-list.component';
import { SiteLayoutComponent } from './_layout';
import { heritageActivationRoutes } from './heritage-activation/heritage-activation.route';
import { heritageAnalysisRoutes } from './heritage-analysis/heritage-analysis.route';
import { heritageNavRoutes } from './heritage-nav/heritage-nav.route';
import { activationModeListRoutes } from './activation-mode-list/activation-mode-list.route';
import { aboutUsRoutes } from './about-us/about-us.route';


const appRoutes: Routes = [
      {
        path: '',
        component: SiteLayoutComponent,
        children: [
            { path: '', component: WelcomeComponent, pathMatch: 'full'},
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
            { path: 'users', component: UserListComponent, canActivate: [AuthGuard] },
      
            ...heritageDetailRoutes,
            ...heritageListRoutes,
            ...heritageCommentRoutes,
            ...heritageEvaluationRoutes,
            ...heritageActivationRoutes,
            ...heritageAnalysisRoutes,
            ...heritageNavRoutes,
            ...activationModeListRoutes,
            ...aboutUsRoutes
        ]
      },
      
      // otherwise redirect to home
      { path: '**', redirectTo: '' },
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, { useHash: true });