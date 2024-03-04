using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace RentalApp.Models
{
    public class Pricing
    {
        public int PriceId { get; set; }
        public int RentalRatePerDay  { get; set; }

        public int Discounts  { get; set; }

        [ForeignKey("Vehicle")]
        public int VehicleId { get; set; }
        public Vehicle? Vehicle {get;set;}
    }
}