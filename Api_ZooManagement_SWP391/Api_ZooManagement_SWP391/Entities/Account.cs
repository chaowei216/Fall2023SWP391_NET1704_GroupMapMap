using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Account
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [MaxLength(30)]
        public string Password {  get; set; }
        [Required]
        public Role Role { get; set; }

        public ZooTrainer ZooTrainer { get; set; }

        public Staff Staff { get; set; }

        public Admin Admin { get; set; }
    }
}
