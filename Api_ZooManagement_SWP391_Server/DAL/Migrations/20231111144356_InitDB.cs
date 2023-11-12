using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    public partial class InitDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SpeciesMeals_Animals_AnimalId",
                table: "SpeciesMeals");

            migrationBuilder.DropForeignKey(
                name: "FK_SpeciesMeals_AnimalSpecies_AnimalSpeciesSpeciesId",
                table: "SpeciesMeals");

            migrationBuilder.DropForeignKey(
                name: "FK_SpeciesMeals_Meals_MealId",
                table: "SpeciesMeals");

            migrationBuilder.DropPrimaryKey(
                name: "PK_SpeciesMeals",
                table: "SpeciesMeals");

            migrationBuilder.RenameTable(
                name: "SpeciesMeals",
                newName: "AnimalMeals");

            migrationBuilder.RenameIndex(
                name: "IX_SpeciesMeals_MealId",
                table: "AnimalMeals",
                newName: "IX_AnimalMeals_MealId");

            migrationBuilder.RenameIndex(
                name: "IX_SpeciesMeals_AnimalSpeciesSpeciesId",
                table: "AnimalMeals",
                newName: "IX_AnimalMeals_AnimalSpeciesSpeciesId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_AnimalMeals",
                table: "AnimalMeals",
                columns: new[] { "AnimalId", "MealId" });

            migrationBuilder.AddForeignKey(
                name: "FK_AnimalMeals_Animals_AnimalId",
                table: "AnimalMeals",
                column: "AnimalId",
                principalTable: "Animals",
                principalColumn: "AnimalId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_AnimalMeals_AnimalSpecies_AnimalSpeciesSpeciesId",
                table: "AnimalMeals",
                column: "AnimalSpeciesSpeciesId",
                principalTable: "AnimalSpecies",
                principalColumn: "SpeciesId");

            migrationBuilder.AddForeignKey(
                name: "FK_AnimalMeals_Meals_MealId",
                table: "AnimalMeals",
                column: "MealId",
                principalTable: "Meals",
                principalColumn: "MealId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_AnimalMeals_Animals_AnimalId",
                table: "AnimalMeals");

            migrationBuilder.DropForeignKey(
                name: "FK_AnimalMeals_AnimalSpecies_AnimalSpeciesSpeciesId",
                table: "AnimalMeals");

            migrationBuilder.DropForeignKey(
                name: "FK_AnimalMeals_Meals_MealId",
                table: "AnimalMeals");

            migrationBuilder.DropPrimaryKey(
                name: "PK_AnimalMeals",
                table: "AnimalMeals");

            migrationBuilder.RenameTable(
                name: "AnimalMeals",
                newName: "SpeciesMeals");

            migrationBuilder.RenameIndex(
                name: "IX_AnimalMeals_MealId",
                table: "SpeciesMeals",
                newName: "IX_SpeciesMeals_MealId");

            migrationBuilder.RenameIndex(
                name: "IX_AnimalMeals_AnimalSpeciesSpeciesId",
                table: "SpeciesMeals",
                newName: "IX_SpeciesMeals_AnimalSpeciesSpeciesId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_SpeciesMeals",
                table: "SpeciesMeals",
                columns: new[] { "AnimalId", "MealId" });

            migrationBuilder.AddForeignKey(
                name: "FK_SpeciesMeals_Animals_AnimalId",
                table: "SpeciesMeals",
                column: "AnimalId",
                principalTable: "Animals",
                principalColumn: "AnimalId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_SpeciesMeals_AnimalSpecies_AnimalSpeciesSpeciesId",
                table: "SpeciesMeals",
                column: "AnimalSpeciesSpeciesId",
                principalTable: "AnimalSpecies",
                principalColumn: "SpeciesId");

            migrationBuilder.AddForeignKey(
                name: "FK_SpeciesMeals_Meals_MealId",
                table: "SpeciesMeals",
                column: "MealId",
                principalTable: "Meals",
                principalColumn: "MealId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
