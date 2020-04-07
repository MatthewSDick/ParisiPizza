using System;
using System.Text.Json.Serialization;


namespace ParisiPizza
{

  public class CustomerOrder
  {

    public int Id { get; set; }
    public int CustomerID { get; set; }
    public Customer Customer { get; set; }
    public int OrderId { get; set; }
    public Order Order { get; set; }

  }

}