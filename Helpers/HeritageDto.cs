using System;
namespace HeritageApp.Helpers
{
    public class HeritageDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string RegistrationDistrict { get; set; }
        public string RegistrationYear { get; set; }
        public string Province { get; set; }
        public string TypeofProject { get; set; }
        public string BatchNo { get; set; }
        public string Inheritors { get; set; }
        public string ProjectOverview { get; set; }
        public string History { get; set; }
        public string CurrentStatus { get; set; }
        public double PresentValue { get; set; }
        public string EndangeredStatus { get; set; }
        public string Masterpiece { get; set; }
        public string TourismStatus { get; set; }
        public string TourismMarketCharacteristics { get; set; }
        public string TourismProduct { get; set; }
        public double TourismPrice { get; set; }
        public string TourismDevelopmentModel { get; set; }
        public double TourismBenefit { get; set; }
        public string Story { get; set; }
        public int CreatedUserId { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime CreatedOn { get; set; }
        public int ModifiedUserId { get; set; }
        public string ModifiedUserName { get; set; }
        public DateTime ModifiedOn { get; set; }
        
    }
}