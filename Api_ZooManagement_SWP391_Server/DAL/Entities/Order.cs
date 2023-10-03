using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Runtime.CompilerServices;

namespace DAL.Entities
{
    public class Order
    {
        public string OrderId { get; set; }
<<<<<<< HEAD
        public double TotalPrice {  get; set; }
=======
        //public string FullName { get; set; }
        //public string Phone { get; set; }
        public double TotalPrice {  get; set; }
        //public ICollection<OrderDetail> OrderDetails { get; set; }
>>>>>>> 8a2623b934d30af9e5470daa298ce9e736308120
        public Guest Guest { get; set; }
        public ICollection<OrderTicket> OrderTickets { get; set; }
    }
}
