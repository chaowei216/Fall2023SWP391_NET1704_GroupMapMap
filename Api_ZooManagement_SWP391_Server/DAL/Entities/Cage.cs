using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class Cage
    {
        public string CId {  get; set; }
        public int MaxCapacity { get; set; }
        public int AnimalQuantity {  get; set; }

        public ICollection<AnimalCage> AnimalCages {  get; set; }

        public Area Area { get; set; }
        public string AreaId { get; set; }
    }
}
