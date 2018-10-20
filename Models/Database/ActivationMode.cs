using System;
using System.ComponentModel.DataAnnotations;

namespace HeritageApp.Models.Database
{
    public class ActivationMode
    {
        public int Id { get; set; }
        public string ActivationModeName { get; set; }
        public double UpperBound { get; set; }
        public double LowerBound { get; set; }
        public string ActivationModeDescription { get; set; }
        public int CreatedUserId { get; set; }
        public User CreatedUser { get; set; }

        [DataType (DataType.Date)]
        [DisplayFormat (DataFormatString = "{0:dd/MM/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]
        public DateTime CreatedOn { get; set; }
        public int ModifiedUserId { get; set; }
        public User ModifiedUser { get; set; }

        [DataType (DataType.Date)]
        [DisplayFormat (DataFormatString = "{0:dd/MM/yyyy hh:mm tt}", ApplyFormatInEditMode = true)]
        public DateTime ModifiedOn { get; set; }
    }
}