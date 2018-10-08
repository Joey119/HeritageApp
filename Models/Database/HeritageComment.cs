using System;

namespace HeritageApp.Models.Database
{
    public class HeritageComment
    {
        public int Id { get; set; }
        public int HeritageId { get; set; }
        public int UserId { get; set; }
        public string CommentText { get; set; }
        public DateTime CommentDate { get; set; }
        public int UpVoteCount { get; set; }
        public int DownVoteCount { get; set; }
        
    }
}