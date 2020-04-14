using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ParisiPizza;
using ParisiPizza.Models;

namespace ParisiPizza.Controllers
{
  [Route("api/[controller]")]
  [ApiController]
  public class OrderItemController : ControllerBase
  {

    private readonly DatabaseContext _context;

    public OrderItemController(DatabaseContext context)
    {
      _context = context;
    }

    [HttpPost("addItem")]
    public async Task<ActionResult> AddItemToOrder(int orderId, int itemId)
    {

      var orderItem = new OrderItem
      {
        ItemId = itemId,
        OrderId = orderId
      };
      _context.OrderItems.Add(orderItem);
      await _context.SaveChangesAsync();
      return Ok(orderItem);
    }


    [HttpDelete("{id}")]
    public async Task<ActionResult<OrderItem>> DeleteItem(int id)
    {
      var item = await _context.OrderItems.FindAsync(id);
      if (item == null)
      {
        return NotFound();
      }

      _context.OrderItems.Remove(item);
      await _context.SaveChangesAsync();

      return item;
    }

    private bool OrderExists(int id)
    {
      return _context.OrderItems.Any(e => e.Id == id);
    }




  }
}