using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Ticket
    {
        public string TicketId { get; set; }

        public string Type {  get; set; }

        public double Price { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }

    }
}
