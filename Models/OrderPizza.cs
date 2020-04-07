using System;
using System.Text.Json.Serialization;


namespace ParisiPizza
{

  public class OrderPizza
  {

    public int Id { get; set; }
    public int PizzaId { get; set; }
    public Pizza Pizza { get; set; }
    public int OrderId { get; set; }
    public Order Order { get; set; }

  }

}