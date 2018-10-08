/* * * ./app/comments/components/comment-form.component.ts * * */
// Imports
import { Component, EventEmitter, Input, OnChanges } from '@angular/core';
import { NgForm }    from '@angular/forms';
import { Observable } from 'rxjs';
import { Global } from '../_shared';
import { CommentBoxComponent } from './comment-box.component'
import { CommentService, EmitterService, UserService } from '../_services';
import { IComment } from '../_models';

// Component decorator
@Component({
    selector: 'comment-form',
    templateUrl: './comment-form.component.html',
    styleUrls: ['./comment-form.component.scss']
})
// Component class
export class CommentFormComponent implements OnChanges { 

    // Local properties    
    private editing: boolean = false;
    private model: IComment = { id: 0, heritageId: 0, userId: 0, commentText: '', commentDate: undefined, upVoteCount: 0, downVoteCount: 0 };;

    // Constructor with injected service
    constructor(
        private commentService: CommentService,
        private userService: UserService
        ){
            this.model.userId = this.userService.currentUserId();
        }
       
    // Input properties
    @Input() editId: string;
    @Input() listId: string;
    @Input() heritageId: number;     

    submitComment(){
        // Variable to hold a reference of addComment/updateComment
        let commentOperation:Observable<IComment>;

        this.model.heritageId = this.heritageId;
        
        if(!this.editing){
            // Create a new comment
            commentOperation = this.commentService.addComment(Global.BASE_HERITAGE_COMMENT_ENDPOINT, this.model)
        } else {
            // Update an existing comment
             commentOperation = this.commentService.updateComment(Global.BASE_HERITAGE_COMMENT_ENDPOINT + this.model.id, this.model)
        }

        // Subscribe to observable
        commentOperation.subscribe(
            comments => {
                // Emit list event
                EmitterService.get(this.listId).emit(comments);
                // Empty model
                this.model = { id: 0, heritageId: this.heritageId, userId: this.model.userId, commentText: '', commentDate: undefined, upVoteCount: 0, downVoteCount: 0 };
                // Switch editing status
                if(this.editing) this.editing = !this.editing;
                }, 
                err => {
                // Log errors if any
                console.log(err);
                });
    }

    ngOnChanges() {
        // Listen to the 'edit'emitted event so as populate the model
        // with the event payload
        EmitterService.get(this.editId).subscribe((comment:IComment) => {
            this.model = comment
            this.editing = true;
        });
    }
 }
