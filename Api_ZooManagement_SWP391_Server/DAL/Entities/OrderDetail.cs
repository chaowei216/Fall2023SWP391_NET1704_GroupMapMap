using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class OrderDetail
    {
        public string OrderId { get; set; }
        public string TicketId {  get; set; }
        public DateTime EntryDate { get; set; }
        public DateTime BuyDate { get; set; }
        public Order Order { get; set; }
        public Ticket Ticket { get; set; }
    }
}
