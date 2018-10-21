using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace HeritageApp.Models.Database
{
    //Heritage Registration Information
    public class Heritage
    {
        public int Id { get; set; }
        [StringLength(100, ErrorMessage = "Name cannot be longer than 100 characters.")]
        public string Name { get; set; }
        public string RegistrationDistrict { get; set; }
        [StringLength(4, ErrorMessage = "Registration Year cannot be longer than 4 characters.")]
        public string RegistrationYear { get; set; }
        [StringLength(50, ErrorMessage = "Province cannot be longer than 50 characters.")]
        public string Province { get; set; }
        public string TypeofProject { get; set; }
        [StringLength(20, ErrorMessage = "Batch No cannot be longer than 20 characters.")]
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
        public double EvaluationValue { get; set; }
        public int ActivatoinModeId { get; set; }
        public int HeritageGameAnalysisId { get; set; }
        public int CreatedUserId { get; set; }
        public User CreatedUser { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]
        public DateTime CreatedOn { get; set; }
        public int ModifiedUserId { get; set; }
        public User ModifiedUser { get; set; }
        [DataType(DataType.Date)]
        [DisplayFormat(DataFormatString = "{0:dd/MM/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]
        public DateTime ModifiedOn { get; set; }
        public List<HeritageComment> HeritageComments { get; set; }
        public List<FileUpload> FileUploads { get; set; }
        public List<HeritageEvaluation> HeritageEvaluations { get; set; }
        public ActivationMode ActMode { get; set; }
        public HeritageGameAnalysis GameAnalysis { get; set; }

    }
}