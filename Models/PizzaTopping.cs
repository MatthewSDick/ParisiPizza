using System;
using System.Text.Json.Serialization;


namespace ParisiPizza
{

  public class PizzaTopping
  {

    public int Id { get; set; }
    public string Name { get; set; }
    public string ImagePath { get; set; }
    public int OrderID { get; set; }
    public Order Order { get; set; }
    public int PizzaID { get; set; }
    public Pizza Pizza { get; set; }
    public int ToppingId { get; set; }
    public Topping Topping { get; set; }

  }

}