using System;
using System.Text.Json.Serialization;


namespace ParisiPizza
{

  public class OrderItemTopping
  {

    public int Id { get; set; }
    public int ToppingId { get; set; }
    public Topping Topping { get; set; }
    public int OrderItemId { get; set; }
    [JsonIgnore]
    public OrderItem OrderItem { get; set; }

  }

}