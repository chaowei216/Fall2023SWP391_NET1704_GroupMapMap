using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Order
    {
        public string OrderId { get; set; }
        public string Email {  get; set; }
        public string FullName { get; set; }
        public string Phone { get; set; }
        public DateTime BuyDate { get; set; }
        public double TotalPrice {  get; set; }

        public ICollection<OrderDetail> OrderDetails { get; set; }

        public Guest Guest { get; set; }
    }
}
