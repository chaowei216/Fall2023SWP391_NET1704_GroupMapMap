using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Area
    {
        public string AreaId { get; set; }
        public string AreaName { get; set; }
        public string Description { get; set; }

        public ICollection<Cage> Cages { get; set; }
    }
}
