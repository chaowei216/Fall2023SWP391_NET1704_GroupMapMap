using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class TrainerExperience
    {
        [Required]
        [StringLength(10)]
        public string TrainerId { get; set; }

        [Required]
        [StringLength (10)]
        public string WorkType {  get; set; }

        public ZooTrainer ZooTrainer { get; set; }

        public WorkExperience WorkExperience { get; set; }
    }
}
