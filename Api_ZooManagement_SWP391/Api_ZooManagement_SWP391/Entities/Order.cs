using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Order
    {
        [Required]
        [StringLength(10)]
        public string OrderId { get; set; }
        [Required]
        [EmailAddress]
        public string Email {  get; set; }

        [Required]
        [StringLength(10)]
        public string FullName { get; set; }
        [Required]
        [StringLength(10)]
        public string Phone { get; set; }
        [Required]
        [DataType(DataType.DateTime)]
        public DateTime BuyDate { get; set; }

        [Range(0,50)]
        public double TotalPrice {  get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }

        public Guest Guest { get; set; }
    }
}
