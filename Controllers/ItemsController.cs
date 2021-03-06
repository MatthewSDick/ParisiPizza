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
  public class ItemsController : ControllerBase
  {
    private readonly DatabaseContext _context;

    public ItemsController(DatabaseContext context)
    {
      _context = context;
    }

    // GET: api/Items
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Item>>> GetItems()
    {
      return await _context.Items.ToListAsync();
    }

    [HttpGet("category")]

    public async Task<ActionResult<IEnumerable<Item>>> GetCatagory(string categoryName)
    {

      var results = await _context.Items.Where(item => item.Category == categoryName).ToListAsync();


      if (results == null)
      {
        return NotFound();
      }

      return results;
    }




    // GET: api/Items/5
    [HttpGet("{id}")]
    public async Task<ActionResult<Item>> GetItem(int id)
    {
      var item = await _context.Items.FindAsync(id);

      if (item == null)
      {
        return NotFound();
      }

      return item;
    }

    // PUT: api/Items/5
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPut("{id}")]
    public async Task<IActionResult> PutItem(int id, Item item)
    {
      if (id != item.Id)
      {
        return BadRequest();
      }

      _context.Entry(item).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ItemExists(id))
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

    // POST: api/Items
    // To protect from overposting attacks, please enable the specific properties you want to bind to, for
    // more details see https://aka.ms/RazorPagesCRUD.
    [HttpPost("{item}")]
    public async Task<ActionResult<Item>> PostItem(Item item)

    {
      _context.Items.Add(item);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetItem", new { id = item.Id }, item);
    }





    // [HttpPost("{itemId}")]
    // public async Task<ActionResult<Item>> addItemToOrder(int orderId, int itemId)
    // {
    //   Version item = new Item
    //   {
    //     orderId = orderId,
    //     itemId = itemId
    //   };
    // }








    // DELETE: api/Items/5
    [HttpDelete("{id}")]
    public async Task<ActionResult<Item>> DeleteItem(int id)
    {
      var item = await _context.Items.FindAsync(id);
      if (item == null)
      {
        return NotFound();
      }

      _context.Items.Remove(item);
      await _context.SaveChangesAsync();

      return item;
    }

    private bool ItemExists(int id)
    {
      return _context.Items.Any(e => e.Id == id);
    }
  }
}
