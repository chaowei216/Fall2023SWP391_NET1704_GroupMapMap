using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class AnimalCages
    {
        [Required]
        public string AnimalId { get; set; }

        [Required]
        public string CageId { get; set;}

        [Required]
        [DataType(DataType.Date)]
        public DateOnly EntryDate { get; set; }

        [Required]
        [DataType(DataType.Date)]
        public DateOnly OutDate { get; set; }

        public Animal Animal { get; set; }
        public Cage Cage { get; set; }
    }
}
