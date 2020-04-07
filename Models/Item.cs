using System;
using System.Text.Json.Serialization;

namespace ParisiPizza
{

  public class Item
  {

    /*  -- Name
        -- Image Path
        -- Price */

    public int Id { get; set; }
    public string Name { get; set; }
    public string Category { get; set; }
    public string ImagePath { get; set; }
    public string Price { get; set; }


  }
}