using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ParisiPizza;

    public class DtatbaseContext : DbContext
    {
        public DtatbaseContext (DbContextOptions<DtatbaseContext> options)
            : base(options)
        {
        }

        public DbSet<ParisiPizza.Customer> Customer { get; set; }
    }
