/* * * ./app/comments/model/comment.ts * * */
export interface IComment {
    id: number; 
    heritageId: number;
    commentUserId: number; 
    commentUserName: string;
    commentText:string;
    commentDate: Date;
    upVoteCount: number;
    downVoteCount: number;
}