using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ParisiPizza
{

  public class Pizza
  {

    public int Id { get; set; }
    public string Size { get; set; }
    public string Price { get; set; }
    public List<OrderPizza> OrderPizzas { get; set; } = new List<OrderPizza>();
    public List<PizzaTopping> PizzaToppings { get; set; } = new List<PizzaTopping>();

  }
}