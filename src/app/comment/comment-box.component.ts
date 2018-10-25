/* * * ./app/comments/components/comment-box.component.ts * * */
// Imports
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IComment } from '../_models';
import { EmitterService, CommentService, UserService } from '../_services';
import { Global } from '../_shared';
import { ToastrService } from 'ngx-toastr';


// Component decorator
@Component({
    selector: 'comment-box',
    templateUrl: './comment-box.component.html'
    // No providers here because they are passed down from the parent component
})
// Component class
export class CommentBoxComponent {
    // Constructor
    constructor(
        private commentService: CommentService,
        private userService: UserService,
        private toastr: ToastrService) { }
    // Define input properties
    @Input() comment: IComment;
    @Input() listId: string;
    @Input() editId: string;

    editComment() {
        // Emit edit event
        EmitterService.get(this.editId).emit(this.comment);
    }

    deleteComment() {
        if (!this.userService.canComment()) {
            this.toastr.error("You do not have permission to comment", "Permission Denied")
            return;
        }
        // Call removeComment() from CommentService to delete comment
        this.commentService.removeComment(Global.BASE_HERITAGE_COMMENT_ENDPOINT + this.comment.id).subscribe(
            comments => {
                // Emit list event
                EmitterService.get(this.listId).emit(comments);
            },
            err => {
                // Log errors if any
                console.log(err);
            });
    }

    thumbUp() {
        this.comment.upVoteCount += 1;
        this.commentService.updateVote(Global.BASE_HERITAGE_COMMENT_ENDPOINT + this.comment.id, this.comment).subscribe(
            res => { console.log(res); }
        );
    }

    thumbDown() {
        this.comment.downVoteCount += 1;
        this.commentService.updateVote(Global.BASE_HERITAGE_COMMENT_ENDPOINT + this.comment.id, this.comment).subscribe(
            res => { console.log(res); }
        );
    }

}
