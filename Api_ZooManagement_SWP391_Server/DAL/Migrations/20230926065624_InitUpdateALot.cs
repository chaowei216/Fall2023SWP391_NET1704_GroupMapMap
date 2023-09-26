using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    public partial class InitUpdateALot : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Animals_SpeciesAnimals_SpeciesAnimalSpeciesId",
                table: "Animals");

            migrationBuilder.DropForeignKey(
                name: "FK_News_NewsCategories_NewsCategoryCategoryId",
                table: "News");

            migrationBuilder.DropIndex(
                name: "IX_News_NewsCategoryCategoryId",
                table: "News");

            migrationBuilder.DropIndex(
                name: "IX_Animals_SpeciesAnimalSpeciesId",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "NewsCategoryCategoryId",
                table: "News");

            migrationBuilder.DropColumn(
                name: "SpeciesAnimalSpeciesId",
                table: "Animals");

            migrationBuilder.RenameColumn(
                name: "SpeciesId",
                table: "SpeciesAnimals",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "NewsCategories",
                newName: "Id");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "FoodCategories",
                newName: "Id");

            migrationBuilder.AddColumn<string>(
                name: "NewsCategoryId",
                table: "News",
                type: "nvarchar(5)",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "SpeciesAnimalId",
                table: "Animals",
                type: "nvarchar(5)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Users_Email",
                table: "Users",
                column: "Email",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_SpeciesAnimals_SpeciesName",
                table: "SpeciesAnimals",
                column: "SpeciesName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_News_NewsCategoryId",
                table: "News",
                column: "NewsCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Areas_AreaName",
                table: "Areas",
                column: "AreaName",
                unique: true);

            migrationBuilder.CreateIndex(
                name: "IX_Animals_SpeciesAnimalId",
                table: "Animals",
                column: "SpeciesAnimalId");

            migrationBuilder.AddForeignKey(
                name: "FK_Animals_SpeciesAnimals_SpeciesAnimalId",
                table: "Animals",
                column: "SpeciesAnimalId",
                principalTable: "SpeciesAnimals",
                principalColumn: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_News_NewsCategories_NewsCategoryId",
                table: "News",
                column: "NewsCategoryId",
                principalTable: "NewsCategories",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Animals_SpeciesAnimals_SpeciesAnimalId",
                table: "Animals");

            migrationBuilder.DropForeignKey(
                name: "FK_News_NewsCategories_NewsCategoryId",
                table: "News");

            migrationBuilder.DropIndex(
                name: "IX_Users_Email",
                table: "Users");

            migrationBuilder.DropIndex(
                name: "IX_SpeciesAnimals_SpeciesName",
                table: "SpeciesAnimals");

            migrationBuilder.DropIndex(
                name: "IX_News_NewsCategoryId",
                table: "News");

            migrationBuilder.DropIndex(
                name: "IX_Areas_AreaName",
                table: "Areas");

            migrationBuilder.DropIndex(
                name: "IX_Animals_SpeciesAnimalId",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "NewsCategoryId",
                table: "News");

            migrationBuilder.DropColumn(
                name: "SpeciesAnimalId",
                table: "Animals");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "SpeciesAnimals",
                newName: "SpeciesId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "NewsCategories",
                newName: "CategoryId");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "FoodCategories",
                newName: "CategoryId");

            migrationBuilder.AddColumn<string>(
                name: "NewsCategoryCategoryId",
                table: "News",
                type: "nvarchar(5)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "SpeciesAnimalSpeciesId",
                table: "Animals",
                type: "nvarchar(5)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.CreateIndex(
                name: "IX_News_NewsCategoryCategoryId",
                table: "News",
                column: "NewsCategoryCategoryId");

            migrationBuilder.CreateIndex(
                name: "IX_Animals_SpeciesAnimalSpeciesId",
                table: "Animals",
                column: "SpeciesAnimalSpeciesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Animals_SpeciesAnimals_SpeciesAnimalSpeciesId",
                table: "Animals",
                column: "SpeciesAnimalSpeciesId",
                principalTable: "SpeciesAnimals",
                principalColumn: "SpeciesId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_News_NewsCategories_NewsCategoryCategoryId",
                table: "News",
                column: "NewsCategoryCategoryId",
                principalTable: "NewsCategories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
