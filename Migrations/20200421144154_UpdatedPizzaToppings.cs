using Microsoft.EntityFrameworkCore.Migrations;

namespace ParisiPizza.Migrations
{
    public partial class UpdatedPizzaToppings : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImagePath",
                table: "PizzaToppings",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "PizzaToppings",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "OrderID",
                table: "PizzaToppings",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_PizzaToppings_OrderID",
                table: "PizzaToppings",
                column: "OrderID");

            migrationBuilder.AddForeignKey(
                name: "FK_PizzaToppings_Orders_OrderID",
                table: "PizzaToppings",
                column: "OrderID",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_PizzaToppings_Orders_OrderID",
                table: "PizzaToppings");

            migrationBuilder.DropIndex(
                name: "IX_PizzaToppings_OrderID",
                table: "PizzaToppings");

            migrationBuilder.DropColumn(
                name: "ImagePath",
                table: "PizzaToppings");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "PizzaToppings");

            migrationBuilder.DropColumn(
                name: "OrderID",
                table: "PizzaToppings");
        }
    }
}
