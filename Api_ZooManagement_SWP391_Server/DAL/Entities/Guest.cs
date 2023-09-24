using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Guest
    {
    
        public string Email {  get; set; }
        public string FullName {  get; set; }
        public string PhoneNumber { get; set; }

        public ICollection<Order> Orders { get; set; }
        public ICollection<Review> Reviews { get; set; }
    }
}
