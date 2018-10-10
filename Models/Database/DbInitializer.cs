using System;
using System.Linq;
using HeritageApp.Services;
using HeritageApp.Models;

namespace HeritageApp.Models.Database
{
    public class DbInitializer
    {
        public static void Initialize(HeritageContext context)
        {
            context.Database.EnsureCreated();

            if (context.Heritages.Any())
            {
                return;
                //no need to add data
            }

            byte[] passwordHashUsr, passwordSaltUsr;
            string pwd = "ACDsee123";
            UserService.CreatePasswordHash(pwd, out passwordHashUsr, out passwordSaltUsr);

            var users = new User[]
            {
                new User { FirstName = "John", LastName = "Smith", UserName = "Admin", PasswordHash = passwordHashUsr, PasswordSalt = passwordSaltUsr, IsReadOnly = true, CanComment = false, IsContributer = false, IsAdmin = true},
                new User { FirstName = "Amy", LastName = "Jones", UserName = "Contributor", PasswordHash = passwordHashUsr, PasswordSalt = passwordSaltUsr, IsReadOnly = false, CanComment = true, IsContributer = true, IsAdmin = false},
                new User { FirstName = "Tom", LastName = "Wong", UserName = "ReadOnlyCommentator", PasswordHash = passwordHashUsr, PasswordSalt = passwordSaltUsr, IsReadOnly = true, CanComment = true, IsContributer = false, IsAdmin = false},
                new User { FirstName = "Bob", LastName = "Cook", UserName = "ReadOnlyViewer", PasswordHash = passwordHashUsr, PasswordSalt = passwordSaltUsr, IsReadOnly = true, CanComment = false, IsContributer = false, IsAdmin = false}
            };
            foreach (User u in users)
            {
                context.Users.Add(u);
            }
            context.SaveChanges();

            var heritages = new Heritage[]
            {
                new Heritage { Name = "HeritageA", RegistrationDistrict = "Huabei", RegistrationYear = "1983", Province = "Hebei", TypeofProject = "Private", BatchNo = "1234567890", Inheritors = "MR ZHOU", ProjectOverview = "This is overview of the project", History = "This is history section", CurrentStatus = "Current Status of the heritage project", PresentValue = 100.0, EndangeredStatus = "I am not endangered", Masterpiece = "Masterpiece recorded here", TourismStatus = "Tourism status reported", TourismMarketCharacteristics = "What is characteristics", TourismProduct = "any tourism product", TourismPrice = 50000.0, TourismDevelopmentModel = "model of tourism", TourismBenefit = 5000.0, Story = "story to be entered...",
                CreatedUserId = users.Single( u => u.UserName == "Contributor").Id, CreatedOn = DateTime.Parse("2018-09-01"), 
                ModifiedUserId = users.Single( u => u.UserName == "Contributor").Id, ModifiedOn = DateTime.Parse("2018-09-01") },
                new Heritage { Name = "HeritageB", RegistrationDistrict = "Dongbei", RegistrationYear = "1983", Province = "Jilin", TypeofProject = "Private", BatchNo = "1234567890", Inheritors = "MR ZHOU", ProjectOverview = "This is overview of the project", History = "This is history section", CurrentStatus = "Current Status of the heritage project", PresentValue = 100.0, EndangeredStatus = "I am not endangered", Masterpiece = "Masterpiece recorded here", TourismStatus = "Tourism status reported", TourismMarketCharacteristics = "What is characteristics", TourismProduct = "any tourism product", TourismPrice = 50000.0, TourismDevelopmentModel = "model of tourism", TourismBenefit = 5000.0, Story = "story to be entered...",
                CreatedUserId = users.Single( u => u.UserName == "Contributor").Id, CreatedOn = DateTime.Parse("2018-09-01"), 
                ModifiedUserId = users.Single( u => u.UserName == "Contributor").Id, ModifiedOn = DateTime.Parse("2018-09-01") },
                new Heritage { Name = "HeritageC", RegistrationDistrict = "Dongbei", RegistrationYear = "1983", Province = "Shenyang", TypeofProject = "Private", BatchNo = "1234567890", Inheritors = "MR ZHOU", ProjectOverview = "This is overview of the project", History = "This is history section", CurrentStatus = "Current Status of the heritage project", PresentValue = 100.0, EndangeredStatus = "I am not endangered", Masterpiece = "Masterpiece recorded here", TourismStatus = "Tourism status reported", TourismMarketCharacteristics = "What is characteristics", TourismProduct = "any tourism product", TourismPrice = 50000.0, TourismDevelopmentModel = "model of tourism", TourismBenefit = 5000.0, Story = "story to be entered...",
                CreatedUserId = users.Single( u => u.UserName == "Contributor").Id, CreatedOn = DateTime.Parse("2018-09-01"), 
                ModifiedUserId = users.Single( u => u.UserName == "Contributor").Id, ModifiedOn = DateTime.Parse("2018-09-01") },
                new Heritage { Name = "HeritageD", RegistrationDistrict = "Xibei", RegistrationYear = "1983", Province = "Shannxi", TypeofProject = "Private", BatchNo = "1234567890", Inheritors = "MR ZHOU", ProjectOverview = "This is overview of the project", History = "This is history section", CurrentStatus = "Current Status of the heritage project", PresentValue = 100.0, EndangeredStatus = "I am not endangered", Masterpiece = "Masterpiece recorded here", TourismStatus = "Tourism status reported", TourismMarketCharacteristics = "What is characteristics", TourismProduct = "any tourism product", TourismPrice = 50000.0, TourismDevelopmentModel = "model of tourism", TourismBenefit = 5000.0, Story = "story to be entered...",
                CreatedUserId = users.Single( u => u.UserName == "Contributor").Id, CreatedOn = DateTime.Parse("2018-09-01"), 
                ModifiedUserId = users.Single( u => u.UserName == "Contributor").Id, ModifiedOn = DateTime.Parse("2018-09-01") },
                new Heritage { Name = "HeritageE", RegistrationDistrict = "Xinan", RegistrationYear = "1983", Province = "Sichuan", TypeofProject = "Private", BatchNo = "1234567890", Inheritors = "MR ZHOU", ProjectOverview = "This is overview of the project", History = "This is history section", CurrentStatus = "Current Status of the heritage project", PresentValue = 100.0, EndangeredStatus = "I am not endangered", Masterpiece = "Masterpiece recorded here", TourismStatus = "Tourism status reported", TourismMarketCharacteristics = "What is characteristics", TourismProduct = "any tourism product", TourismPrice = 50000.0, TourismDevelopmentModel = "model of tourism", TourismBenefit = 5000.0, Story = "story to be entered...",
                CreatedUserId = users.Single( u => u.UserName == "Contributor").Id, CreatedOn = DateTime.Parse("2018-09-01"), 
                ModifiedUserId = users.Single( u => u.UserName == "Contributor").Id, ModifiedOn = DateTime.Parse("2018-09-01") },
                new Heritage { Name = "HeritageF", RegistrationDistrict = "Huabei", RegistrationYear = "1983", Province = "Beijing", TypeofProject = "Private", BatchNo = "1234567890", Inheritors = "MR ZHOU", ProjectOverview = "This is overview of the project", History = "This is history section", CurrentStatus = "Current Status of the heritage project", PresentValue = 100.0, EndangeredStatus = "I am not endangered", Masterpiece = "Masterpiece recorded here", TourismStatus = "Tourism status reported", TourismMarketCharacteristics = "What is characteristics", TourismProduct = "any tourism product", TourismPrice = 50000.0, TourismDevelopmentModel = "model of tourism", TourismBenefit = 5000.0, Story = "story to be entered...",
                CreatedUserId = users.Single( u => u.UserName == "Contributor").Id, CreatedOn = DateTime.Parse("2018-09-01"), 
                ModifiedUserId = users.Single( u => u.UserName == "Contributor").Id, ModifiedOn = DateTime.Parse("2018-09-01") },
                new Heritage { Name = "HeritageG", RegistrationDistrict = "Dongnan", RegistrationYear = "1983", Province = "Guangzhou", TypeofProject = "Private", BatchNo = "1234567890", Inheritors = "MR ZHOU", ProjectOverview = "This is overview of the project", History = "This is history section", CurrentStatus = "Current Status of the heritage project", PresentValue = 100.0, EndangeredStatus = "I am not endangered", Masterpiece = "Masterpiece recorded here", TourismStatus = "Tourism status reported", TourismMarketCharacteristics = "What is characteristics", TourismProduct = "any tourism product", TourismPrice = 50000.0, TourismDevelopmentModel = "model of tourism", TourismBenefit = 5000.0, Story = "story to be entered...",
                CreatedUserId = users.Single( u => u.UserName == "Contributor").Id, CreatedOn = DateTime.Parse("2018-09-01"), 
                ModifiedUserId = users.Single( u => u.UserName == "Contributor").Id, ModifiedOn = DateTime.Parse("2018-09-01") },
                new Heritage { Name = "HeritageH", RegistrationDistrict = "Dongnan", RegistrationYear = "1983", Province = "Hong Kong", TypeofProject = "Private", BatchNo = "1234567890", Inheritors = "MR ZHOU", ProjectOverview = "This is overview of the project", History = "This is history section", CurrentStatus = "Current Status of the heritage project", PresentValue = 100.0, EndangeredStatus = "I am not endangered", Masterpiece = "Masterpiece recorded here", TourismStatus = "Tourism status reported", TourismMarketCharacteristics = "What is characteristics", TourismProduct = "any tourism product", TourismPrice = 50000.0, TourismDevelopmentModel = "model of tourism", TourismBenefit = 5000.0, Story = "story to be entered...",
                CreatedUserId = users.Single( u => u.UserName == "Contributor").Id, CreatedOn = DateTime.Parse("2018-09-01"), 
                ModifiedUserId = users.Single( u => u.UserName == "Contributor").Id, ModifiedOn = DateTime.Parse("2018-09-01") },
            };
            foreach (Heritage h in heritages)
            {
                context.Heritages.Add(h);
            }
            context.SaveChanges();

            var heirtageComments = new HeritageComment[]
            {
                new HeritageComment { HeritageId = heritages.Single( h => h.Name == "HeritageA").Id, 
                CommentUserId = users.Single( u => u.UserName == "Contributor").Id, 
                CommentText = "First comment", CommentDate = DateTime.Parse("2018-09-01"), UpVoteCount = 0, DownVoteCount = 0 },
                new HeritageComment { HeritageId = heritages.Single( h => h.Name == "HeritageA").Id, 
                CommentUserId = users.Single( u => u.UserName == "ReadOnlyCommentator").Id, 
                CommentText = "First comment", CommentDate = DateTime.Parse("2018-09-01"), UpVoteCount = 0, DownVoteCount = 0 },
                new HeritageComment { HeritageId = heritages.Single( h => h.Name == "HeritageA").Id, 
                CommentUserId = users.Single( u => u.UserName == "ReadOnlyCommentator").Id, 
                CommentText = "First comment", CommentDate = DateTime.Parse("2018-09-01"), UpVoteCount = 0, DownVoteCount = 0 },
                new HeritageComment { HeritageId = heritages.Single( h => h.Name == "HeritageA").Id, 
                CommentUserId = users.Single( u => u.UserName == "ReadOnlyCommentator").Id, 
                CommentText = "First comment", CommentDate = DateTime.Parse("2018-09-01"), UpVoteCount = 0, DownVoteCount = 0 },
                new HeritageComment { HeritageId = heritages.Single( h => h.Name == "HeritageA").Id, 
                CommentUserId = users.Single( u => u.UserName == "Contributor").Id, 
                CommentText = "First comment", CommentDate = DateTime.Parse("2018-09-01"), UpVoteCount = 0, DownVoteCount = 0 }
            };
            foreach(HeritageComment hc in heirtageComments)
            {
                context.HeritageComments.Add(hc);
            }
            context.SaveChanges();

            var fileUploads = new FileUpload[]
            {
                new FileUpload { FileName = "photo1.jpg", FilePath = "c:\\photo\\heritage", UploadUserId = users.Single( u => u.UserName == "Contributor").Id},
                new FileUpload { FileName = "photo2.jpg", FilePath = "c:\\photo\\heritage", UploadUserId = users.Single( u => u.UserName == "Contributor").Id},
                new FileUpload { FileName = "photo3.jpg", FilePath = "c:\\photo\\heritage", UploadUserId = users.Single( u => u.UserName == "Contributor").Id},
                new FileUpload { FileName = "photo4.jpg", FilePath = "c:\\photo\\heritage", UploadUserId = users.Single( u => u.UserName == "Contributor").Id},
                new FileUpload { FileName = "photo5.jpg", FilePath = "c:\\photo\\heritage", UploadUserId = users.Single( u => u.UserName == "Contributor").Id},
                new FileUpload { FileName = "photo6.jpg", FilePath = "c:\\photo\\heritage", UploadUserId = users.Single( u => u.UserName == "Contributor").Id}
            };
        }
        
    }
}