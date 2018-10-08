import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { AppMaterialModule } from './app.material.module';
import { CommentBoxComponent } from './comment/comment-box.component';
import { CommentListComponent } from './comment/comment-list.component';
import { CommentFormComponent } from './comment/comment-form.component';
import { CommentComponent } from './comment/comment.component';


import { CommentService } from './_services';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppMaterialModule
    
  ],
  declarations: [
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent
  ],

  providers: [
      CommentService
  ],

  exports:[
    CommentBoxComponent,
    CommentFormComponent,
    CommentListComponent,
    CommentComponent
  ]
  
})
export class CommentModule {
}

