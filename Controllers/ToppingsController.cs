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
  public class ToppingsController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public ToppingsController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Toppings
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Topping>>> GetToppings()
    {
      return await _context.Toppings.ToListAsync();
    }

    // GET: api/Toppings/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Topping>> GetTopping(int id)
    {
      var topping = await _context.Toppings.FindAsync(id);

      if (topping == null)
      {
        return NotFound();
      }

      return topping;
    }

    // PUT: api/Toppings/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutTopping(int id, Topping topping)
    {
      if (id != topping.Id)
      {
        return BadRequest();
      }

      _context.Entry(topping).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ToppingExists(id))
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

    // POST: api/Toppings
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost]
    public async Task<ActionResult<Topping>> PostTopping(Topping topping)
    {
      _context.Toppings.Add(topping);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetTopping", new { id = topping.Id }, topping);
    }

    // DELETE: api/Toppings/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Topping>> DeleteTopping(int id)
    {
      var topping = await _context.Toppings.FindAsync(id);
      if (topping == null)
      {
        return NotFound();
      }

      _context.Toppings.Remove(topping);
      await _context.SaveChangesAsync();

      return topping;
    }

    private bool ToppingExists(int id)
    {
      return _context.Toppings.Any(e => e.Id == id);
    }
  }
}
