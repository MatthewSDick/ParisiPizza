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
    public string OrderTotal { get; set; }
    public string PickupDelivery { get; set; }
    public string OrderStatus { get; set; }
    public List<CustomerOrder> CustomerOrders { get; set; } = new List<CustomerOrder>();
    public List<OrderItem> OrderItems { get; set; } = new List<OrderItem>();
    public List<OrderPizza> OrderPizzas { get; set; } = new List<OrderPizza>();

  }
}