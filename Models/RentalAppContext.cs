
using Microsoft.EntityFrameworkCore;
 
namespace RentalApp.Models
{
    public class RentalAppContext : DbContext
    {
        public RentalAppContext(DbContextOptions<RentalAppContext> options) : base(options)
        {
        }
 
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Location> Locations { get; set; }
        public DbSet<Pricing> Pricings { get; set; }
        public DbSet<RentalOrder> RentalOrders { get; set; }
        public DbSet<Vehicle> Vehicles { get; set; }
 
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
 
            modelBuilder.Entity<Pricing>()
                .HasOne(p => p.Vehicle)
                .WithMany(v => v.Pricings)
                .HasForeignKey(p => p.VehicleId);

                modelBuilder.Entity<Pricing>()
                .HasKey(p => new {p.PriceId});
 
            modelBuilder.Entity<Customer>()
                .HasIndex(c => c.CustomerId)
                .IsUnique();
 
            modelBuilder.Entity<RentalOrder>()
                .HasKey(op => new { op.OrderId, op.CustomerId, op.VehicleId });
 
            modelBuilder.Entity<RentalOrder>()
                .HasOne(op => op.Customer)
                .WithMany()
                .HasForeignKey(op => op.CustomerId);
 
            modelBuilder.Entity<RentalOrder>()
                .HasOne(op => op.Vehicle)
                .WithMany()
                .HasForeignKey(op => op.VehicleId);
        }
    }
}
// using Microsoft.EntityFrameworkCore;

// using System.Collections.Generic;


// using Microsoft.AspNetCore.Identity;
// namespace RentalApp.Models
// {
// public class RentalAppContext : DbContext
//     {
//         public RentalAppContext(DbContextOptions<RentalAppContext> options) : base(options)
//         {
//         }

//         public DbSet<Customer> Customer { get; set; }
//         public DbSet<Location> Location { get; set; }

//         public DbSet<Pricing> Pricing { get; set; }

//         public DbSet<RentalOrder> RentalOrder { get; set; }
//         public DbSet<Vehicle> Vehicle { get; set; }

//         protected override void OnModelCreating(ModelBuilder modelBuilder)
//     {
//         base.OnModelCreating(modelBuilder); 
       
//          modelBuilder.Entity<Pricing>()        
//          .HasOne(p => p.Vehicle)
//          .WithMany(v => v.Pricing)
//         .HasForeignKey(p => p.VehicleId);  

//          modelBuilder.Entity<Customer>()        
//          .HasIndex(c => c.CustomerId)        
//          .IsUnique();    

//          modelBuilder.Entity<RentalOrder>()       
//         .HasKey(op => new { op.OrderId, op.CustomerId, op.VehicleId });

//         modelBuilder.Entity<RentalOrder>()        
//         .HasOne(op => op.Customer)        
//         .WithMany()        
//         .HasForeignKey(op => op.CustomerId);

//         modelBuilder.Entity<RentalOrder>()        
//         .HasOne(op => op.Vehicle)        
//         .WithMany()        
//         .HasForeignKey(op => op.VehicleId);

         
        
// 	}
// }
// }