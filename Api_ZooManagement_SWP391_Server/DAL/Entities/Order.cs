using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;

namespace DAL.Entities
{
    public class Order
    {
        public string OrderId { get; set; }
        public double TotalPrice {  get; set; }
        public Guest Guest { get; set; }
        public ICollection<OrderTicket> OrderTickets { get; set; }
    }
}
