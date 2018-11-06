using Microsoft.EntityFrameworkCore;

namespace HeritageApp.Models.Database {
    public class HeritageContext : DbContext {
        public HeritageContext (DbContextOptions<HeritageContext> options) : base (options) {

        }

        public DbSet<User> Users { get; set; }
        public DbSet<Heritage> Heritages { get; set; }
        public DbSet<HeritageComment> HeritageComments { get; set; }
        public DbSet<FileUpload> FileUploads { get; set; }
        public DbSet<EvaluationOption> EvaluationOptions { get; set; }
        public DbSet<EvaluatorType> EvaluatorTypes { get; set; }
        public DbSet<ActivationMode> ActivationModes { get; set; }
        public DbSet<HeritageEvaluation> HeritageEvaluations { get; set; }
        public DbSet<HeritageGameAnalysis> HeritageGameAnalyses { get; set; }
        public DbSet<EvaluationParameter> EvaluationParameters { get; set; }
        public DbSet<HeritageActivationMode> HeritageActivationModes { get; set; }

    }
}