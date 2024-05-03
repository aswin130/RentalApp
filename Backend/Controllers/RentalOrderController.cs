using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RentalApp.Models;

namespace RentalApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RentalOrderController : ControllerBase
    {
        private readonly RentalAppContext _context;

        public RentalOrderController(RentalAppContext context)
        {
            _context = context;
        }

        // GET: api/RentalOrder
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RentalOrder>>> GetRentalOrders()
        {
            return await _context.RentalOrders.ToListAsync();
        }

        // GET: api/RentalOrder/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RentalOrder>> GetRentalOrder(string id)
        {
            var rentalOrder = await _context.RentalOrders.FindAsync(id);

            if (rentalOrder == null)
            {
                return NotFound();
            }

            return rentalOrder;
        }

        // PUT: api/RentalOrder/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRentalOrder(string id, RentalOrder rentalOrder)
        {
            if (id != rentalOrder.OrderId)
            {
                return BadRequest();
            }

            _context.Entry(rentalOrder).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RentalOrderExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/RentalOrder
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<RentalOrder>> PostRentalOrder(RentalOrder rentalOrder)
        {
            _context.RentalOrders.Add(rentalOrder);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (RentalOrderExists(rentalOrder.OrderId))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetRentalOrder", new { id = rentalOrder.OrderId }, rentalOrder);
        }

        // DELETE: api/RentalOrder/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRentalOrder(string id)
        {
            var rentalOrder = await _context.RentalOrders.FindAsync(id);
            if (rentalOrder == null)
            {
                return NotFound();
            }

            _context.RentalOrders.Remove(rentalOrder);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RentalOrderExists(string id)
        {
            return _context.RentalOrders.Any(e => e.OrderId == id);
        }
    }
}
