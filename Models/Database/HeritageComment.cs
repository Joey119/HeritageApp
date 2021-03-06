using System;
using System.ComponentModel.DataAnnotations;

namespace HeritageApp.Models.Database
{
    public class HeritageComment
    {
        public int Id { get; set; }
        public int HeritageId { get; set; }
        public int CommentUserId { get; set; }
        public User CommentUser { get; set; }
        public string CommentText { get; set; }

        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]
        public DateTime CommentDate { get; set; }
        public int UpVoteCount { get; set; }
        public int DownVoteCount { get; set; }
        
    }
}