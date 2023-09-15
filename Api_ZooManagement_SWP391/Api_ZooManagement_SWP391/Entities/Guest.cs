using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Guest
    {
        [Required]
        [EmailAddress]
        public string Email {  get; set; }
        [Required]
        [StringLength(30)]
        public string FullName {  get; set; }
        [Phone]
        public string PhoneNumber { get; set; }

        public ICollection<Order> Orders { get; set; }
    }
}
