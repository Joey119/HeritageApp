/* * * ./app/comments/model/comment.ts * * */
export interface IComment {
    id: number, 
    heritageId: number,
    userId: number, 
    commentText:string,
    commentDate: Date,
    upVoteCount: number,
    downVoteCount: number
}