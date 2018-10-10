using System;
namespace HeritageApp.Helpers
{
    public class HeritageCommentDto
    {
        public int Id { get; set; }
        public int HeritageId { get; set; }
        public int CommentUserId { get; set; }
        public string CommentUserName { get; set; }
        public string CommentText { get; set; }

        public DateTime CommentDate { get; set; }
        public int UpVoteCount { get; set; }
        public int DownVoteCount { get; set; }
    }
}