using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ParisiPizza
{

  public class Topping
  {

    public int Id { get; set; }
    public string Name { get; set; }
    public string ImagePath { get; set; }
    public List<PizzaTopping> PizzaToppings { get; set; } = new List<PizzaTopping>();

  }
}