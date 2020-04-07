using System;
using System.Text.Json.Serialization;


namespace ParisiPizza
{

  public class PizzaTopping
  {

    public int Id { get; set; }
    public int PizzaID { get; set; }
    public Pizza Pizza { get; set; }
    public int ToppingId { get; set; }
    public Topping Topping { get; set; }

  }

}