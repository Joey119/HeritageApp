using System;

namespace HeritageApp.Helpers {
    public class ActivationModeDto {
        public int Id { get; set; }
        public string ActivationModeName { get; set; }
        public double UpperBound { get; set; }
        public double LowerBound { get; set; }
        public string ActivationModeDescription { get; set; }
        public int CreatedUserId { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime CreatedOn { get; set; }
        public int ModifiedUserId { get; set; }
        public string ModifiedUserName { get; set; }
        public DateTime ModifiedOn { get; set; }

    }
}