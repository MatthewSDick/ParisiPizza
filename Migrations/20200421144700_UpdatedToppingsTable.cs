using Microsoft.EntityFrameworkCore.Migrations;

namespace ParisiPizza.Migrations
{
    public partial class UpdatedToppingsTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Placement",
                table: "Toppings");

            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "Toppings",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "Toppings");

            migrationBuilder.AddColumn<string>(
                name: "Placement",
                table: "Toppings",
                type: "text",
                nullable: true);
        }
    }
}
