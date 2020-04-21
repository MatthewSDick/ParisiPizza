using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;


namespace ParisiPizza
{

  public class OrderItem
  {

    public int Id { get; set; }
    public int ItemId { get; set; }
    public Item Item { get; set; }
    public int OrderId { get; set; }
    [JsonIgnore]
    public Order Order { get; set; }

    public List<OrderItemTopping> OrderItemToppings { get; set; } = new List<OrderItemTopping>();

  }

}