using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HeritageApp.Migrations
{
    public partial class DbConversion1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Heritages_ActivationModes_ActivationModeId",
                table: "Heritages");

            migrationBuilder.DropIndex(
                name: "IX_Heritages_ActivationModeId",
                table: "Heritages");

            migrationBuilder.DropColumn(
                name: "ActivationModeId",
                table: "Heritages");

            migrationBuilder.CreateTable(
                name: "EvaluationParameters",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    ParameterValue = table.Column<double>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EvaluationParameters", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "HeritageActivationModes",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    HeritageId = table.Column<int>(nullable: false),
                    ActivationModeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_HeritageActivationModes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_HeritageActivationModes_ActivationModes_ActivationModeId",
                        column: x => x.ActivationModeId,
                        principalTable: "ActivationModes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_HeritageActivationModes_Heritages_HeritageId",
                        column: x => x.HeritageId,
                        principalTable: "Heritages",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_HeritageActivationModes_ActivationModeId",
                table: "HeritageActivationModes",
                column: "ActivationModeId");

            migrationBuilder.CreateIndex(
                name: "IX_HeritageActivationModes_HeritageId",
                table: "HeritageActivationModes",
                column: "HeritageId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EvaluationParameters");

            migrationBuilder.DropTable(
                name: "HeritageActivationModes");

            migrationBuilder.AddColumn<int>(
                name: "ActivationModeId",
                table: "Heritages",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Heritages_ActivationModeId",
                table: "Heritages",
                column: "ActivationModeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Heritages_ActivationModes_ActivationModeId",
                table: "Heritages",
                column: "ActivationModeId",
                principalTable: "ActivationModes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
