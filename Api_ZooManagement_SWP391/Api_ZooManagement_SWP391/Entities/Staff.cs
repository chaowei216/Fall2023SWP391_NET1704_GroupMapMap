using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Staff
    {
        [Required]
        [StringLength(10)]
        public string SId { get; set; }
        [Required]
        [StringLength(30)]
        public string FullName { get; set; }
        [Required]
        [EmailAddress]
        public string Email { get; set; }
        [Phone]
        public string Phone { get; set; }
        [StringLength(30)]
        public string Address { get; set; }
        [Required]
        public bool Sex { get; set; }

        public Account Account { get; set; }

        public ICollection<ZooTrainer> ZooTrainers { get; set; }

        public Area Area { get; set; }


}
}
