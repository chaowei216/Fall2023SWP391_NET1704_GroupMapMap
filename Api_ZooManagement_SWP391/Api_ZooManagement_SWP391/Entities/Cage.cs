using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Cage
    {

        [Required]
        [StringLength(10)]
        public string CId {  get; set; }
        [Required]
        [Range(0,int.MaxValue)]
        public int MaxCapacity { get; set; }
        [Required]
        [Range(0,int.MaxValue)]
        public int AnimalQuantity {  get; set; }
        [Required]
        [StringLength(10)]
        public string AreaID { get; set; }

        public ICollection<AnimalCage> AnimalCages {  get; set; }

        public Area Area { get; set; }
    }
}
