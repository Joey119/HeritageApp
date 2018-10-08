using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HeritageApp.Migrations
{
    public partial class InitialCreate : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Heritages",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
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
                    CreatedBy = table.Column<int>(nullable: false),
                    CreatedOn = table.Column<DateTime>(nullable: false),
                    ModifiedBy = table.Column<int>(nullable: false),
                    ModifiedOn = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Heritages", x => x.ID);
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
                name: "FileUploads",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    HeritageID = table.Column<int>(nullable: false),
                    FileName = table.Column<string>(maxLength: 50, nullable: true),
                    FilePath = table.Column<string>(nullable: true),
                    UserID = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FileUploads", x => x.ID);
                    table.ForeignKey(
                        name: "FK_FileUploads_Heritages_HeritageID",
                        column: x => x.HeritageID,
                        principalTable: "Heritages",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "HeritageComments",
                columns: table => new
                {
                    ID = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    HeritageID = table.Column<int>(nullable: false),
                    UserID = table.Column<int>(nullable: false),
                    CommentText = table.Column<string>(nullable: true),
                    CommentDate = table.Column<DateTime>(nullable: false),
                    UpVoteCount = table.Column<int>(nullable: false),
                    DownVoteCount = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeritageComments", x => x.ID);
                    table.ForeignKey(
                        name: "FK_HeritageComments_Heritages_HeritageID",
                        column: x => x.HeritageID,
                        principalTable: "Heritages",
                        principalColumn: "ID",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_FileUploads_HeritageID",
                table: "FileUploads",
                column: "HeritageID");

            migrationBuilder.CreateIndex(
                name: "IX_HeritageComments_HeritageID",
                table: "HeritageComments",
                column: "HeritageID");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FileUploads");

            migrationBuilder.DropTable(
                name: "HeritageComments");

            migrationBuilder.DropTable(
                name: "Users");

            migrationBuilder.DropTable(
                name: "Heritages");
        }
    }
}
