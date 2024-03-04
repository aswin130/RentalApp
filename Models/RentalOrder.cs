using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentalApp.Models
{
    public class RentalOrder
    {
        public string OrderId { get; set; }
        public string RentalStartDate { get; set; }

        public string RentalEndDate { get; set; }

        public string Price { get; set; }

        [ForeignKey("Customer")]
        public int CustomerId { get; set; }
        public Customer? Customer{get;set;}

        [ForeignKey("Vehicle")]
        public int VehicleId { get; set; }
        public Vehicle? Vehicle {get;set;}
       
        // public List<Enrollment>? Enrollments { get; set; }
    }
}