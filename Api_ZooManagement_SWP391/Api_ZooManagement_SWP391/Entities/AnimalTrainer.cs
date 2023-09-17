using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class AnimalTrainer
    {
        [Required]
        [MaxLength(10)]
        public string TrainerId { get; set; }

        [Required]
        [MaxLength(10)]
        public string AnimalId { get; set; }

        public ZooTrainer ZooTrainer { get; set; }
        public Animal Animal { get; set; }

    }
}
