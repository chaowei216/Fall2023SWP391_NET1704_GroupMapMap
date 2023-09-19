using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class OrderDetail
    {
        public string OrderId { get; set; }

        public string TicketId {  get; set; }

        public DateTime EntryDate { get; set; }

        public Order Order { get; set; }
        public Ticket Ticket { get; set; }
    }
}
