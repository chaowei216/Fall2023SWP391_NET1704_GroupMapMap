using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class AnimalCage
    {
        [Required]
        public string AnimalId { get; set; }

        [Required]
        public string CageId { get; set;}

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime EntryDate { get; set; }

        [Required]
        [DataType(DataType.DateTime)]
        public DateTime OutDate { get; set; }

        public Animal Animal { get; set; }
        public Cage Cage { get; set; }
    }
}
