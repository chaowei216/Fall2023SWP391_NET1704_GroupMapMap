using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class SpeciesAnimal
    {
        public string SpeciesId { get; set; }
        public string SpeciesName { get; set; }
        public bool IsExtinc {  get; set; }
        public ICollection<Animal> Animals { get; set; }
    }
}
