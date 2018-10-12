import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr'; 
import { AppComponent } from './app.component';
import { HeritageDetailComponent } from './heritage-detail';
import { HeritageListComponent } from './heritage-list';
import { WelcomeComponent } from './welcome';
import { routing } from './app.routing';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_directives';
import { AlertService, AuthenticationService, UserService, HeritageService, FilesService } from './_services';
import { AuthGuard } from './_guards';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDialogComponent, EditDialogComponent, DeleteDialogComponent, HeritageDeleteDialogComponent } from './_dialogs';
import { AppMaterialModule } from './app.material.module';
import { AppPrimeNGModule } from './app.primeng.module';
import { CommentModule } from './app.comment.module';
import { UserListComponent } from './user-list/user-list.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { AppHeaderComponent, AppLayoutComponent, SiteHeaderComponent, SiteFooterComponent, SiteLayoutComponent } from './_layout';
import { HeritageEvaluationComponent } from './heritage-evaluation/heritage-evaluation.component';


@NgModule({
  declarations: [
    AppComponent,
    HeritageDetailComponent,
    HeritageListComponent,
    WelcomeComponent,
    LoginComponent,
    RegisterComponent,
    AlertComponent,
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    HeritageDeleteDialogComponent,
    UserListComponent,
    FileManagerComponent,
    AppHeaderComponent,
    AppLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteLayoutComponent,
    HeritageEvaluationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AppMaterialModule,
    AppPrimeNGModule,
    CommentModule,
    routing,
    ToastrModule.forRoot({ 
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    })
  ],
  entryComponents: [
    AddDialogComponent,
    EditDialogComponent,
    DeleteDialogComponent,
    HeritageDeleteDialogComponent
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
    AuthGuard,
    FilesService,
    HeritageService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
