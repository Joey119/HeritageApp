namespace HeritageApp.Helpers
{
    public class UserDto
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public bool IsReadOnly { get; set; }
        public bool CanComment { get; set; }
        public bool IsContributer { get; set; }
        public bool IsAdmin { get; set; }
    }
}