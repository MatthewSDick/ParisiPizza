using System;
using System.Text.Json.Serialization;

namespace ParisiPizza
{

  public class Item
  {

    /*  -- Name
        -- Description
        -- Image Path
        -- Price */

    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public string ImagePath { get; set; }
    public string Price { get; set; }


  }
}