using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class SpeciesAnimal
    {
        public string Id { get; set; }
        public string SpeciesName { get; set; }
        public bool Rarity {  get; set; }
        public ICollection<Animal> Animals { get; set; }
    }
}
