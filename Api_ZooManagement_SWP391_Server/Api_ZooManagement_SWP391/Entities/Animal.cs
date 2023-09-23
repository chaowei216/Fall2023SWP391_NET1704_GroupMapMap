using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Animal
    {
        public string AnimalId { get; set; }
        public string Name {  get; set; }
        public string Description { get; set; }
        public bool Sex { get; set; }
        public DateTime EntryDate { get; set; }
        public string Region { get; set; }
        public string HealthCheck { get; set; }
        public DateTime Birthday { get; set; }
        public bool Status { get; set; }
        public SpeciesAnimal SpeciesAnimal { get; set; }
        public ICollection<AnimalCage> AnimalCages { get; set; }
        public ICollection<AnimalTrainer> AnimalTrainers { get; set; }
        public ICollection<AnimalSchedule> AnimalSchedules { get; set; }
        public ICollection<AnimalFood> AnimalFoods { get; set; }
    }
}
