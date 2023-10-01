using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    public partial class Ini : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Animals_SpeciesAnimals_SpeciesAnimalId",
                table: "Animals");

            migrationBuilder.DropIndex(
                name: "IX_Animals_SpeciesAnimalId",
                table: "Animals");

            migrationBuilder.DropColumn(
                name: "SpeciesAnimalId",
                table: "Animals");

            migrationBuilder.AlterColumn<string>(
                name: "SpeciesId",
                table: "Animals",
                type: "nvarchar(5)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(max)");

            migrationBuilder.CreateIndex(
                name: "IX_Animals_SpeciesId",
                table: "Animals",
                column: "SpeciesId");

            migrationBuilder.AddForeignKey(
                name: "FK_Animals_SpeciesAnimals_SpeciesId",
                table: "Animals",
                column: "SpeciesId",
                principalTable: "SpeciesAnimals",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Animals_SpeciesAnimals_SpeciesId",
                table: "Animals");

            migrationBuilder.DropIndex(
                name: "IX_Animals_SpeciesId",
                table: "Animals");

            migrationBuilder.AlterColumn<string>(
                name: "SpeciesId",
                table: "Animals",
                type: "nvarchar(max)",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "nvarchar(5)");

            migrationBuilder.AddColumn<string>(
                name: "SpeciesAnimalId",
                table: "Animals",
                type: "nvarchar(5)",
                nullable: true);

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
        }
    }
}
