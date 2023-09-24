using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class SpeciesAnimal
    {
        public string SpeciesId { get; set; }
        public string SpeciesName { get; set; }
        public bool IsExtinct {  get; set; }
        public ICollection<Animal> Animals { get; set; }
    }
}
