using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HeritageApp.Migrations
{
    public partial class InitialModel : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EvaluationOptions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Option = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EvaluationOptions", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "EvaluatorTypes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Type = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EvaluatorTypes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    FirstName = table.Column<string>(maxLength: 50, nullable: true),
                    LastName = table.Column<string>(maxLength: 50, nullable: true),
                    UserName = table.Column<string>(maxLength: 50, nullable: true),
                    PasswordHash = table.Column<byte[]>(nullable: true),
                    PasswordSalt = table.Column<byte[]>(nullable: true),
                    IsReadOnly = table.Column<bool>(nullable: false),
                    CanComment = table.Column<bool>(nullable: false),
                    IsContributer = table.Column<bool>(nullable: false),
                    IsAdmin = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ActivationModes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    ActivationModeName = table.Column<string>(nullable: true),
                    UpperBound = table.Column<double>(nullable: false),
                    LowerBound = table.Column<double>(nullable: false),
                    ActivationModeDescription = table.Column<string>(nullable: true),
                    CreatedUserId = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    ModifiedUserId = table.Column<int>(nullable: false),
                    ModifiedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ActivationModes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_ActivationModes_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_ActivationModes_Users_ModifiedUserId",
                        column: x => x.ModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HeritageGameAnalyses",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    HeritageId = table.Column<int>(nullable: false),
                    CiA = table.Column<double>(nullable: false),
                    CiB = table.Column<double>(nullable: false),
                    Ii = table.Column<double>(nullable: false),
                    PiA = table.Column<double>(nullable: false),
                    PiB = table.Column<double>(nullable: false),
                    Vi5A = table.Column<double>(nullable: false),
                    Vi5B = table.Column<double>(nullable: false),
                    Vi4A = table.Column<double>(nullable: false),
                    Vi4B = table.Column<double>(nullable: false),
                    Vi3A = table.Column<double>(nullable: false),
                    Vi3B = table.Column<double>(nullable: false),
                    Vi1 = table.Column<double>(nullable: false),
                    Ai4 = table.Column<double>(nullable: false),
                    Ai3 = table.Column<double>(nullable: false),
                    Ai2 = table.Column<double>(nullable: false),
                    Aij = table.Column<double>(nullable: false),
                    Ai1 = table.Column<double>(nullable: false),
                    Route1 = table.Column<string>(nullable: true),
                    Route2 = table.Column<string>(nullable: true),
                    Route3 = table.Column<string>(nullable: true),
                    Route4 = table.Column<string>(nullable: true),
                    Route5 = table.Column<string>(nullable: true),
                    Route6 = table.Column<string>(nullable: true),
                    Route7 = table.Column<string>(nullable: true),
                    Route8 = table.Column<string>(nullable: true),
                    Route9 = table.Column<string>(nullable: true),
                    Route10 = table.Column<string>(nullable: true),
                    Route11 = table.Column<string>(nullable: true),
                    Route12 = table.Column<string>(nullable: true),
                    Route13 = table.Column<string>(nullable: true),
                    Route14 = table.Column<string>(nullable: true),
                    Route15 = table.Column<string>(nullable: true),
                    Route16 = table.Column<string>(nullable: true),
                    Route17 = table.Column<string>(nullable: true),
                    Route18 = table.Column<string>(nullable: true),
                    Route19 = table.Column<string>(nullable: true),
                    Route20 = table.Column<string>(nullable: true),
                    Route21 = table.Column<string>(nullable: true),
                    Route22 = table.Column<string>(nullable: true),
                    Route23 = table.Column<string>(nullable: true),
                    Route24 = table.Column<string>(nullable: true),
                    CreatedUserId = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    ModifiedUserId = table.Column<int>(nullable: false),
                    ModifiedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeritageGameAnalyses", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HeritageGameAnalyses_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeritageGameAnalyses_Users_ModifiedUserId",
                        column: x => x.ModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Heritages",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Name = table.Column<string>(maxLength: 100, nullable: true),
                    RegistrationDistrict = table.Column<string>(nullable: true),
                    RegistrationYear = table.Column<string>(maxLength: 4, nullable: true),
                    Province = table.Column<string>(maxLength: 50, nullable: true),
                    TypeofProject = table.Column<string>(nullable: true),
                    BatchNo = table.Column<string>(maxLength: 20, nullable: true),
                    Inheritors = table.Column<string>(nullable: true),
                    ProjectOverview = table.Column<string>(nullable: true),
                    History = table.Column<string>(nullable: true),
                    CurrentStatus = table.Column<string>(nullable: true),
                    PresentValue = table.Column<double>(nullable: false),
                    EndangeredStatus = table.Column<string>(nullable: true),
                    Masterpiece = table.Column<string>(nullable: true),
                    TourismStatus = table.Column<string>(nullable: true),
                    TourismMarketCharacteristics = table.Column<string>(nullable: true),
                    TourismProduct = table.Column<string>(nullable: true),
                    TourismPrice = table.Column<double>(nullable: false),
                    TourismDevelopmentModel = table.Column<string>(nullable: true),
                    TourismBenefit = table.Column<double>(nullable: false),
                    Story = table.Column<string>(nullable: true),
                    EvaluationValue = table.Column<double>(nullable: true),
                    ActivationModeId = table.Column<int>(nullable: true),
                    HeritageGameAnalysisId = table.Column<int>(nullable: true),
                    CreatedUserId = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    ModifiedUserId = table.Column<int>(nullable: false),
                    ModifiedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Heritages", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Heritages_ActivationModes_ActivationModeId",
                        column: x => x.ActivationModeId,
                        principalTable: "ActivationModes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Heritages_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Heritages_HeritageGameAnalyses_HeritageGameAnalysisId",
                        column: x => x.HeritageGameAnalysisId,
                        principalTable: "HeritageGameAnalyses",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Heritages_Users_ModifiedUserId",
                        column: x => x.ModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "FileUploads",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    HeritageId = table.Column<int>(nullable: false),
                    FileName = table.Column<string>(maxLength: 50, nullable: true),
                    FilePath = table.Column<string>(nullable: true),
                    UploadUserId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileUploads", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FileUploads_Heritages_HeritageId",
                        column: x => x.HeritageId,
                        principalTable: "Heritages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_FileUploads_Users_UploadUserId",
                        column: x => x.UploadUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HeritageComments",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    HeritageId = table.Column<int>(nullable: false),
                    CommentUserId = table.Column<int>(nullable: false),
                    CommentText = table.Column<string>(nullable: true),
                    CommentDate = table.Column<DateTime>(nullable: false),
                    UpVoteCount = table.Column<int>(nullable: false),
                    DownVoteCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeritageComments", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HeritageComments_Users_CommentUserId",
                        column: x => x.CommentUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeritageComments_Heritages_HeritageId",
                        column: x => x.HeritageId,
                        principalTable: "Heritages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HeritageEvaluations",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    HeritageId = table.Column<int>(nullable: false),
                    EvaluatorTypeId = table.Column<int>(nullable: false),
                    EvaluationValue = table.Column<double>(nullable: false),
                    AgreementFactor = table.Column<double>(nullable: false),
                    CognitionFactor = table.Column<double>(nullable: false),
                    ProjectValueFactor = table.Column<double>(nullable: false),
                    ProjectBasicInfoFactor = table.Column<double>(nullable: false),
                    ProjectConditionStatusFactor = table.Column<double>(nullable: false),
                    ImportanceValue = table.Column<int>(nullable: false),
                    NationalPrideValue = table.Column<int>(nullable: false),
                    GovProtectionValue = table.Column<int>(nullable: false),
                    ResourceCharacteristicsValue = table.Column<int>(nullable: false),
                    SkillScopeValue = table.Column<int>(nullable: false),
                    SkillInheritanceMethodValue = table.Column<int>(nullable: false),
                    SkillInheritanceDifficultyValue = table.Column<int>(nullable: false),
                    ArtValue = table.Column<int>(nullable: false),
                    CultureValue = table.Column<int>(nullable: false),
                    EconomyValue = table.Column<int>(nullable: false),
                    HistoryValue = table.Column<int>(nullable: false),
                    EducationValue = table.Column<int>(nullable: false),
                    SocietyValue = table.Column<int>(nullable: false),
                    ScienceValue = table.Column<int>(nullable: false),
                    EcologicalEnvironmentValue = table.Column<int>(nullable: false),
                    QualityValue = table.Column<int>(nullable: false),
                    RarenessValue = table.Column<int>(nullable: false),
                    EcologyValue = table.Column<int>(nullable: false),
                    PopularValue = table.Column<int>(nullable: false),
                    PersonalityValue = table.Column<int>(nullable: false),
                    TimeSpanValue = table.Column<int>(nullable: false),
                    NationalEcomonicValue = table.Column<int>(nullable: false),
                    MarketStatusValue = table.Column<int>(nullable: false),
                    BasicResourceDevelopmentValue = table.Column<int>(nullable: false),
                    BasicResourceValue = table.Column<int>(nullable: false),
                    IntroductionProbabilityValue = table.Column<int>(nullable: false),
                    CreatedUserId = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    ModifiedUserId = table.Column<int>(nullable: false),
                    ModifiedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeritageEvaluations", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HeritageEvaluations_Users_CreatedUserId",
                        column: x => x.CreatedUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeritageEvaluations_Heritages_HeritageId",
                        column: x => x.HeritageId,
                        principalTable: "Heritages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeritageEvaluations_Users_ModifiedUserId",
                        column: x => x.ModifiedUserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_ActivationModes_CreatedUserId",
                table: "ActivationModes",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_ActivationModes_ModifiedUserId",
                table: "ActivationModes",
                column: "ModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_FileUploads_HeritageId",
                table: "FileUploads",
                column: "HeritageId");

            migrationBuilder.CreateIndex(
                name: "IX_FileUploads_UploadUserId",
                table: "FileUploads",
                column: "UploadUserId");

            migrationBuilder.CreateIndex(
                name: "IX_HeritageComments_CommentUserId",
                table: "HeritageComments",
                column: "CommentUserId");

            migrationBuilder.CreateIndex(
                name: "IX_HeritageComments_HeritageId",
                table: "HeritageComments",
                column: "HeritageId");

            migrationBuilder.CreateIndex(
                name: "IX_HeritageEvaluations_CreatedUserId",
                table: "HeritageEvaluations",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_HeritageEvaluations_HeritageId",
                table: "HeritageEvaluations",
                column: "HeritageId");

            migrationBuilder.CreateIndex(
                name: "IX_HeritageEvaluations_ModifiedUserId",
                table: "HeritageEvaluations",
                column: "ModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_HeritageGameAnalyses_CreatedUserId",
                table: "HeritageGameAnalyses",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_HeritageGameAnalyses_ModifiedUserId",
                table: "HeritageGameAnalyses",
                column: "ModifiedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Heritages_ActivationModeId",
                table: "Heritages",
                column: "ActivationModeId");

            migrationBuilder.CreateIndex(
                name: "IX_Heritages_CreatedUserId",
                table: "Heritages",
                column: "CreatedUserId");

            migrationBuilder.CreateIndex(
                name: "IX_Heritages_HeritageGameAnalysisId",
                table: "Heritages",
                column: "HeritageGameAnalysisId");

            migrationBuilder.CreateIndex(
                name: "IX_Heritages_ModifiedUserId",
                table: "Heritages",
                column: "ModifiedUserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EvaluationOptions");

            migrationBuilder.DropTable(
                name: "EvaluatorTypes");

            migrationBuilder.DropTable(
                name: "FileUploads");

            migrationBuilder.DropTable(
                name: "HeritageComments");

            migrationBuilder.DropTable(
                name: "HeritageEvaluations");

            migrationBuilder.DropTable(
                name: "Heritages");

            migrationBuilder.DropTable(
                name: "ActivationModes");

            migrationBuilder.DropTable(
                name: "HeritageGameAnalyses");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
