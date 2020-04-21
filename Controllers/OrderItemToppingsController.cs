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
      _context.OrderItemToppings.Add(orderItemTopping);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetOrderItemTopping", new { id = orderItemTopping.Id }, orderItemTopping);
    }



    [HttpPost("addTopping")]
    public async Task<ActionResult> AddItemToOrder(int orderItemId, int toppingId)
    {

      var toppingItem = new OrderItemTopping
      {
        ToppingId = toppingId,
        OrderItemId = orderItemId
      };
      Console.WriteLine(toppingItem.ToppingId);
      Console.WriteLine(toppingItem.OrderItemId);

      _context.OrderItemToppings.Add(toppingItem);
      await _context.SaveChangesAsync();
      return Ok(toppingItem);
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

    private bool OrderItemToppingExists(int id)
    {
      return _context.OrderItemToppings.Any(e => e.Id == id);
    }
  }
}
