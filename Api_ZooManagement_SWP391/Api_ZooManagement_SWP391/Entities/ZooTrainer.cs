using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace Api_ZooManagement_SWP391.Entities
{
    public class ZooTrainer
    {
        [Required]
        [StringLength(10)]
        public string Id { get; set; }

        [Required]
        [StringLength(30)]
        public string Name { get; set; }

        [Required]
        [StringLength (30)]
        public string Address {  get; set; }

        [Required]
        [EmailAddress]
        public string Email { get; set; }

        [Required]
        [Phone]
        public string Phone {  get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime StartDate { get; set; }

        [DataType(DataType.DateTime)]
        public DateTime EndDate { get; set; }

        [Required]
        public bool Sex { get; set; }

        public Account Account { get; set; }

        public Staff Staff { get; set; }

        public ICollection<TrainerExperience> TrainerExperiences { get; set; }
        public ICollection<AnimalTrainer> AnimalTrainers { get; set; }

    }
}
