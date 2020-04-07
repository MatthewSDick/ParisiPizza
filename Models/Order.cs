using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ParisiPizza
{

  public class Order
  {

    /*  -- *Id
        -- Items
        -- Order Time
        -- Pickup or Delivery    
    */

    public int Id { get; set; }
    public DateTime OrderTime { get; set; } = DateTime.Now;
    public string PickupDelivery { get; set; }
    public List<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
  }
}