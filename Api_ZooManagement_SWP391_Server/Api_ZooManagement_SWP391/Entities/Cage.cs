using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Cage
    {
        public string CId {  get; set; }
        public int MaxCapacity { get; set; }
        public int AnimalQuantity {  get; set; }

        public ICollection<AnimalCage> AnimalCages {  get; set; }

        public Area Area { get; set; }
    }
}
