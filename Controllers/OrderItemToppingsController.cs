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
  public class OrderItemToppingsController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public OrderItemToppingsController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/OrderItemToppings
    [HttpGet]
    public async Task<ActionResult<IEnumerable<OrderItemTopping>>> GetOrderItemToppings()
    {
      return await _context.OrderItemToppings.ToListAsync();
    }

    // GET: api/OrderItemToppings/5
    [HttpGet("{id}")]
    public async Task<ActionResult<OrderItemTopping>> GetOrderItemTopping(int id)
    {
      var orderItemTopping = await _context.OrderItemToppings.FindAsync(id);

      if (orderItemTopping == null)
      {
        return NotFound();
      }

      return orderItemTopping;
    }

    // PUT: api/OrderItemToppings/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutOrderItemTopping(int id, OrderItemTopping orderItemTopping)
    {
      if (id != orderItemTopping.Id)
      {
        return BadRequest();
      }

      _context.Entry(orderItemTopping).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!OrderItemToppingExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/OrderItemToppings
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<OrderItemTopping>> PostOrderItemTopping(OrderItemTopping orderItemTopping)
    {

      // If orderItemId is null put code in here to create the orderItem

      Console.WriteLine($"*************************** DEBUG POST: {orderItemTopping.ToppingId}");
      Console.WriteLine($"*************************** DEBUG POST: {orderItemTopping.OrderItemId}");
      _context.OrderItemToppings.Add(orderItemTopping);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetOrderItemTopping", new { id = orderItemTopping.Id }, orderItemTopping);
    }


    [HttpDelete("deleteTopping")]
    public async Task<ActionResult<OrderItemTopping>> DeleteOrderItemTopping(OrderItemTopping OrderItemTopping)
    {
      Console.WriteLine($" ***************************************** Got here");
      Console.WriteLine($"*************************** DEBUG DELETE: side: {OrderItemTopping.Side}");
      Console.WriteLine($"*************************** DEBUG DELETE: toppingID: {OrderItemTopping.ToppingId}");
      Console.WriteLine($"*************************** DEBUG DELETE: orderItemId: {OrderItemTopping.OrderItemId}");
      var toDelete = _context.OrderItemToppings.FirstOrDefault(i => i.Side == OrderItemTopping.Side && i.ToppingId == OrderItemTopping.ToppingId && i.OrderItemId == OrderItemTopping.OrderItemId);

      if (toDelete == null)
      {
        return NotFound();
      }

      _context.OrderItemToppings.Remove(toDelete);
      await _context.SaveChangesAsync();
      return Ok();
    }

    private bool OrderItemToppingExists(int id)
    {
      return _context.OrderItemToppings.Any(e => e.Id == id);
    }


    // DELETE: api/OrderItemToppings/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<OrderItemTopping>> DeleteOrderItemTopping(int id)
    {
      var orderItemTopping = await _context.OrderItemToppings.FindAsync(id);
      if (orderItemTopping == null)
      {
        return NotFound();
      }

      _context.OrderItemToppings.Remove(orderItemTopping);
      await _context.SaveChangesAsync();

      return orderItemTopping;
    }

  }
}
