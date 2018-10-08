using Microsoft.EntityFrameworkCore;

namespace HeritageApp.Models.Database
{
    public class HeritageContext: DbContext
    {
        public HeritageContext(DbContextOptions <HeritageContext> options)
        : base(options)
        {

        }
        
         public DbSet <User> Users { get; set; }
         public DbSet <Heritage> Heritages { get; set; }
         public DbSet <HeritageComment> HeritageComments { get; set; }
         public DbSet <FileUpload> FileUploads { get; set; }
         
    }
}