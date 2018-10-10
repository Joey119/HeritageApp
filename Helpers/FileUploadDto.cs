namespace HeritageApp.Helpers
{
    public class FileUploadDto
    {
        public int Id { get; set; }
        public int HeritageId { get; set; }
        public string FileName { get; set; }
        public string FilePath { get; set; }
        public int UploadUserId { get; set; }
        public string UploadUserName { get; set; }
    }
}