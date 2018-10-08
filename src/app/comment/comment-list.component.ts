/* * * ./app/comments/components/comment-list.component.ts * * */
// Imports
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { IComment } from '../_models/comment';
import { CommentService, EmitterService } from '../_services';
import { Global } from '../_shared';

// Component decorator
@Component({
    selector: 'comment-list',
    templateUrl: './comment-list.component.html'
})
// Component class
export class CommentListComponent implements OnInit, OnChanges{
    // Constructor with injected service
    constructor(
        private commentService: CommentService
        ){}
    // Local properties
    comments: IComment[];
    // Input properties
    @Input() listId: string;
    @Input() editId: string;
    @Input() heritageId: number;

    loadComments(){
        // Get all comments
         this.commentService.getComments(Global.BASE_HERITAGE_COMMENT_ENDPOINT + 'getHeritageComment/' + this.heritageId)
            .subscribe(
                comments => this.comments = comments, //Bind to view
            err => {
                    // Log errors if any
                console.log(err);
            });
    }

    ngOnInit(){
            // Load comments
            this.loadComments()
    }
    

    ngOnChanges(changes:any) {
        // Listen to the 'list'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.listId).subscribe((comments:IComment[]) => {this.loadComments()});
    }
    
 }
