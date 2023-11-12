using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    public partial class Meal : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AnimalMeals_AnimalSpecies_AnimalSpeciesSpeciesId",
                table: "AnimalMeals");

            migrationBuilder.DropIndex(
                name: "IX_AnimalMeals_AnimalSpeciesSpeciesId",
                table: "AnimalMeals");

            migrationBuilder.DropColumn(
                name: "AnimalSpeciesSpeciesId",
                table: "AnimalMeals");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AnimalSpeciesSpeciesId",
                table: "AnimalMeals",
                type: "nvarchar(6)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_AnimalMeals_AnimalSpeciesSpeciesId",
                table: "AnimalMeals",
                column: "AnimalSpeciesSpeciesId");

            migrationBuilder.AddForeignKey(
                name: "FK_AnimalMeals_AnimalSpecies_AnimalSpeciesSpeciesId",
                table: "AnimalMeals",
                column: "AnimalSpeciesSpeciesId",
                principalTable: "AnimalSpecies",
                principalColumn: "SpeciesId");
        }
    }
}
