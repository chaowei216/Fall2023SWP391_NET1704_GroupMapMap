using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DAL.Migrations
{
    public partial class Initt : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Guests_GuestEmail",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Guests_GuestEmail",
                table: "Reviews");

            migrationBuilder.RenameColumn(
                name: "GuestEmail",
                table: "Reviews",
                newName: "Email");

            migrationBuilder.RenameIndex(
                name: "IX_Reviews_GuestEmail",
                table: "Reviews",
                newName: "IX_Reviews_Email");

            migrationBuilder.RenameColumn(
                name: "GuestEmail",
                table: "Orders",
                newName: "Email");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_GuestEmail",
                table: "Orders",
                newName: "IX_Orders_Email");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Guests_Email",
                table: "Orders",
                column: "Email",
                principalTable: "Guests",
                principalColumn: "Email",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Guests_Email",
                table: "Reviews",
                column: "Email",
                principalTable: "Guests",
                principalColumn: "Email",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Orders_Guests_Email",
                table: "Orders");

            migrationBuilder.DropForeignKey(
                name: "FK_Reviews_Guests_Email",
                table: "Reviews");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Reviews",
                newName: "GuestEmail");

            migrationBuilder.RenameIndex(
                name: "IX_Reviews_Email",
                table: "Reviews",
                newName: "IX_Reviews_GuestEmail");

            migrationBuilder.RenameColumn(
                name: "Email",
                table: "Orders",
                newName: "GuestEmail");

            migrationBuilder.RenameIndex(
                name: "IX_Orders_Email",
                table: "Orders",
                newName: "IX_Orders_GuestEmail");

            migrationBuilder.AddForeignKey(
                name: "FK_Orders_Guests_GuestEmail",
                table: "Orders",
                column: "GuestEmail",
                principalTable: "Guests",
                principalColumn: "Email",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Reviews_Guests_GuestEmail",
                table: "Reviews",
                column: "GuestEmail",
                principalTable: "Guests",
                principalColumn: "Email",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
