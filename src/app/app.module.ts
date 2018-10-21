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
import { AlertService, AuthenticationService, UserService, HeritageService, FilesService, ActivationModeService, EvaluationOptionService, EvaluatorTypeService, HeritageEvaluationService, HeritageGameAnalysisService } from './_services';
import { AuthGuard } from './_guards';
import { ErrorInterceptor, JwtInterceptor } from './_helpers';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDialogComponent, EditDialogComponent, DeleteDialogComponent, HeritageDeleteDialogComponent, ActivationModeAddDialogComponent, ActivationModeDeleteDialogComponent, ActivationModeEditDialogComponent } from './_dialogs';
import { AppMaterialModule } from './app.material.module';
import { AppPrimeNGModule } from './app.primeng.module';
import { CommentModule } from './app.comment.module';
import { UserListComponent } from './user-list/user-list.component';
import { FileManagerComponent } from './file-manager/file-manager.component';
import { AppHeaderComponent, AppLayoutComponent, SiteHeaderComponent, SiteFooterComponent, SiteLayoutComponent } from './_layout';
import { HeritageEvaluationComponent } from './heritage-evaluation/heritage-evaluation.component';
import { HeritageNavComponent } from './heritage-nav/heritage-nav.component';
import { HeritageActivationComponent } from './heritage-activation/heritage-activation.component';
import { HeritageAnalysisComponent } from './heritage-analysis/heritage-analysis.component';
import { TreeModule, DialogModule, RadioButtonModule, FieldsetModule } from 'primeng/primeng';
import {DropdownModule} from 'primeng/dropdown';
import { ActivationModeListComponent } from './activation-mode-list/activation-mode-list.component';


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
    ActivationModeAddDialogComponent,
    ActivationModeEditDialogComponent,
    ActivationModeDeleteDialogComponent,
    UserListComponent,
    FileManagerComponent,
    AppHeaderComponent,
    AppLayoutComponent,
    SiteHeaderComponent,
    SiteFooterComponent,
    SiteLayoutComponent,
    HeritageEvaluationComponent,
    HeritageNavComponent,
    HeritageActivationComponent,
    HeritageAnalysisComponent,
    ActivationModeListComponent
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
    TreeModule,
    DropdownModule,
    DialogModule,
    RadioButtonModule,
    FieldsetModule,
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
    HeritageDeleteDialogComponent,
    ActivationModeAddDialogComponent,
    ActivationModeEditDialogComponent,
    ActivationModeDeleteDialogComponent
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
    AuthGuard,
    FilesService,
    HeritageService,
    ActivationModeService,
    EvaluationOptionService,
    EvaluatorTypeService,
    HeritageEvaluationService,
    HeritageGameAnalysisService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
