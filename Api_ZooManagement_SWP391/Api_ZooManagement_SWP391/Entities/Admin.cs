using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Admin
    {
        [Required]
        [StringLength(10)]
        public string AdminId {  get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }

        public Account Account { get; set; }    

    }
}
