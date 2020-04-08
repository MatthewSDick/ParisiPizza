using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ParisiPizza
{

  public class Item
  {

    public int Id { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public string ImagePath { get; set; }
    public string Price { get; set; }
    [JsonIgnore]
    public List<OrderItem> OrderItems { get; set; } = new List<OrderItem>();


  }
}