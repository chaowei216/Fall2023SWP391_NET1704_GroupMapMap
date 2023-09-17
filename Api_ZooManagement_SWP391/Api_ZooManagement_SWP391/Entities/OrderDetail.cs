using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class OrderDetail
    {
        [Required]
        [StringLength(10)]
        public string OrderId { get; set; }

        [Required]
        [StringLength(10)]
        public string TicketId {  get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime EntryDate { get; set; }

        public Order Order { get; set; }
        public Ticket Ticket { get; set; }
    }
}
