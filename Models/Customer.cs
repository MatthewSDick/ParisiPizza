using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace ParisiPizza
{

  public class Customer
  {
    public int Id { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Address { get; set; }
    public string City { get; set; }
    public string State { get; set; }
    public string Zip { get; set; }
    public string EMail { get; set; }
    public string Phone { get; set; }
    public List<CustomerOrder> CustomerOrders { get; set; } = new List<CustomerOrder>();
  }
}