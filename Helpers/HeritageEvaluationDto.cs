using System;

namespace HeritageApp.Helpers {
    public class HeritageEvaluationDto {
        public int Id { get; set; }
        public int HeirtageId { get; set; }
        public int EvaluatorTypeId { get; set; }
        public double EvaluationValue { get; set; }
        public double AgreementFactor { get; set; }
        public double CognitionFactor { get; set; }
        public double ProjectValueFactor { get; set; }
        public double ProjectBasicInfoFactor { get; set; }
        public double ProjectConditionStatusFactor { get; set; }
        public int ImportanceValue { get; set; }
        public int NationalPrideValue { get; set; }
        public int GovProtectionValue { get; set; }
        public int ResourceCharacteristicsValue { get; set; }
        public int SkillScopeValue { get; set; }
        public int SkillInheritanceMethodValue { get; set; }
        public int SkillInheritanceDifficultyValue { get; set; }
        public int ArtValue { get; set; }
        public int CultureValue { get; set; }
        public int EconomyValue { get; set; }
        public int HistoryValue { get; set; }
        public int EducationValue { get; set; }
        public int SocietyValue { get; set; }
        public int ScienceValue { get; set; }
        public int EcologicalEnvironmentValue { get; set; }
        public int QualityValue { get; set; }
        public int RarenessValue { get; set; }
        public int EcologyValue { get; set; }
        public int PopularValue { get; set; }
        public int PersonalityValue { get; set; }
        public int TimeSpanValue { get; set; }
        public int NationalEcomonicValue { get; set; }
        public int MarketStatusValue { get; set; }
        public int BasicResourceDevelopmentValue { get; set; }
        public int BasicResourceValue { get; set; }
        public int IntroductionProbabilityValue { get; set; }
        public int CreatedUserId { get; set; }
        public string CreatedUserName { get; set; }
        public DateTime CreatedOn { get; set; }
        public int ModifiedUserId { get; set; }
        public string ModifiedUserName { get; set; }
        public DateTime ModifiedOn { get; set; }
    }
}