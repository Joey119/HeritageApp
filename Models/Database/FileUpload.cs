using System.ComponentModel.DataAnnotations;

namespace HeritageApp.Models.Database
{
    public class FileUpload
    {
        public int Id { get; set; }
        public int HeritageId { get; set; }
        [StringLength(50, ErrorMessage = "File Name cannot be longer than 50 characters.")]
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public int UserId { get; set; }
    }
}