using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Animal
    {
        [Required]
        [MaxLength(6)]
        public string AnimalID { get; set; }

        [Required]
        [MaxLength(30)]
        public string Name {  get; set; }

        [Required]
        public string Description { get; set; }

        public bool Sex { get; set; }

        [Required]
        [MaxLength(20)]
        public string Type {  get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime EntryDate { get; set; }

        [Required]
        public string Region { get; set; }

        [Required]
        public string HealthCheck { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime Birthday { get; set; }

        public SpeciesAnimal SpeciesAnimal { get; set; }

        public ICollection<AnimalCage> AnimalCages { get; set; }
        public ICollection<FeedSchedule> FeedSchedules { get; set; }
        public ICollection<AnimalTrainer> AnimalTrainers { get; set; }
    }
}
