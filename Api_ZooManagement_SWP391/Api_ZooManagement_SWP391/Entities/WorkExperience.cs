using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class WorkExperience
    {
        [Required]
        [StringLength(10)]
        public string Type { get; set; }

        [Required]
        public string Description { get; set; }

        public ICollection<TrainerExperience> TrainerExperiences { get; set; }
    }
}
