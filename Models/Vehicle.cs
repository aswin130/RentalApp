using System.Collections.Generic;

namespace RentalApp.Models
{
public class Vehicle

{

    public int VehicleId { get; set; }

    public string Make { get; set; }

    public string Model { get; set; }

    public int Year { get; set; }

    public string Color { get; set; }

    public decimal RentalPrice { get; set; }

    public string AvailabilityStatus { get; set; }

    public List<Pricing> Pricings { get; set; }

}
}