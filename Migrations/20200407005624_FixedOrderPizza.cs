using Microsoft.EntityFrameworkCore.Migrations;

namespace ParisiPizza.Migrations
{
    public partial class FixedOrderPizza : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomerOrder_Customers_CustomerID",
                table: "CustomerOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_CustomerOrder_Orders_OrderId",
                table: "CustomerOrder");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderPizza_Orders_OrderId",
                table: "OrderPizza");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderPizza_Items_PizzaId",
                table: "OrderPizza");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderPizza",
                table: "OrderPizza");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CustomerOrder",
                table: "CustomerOrder");

            migrationBuilder.RenameTable(
                name: "OrderPizza",
                newName: "OrderPizzas");

            migrationBuilder.RenameTable(
                name: "CustomerOrder",
                newName: "CustomerOrders");

            migrationBuilder.RenameIndex(
                name: "IX_OrderPizza_PizzaId",
                table: "OrderPizzas",
                newName: "IX_OrderPizzas_PizzaId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderPizza_OrderId",
                table: "OrderPizzas",
                newName: "IX_OrderPizzas_OrderId");

            migrationBuilder.RenameIndex(
                name: "IX_CustomerOrder_OrderId",
                table: "CustomerOrders",
                newName: "IX_CustomerOrders_OrderId");

            migrationBuilder.RenameIndex(
                name: "IX_CustomerOrder_CustomerID",
                table: "CustomerOrders",
                newName: "IX_CustomerOrders_CustomerID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderPizzas",
                table: "OrderPizzas",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CustomerOrders",
                table: "CustomerOrders",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerOrders_Customers_CustomerID",
                table: "CustomerOrders",
                column: "CustomerID",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerOrders_Orders_OrderId",
                table: "CustomerOrders",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderPizzas_Orders_OrderId",
                table: "OrderPizzas",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderPizzas_Items_PizzaId",
                table: "OrderPizzas",
                column: "PizzaId",
                principalTable: "Items",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CustomerOrders_Customers_CustomerID",
                table: "CustomerOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_CustomerOrders_Orders_OrderId",
                table: "CustomerOrders");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderPizzas_Orders_OrderId",
                table: "OrderPizzas");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderPizzas_Items_PizzaId",
                table: "OrderPizzas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_OrderPizzas",
                table: "OrderPizzas");

            migrationBuilder.DropPrimaryKey(
                name: "PK_CustomerOrders",
                table: "CustomerOrders");

            migrationBuilder.RenameTable(
                name: "OrderPizzas",
                newName: "OrderPizza");

            migrationBuilder.RenameTable(
                name: "CustomerOrders",
                newName: "CustomerOrder");

            migrationBuilder.RenameIndex(
                name: "IX_OrderPizzas_PizzaId",
                table: "OrderPizza",
                newName: "IX_OrderPizza_PizzaId");

            migrationBuilder.RenameIndex(
                name: "IX_OrderPizzas_OrderId",
                table: "OrderPizza",
                newName: "IX_OrderPizza_OrderId");

            migrationBuilder.RenameIndex(
                name: "IX_CustomerOrders_OrderId",
                table: "CustomerOrder",
                newName: "IX_CustomerOrder_OrderId");

            migrationBuilder.RenameIndex(
                name: "IX_CustomerOrders_CustomerID",
                table: "CustomerOrder",
                newName: "IX_CustomerOrder_CustomerID");

            migrationBuilder.AddPrimaryKey(
                name: "PK_OrderPizza",
                table: "OrderPizza",
                column: "Id");

            migrationBuilder.AddPrimaryKey(
                name: "PK_CustomerOrder",
                table: "CustomerOrder",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerOrder_Customers_CustomerID",
                table: "CustomerOrder",
                column: "CustomerID",
                principalTable: "Customers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_CustomerOrder_Orders_OrderId",
                table: "CustomerOrder",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderPizza_Orders_OrderId",
                table: "OrderPizza",
                column: "OrderId",
                principalTable: "Orders",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderPizza_Items_PizzaId",
                table: "OrderPizza",
                column: "PizzaId",
                principalTable: "Items",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
