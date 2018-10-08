import { Routes } from '@angular/router';
import { CommentComponent } from './comment.component';
import { AuthGuard } from '../_guards';

// Route Configuration
export const heritageCommentRoutes: Routes = [
    { path: 'heritagedecomment/:id', component: CommentComponent, canActivate: [AuthGuard] }
  ];