using System;
using System.ComponentModel.DataAnnotations;

namespace HeritageApp.Models.Database {
    public class HeritageGameAnalysis {
        public int Id { get; set; }
        public int HeritageId { get; set; }

        public double CiA { get; set; }
        public double CiB { get; set; }
        public double Ii { get; set; }
        public double PiA { get; set; }
        public double PiB { get; set; }
        public double Vi5A { get; set; }
        public double Vi5B { get; set; }
        public double Vi4A { get; set; }
        public double Vi4B { get; set; }
        public double Vi3A { get; set; }
        public double Vi3B { get; set; }
        public double Vi1 { get; set; }
        public double Ai4 { get; set; }
        public double Ai3 { get; set; }
        public double Ai2 { get; set; }
        public double Aij { get; set; }
        public double Ai1 { get; set; }

        public string Route1 { get; set; }
        public string Route2 { get; set; }
        public string Route3 { get; set; }
        public string Route4 { get; set; }
        public string Route5 { get; set; }
        public string Route6 { get; set; }
        public string Route7 { get; set; }
        public string Route8 { get; set; }
        public string Route9 { get; set; }
        public string Route10 { get; set; }
        public string Route11 { get; set; }
        public string Route12 { get; set; }
        public string Route13 { get; set; }
        public string Route14 { get; set; }
        public string Route15 { get; set; }
        public string Route16 { get; set; }
        public string Route17 { get; set; }
        public string Route18 { get; set; }
        public string Route19 { get; set; }
        public string Route20 { get; set; }
        public string Route21 { get; set; }
        public string Route22 { get; set; }
        public string Route23 { get; set; }
        public string Route24 { get; set; }
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