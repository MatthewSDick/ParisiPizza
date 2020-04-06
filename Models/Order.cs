using System;
using System.Text.Json.Serialization;

namespace ParisiPizza
{

  public class Order
  {

    /*  -- *Id
        -- Items
        -- Order Time
        -- Completed
        -- Pickup or Delivery    
    */

    public int Id { get; set; }
    public DateTime OrderTime { get; set; } = DateTime.Now;
    
    


  }
}