using System.ComponentModel.DataAnnotations;

namespace HeritageApp.Models.Database
{
    /*
    Newly registered user will only have Read-Only permission.
    Admin user will be preconfigured, who has permission to set permissions for other users, excluding itself.
    Contributer will have CRUD permissions for all heritage entities.
    CanComment is used to control who can enter comment in the comment section of heritage. Only have CanComment cannot perform CRUD.
    */
    public class User
    {
        public int Id { get; set; }
        [StringLength(50, ErrorMessage = "First Name cannot be longer than 50 characters.")]
        public string FirstName { get; set; }
        [StringLength(50, ErrorMessage = "Last Name cannot be longer than 50 characters.")]
        public string LastName { get; set; }

        [StringLength(50, ErrorMessage = "UserName cannot be longer than 50 characters.")]
        public string UserName { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }
        public bool IsReadOnly { get; set; }
        public bool CanComment { get; set; }
        public bool IsContributer { get; set; }
        public bool IsAdmin { get; set; }
    }
}