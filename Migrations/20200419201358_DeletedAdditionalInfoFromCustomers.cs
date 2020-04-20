using Microsoft.EntityFrameworkCore.Migrations;

namespace ParisiPizza.Migrations
{
    public partial class DeletedAdditionalInfoFromCustomers : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AdditionalInfo",
                table: "Customers");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AdditionalInfo",
                table: "Customers",
                type: "text",
                nullable: true);
        }
    }
}
