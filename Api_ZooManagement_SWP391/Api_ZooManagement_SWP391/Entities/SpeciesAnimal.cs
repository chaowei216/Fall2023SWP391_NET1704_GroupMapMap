using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class SpeciesAnimal
    {
        [Required]
        [MaxLength(5)]
        [RegularExpression(@"^A\d{5}$")]
        public string SpeciesId { get; set; }

        [Required]
        public string SpeciesName { get; set; }

    }
}
