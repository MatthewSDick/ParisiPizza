using Microsoft.EntityFrameworkCore.Migrations;

namespace ParisiPizza.Migrations
{
    public partial class AddedStatusToORder : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderPizzas_Pizza_PizzaId",
                table: "OrderPizzas");

            migrationBuilder.DropForeignKey(
                name: "FK_PizzaTopping_Pizza_PizzaID",
                table: "PizzaTopping");

            migrationBuilder.DropForeignKey(
                name: "FK_PizzaTopping_Topping_ToppingId",
                table: "PizzaTopping");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Topping",
                table: "Topping");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PizzaTopping",
                table: "PizzaTopping");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Pizza",
                table: "Pizza");

            migrationBuilder.RenameTable(
                name: "Topping",
                newName: "Toppings");

            migrationBuilder.RenameTable(
                name: "PizzaTopping",
                newName: "PizzaToppings");

            migrationBuilder.RenameTable(
                name: "Pizza",
                newName: "Pizzas");

            migrationBuilder.RenameIndex(
                name: "IX_PizzaTopping_ToppingId",
                table: "PizzaToppings",
                newName: "IX_PizzaToppings_ToppingId");

            migrationBuilder.RenameIndex(
                name: "IX_PizzaTopping_PizzaID",
                table: "PizzaToppings",
                newName: "IX_PizzaToppings_PizzaID");

            migrationBuilder.AddColumn<string>(
                name: "OrderStatus",
                table: "Orders",
                nullable: true);

            migrationBuilder.AddPrimaryKey(
                name: "PK_Toppings",
                table: "Toppings",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PizzaToppings",
                table: "PizzaToppings",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Pizzas",
                table: "Pizzas",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderPizzas_Pizzas_PizzaId",
                table: "OrderPizzas",
                column: "PizzaId",
                principalTable: "Pizzas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PizzaToppings_Pizzas_PizzaID",
                table: "PizzaToppings",
                column: "PizzaID",
                principalTable: "Pizzas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PizzaToppings_Toppings_ToppingId",
                table: "PizzaToppings",
                column: "ToppingId",
                principalTable: "Toppings",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_OrderPizzas_Pizzas_PizzaId",
                table: "OrderPizzas");

            migrationBuilder.DropForeignKey(
                name: "FK_PizzaToppings_Pizzas_PizzaID",
                table: "PizzaToppings");

            migrationBuilder.DropForeignKey(
                name: "FK_PizzaToppings_Toppings_ToppingId",
                table: "PizzaToppings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Toppings",
                table: "Toppings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_PizzaToppings",
                table: "PizzaToppings");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Pizzas",
                table: "Pizzas");

            migrationBuilder.DropColumn(
                name: "OrderStatus",
                table: "Orders");

            migrationBuilder.RenameTable(
                name: "Toppings",
                newName: "Topping");

            migrationBuilder.RenameTable(
                name: "PizzaToppings",
                newName: "PizzaTopping");

            migrationBuilder.RenameTable(
                name: "Pizzas",
                newName: "Pizza");

            migrationBuilder.RenameIndex(
                name: "IX_PizzaToppings_ToppingId",
                table: "PizzaTopping",
                newName: "IX_PizzaTopping_ToppingId");

            migrationBuilder.RenameIndex(
                name: "IX_PizzaToppings_PizzaID",
                table: "PizzaTopping",
                newName: "IX_PizzaTopping_PizzaID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Topping",
                table: "Topping",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_PizzaTopping",
                table: "PizzaTopping",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Pizza",
                table: "Pizza",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_OrderPizzas_Pizza_PizzaId",
                table: "OrderPizzas",
                column: "PizzaId",
                principalTable: "Pizza",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PizzaTopping_Pizza_PizzaID",
                table: "PizzaTopping",
                column: "PizzaID",
                principalTable: "Pizza",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_PizzaTopping_Topping_ToppingId",
                table: "PizzaTopping",
                column: "ToppingId",
                principalTable: "Topping",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
