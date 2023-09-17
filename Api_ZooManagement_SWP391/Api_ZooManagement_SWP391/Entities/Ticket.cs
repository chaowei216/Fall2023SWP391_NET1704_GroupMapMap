using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Ticket
    {
        [Required]
        [StringLength(10)]
        public string TicketId { get; set; }

        [Required]
        [StringLength(20)]
        public string Type {  get; set; }

        [Required]
        [Range(0,100)]
        public double Price { get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }

    }
}
