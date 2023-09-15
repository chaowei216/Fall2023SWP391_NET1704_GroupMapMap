using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Area
    {
        [Required]
        [StringLength(10)]
        public string AreaId { get; set; }
        [Required]
        [StringLength(20)]
        public string AreaName { get; set; }

        public Staff Staff { get; set; }

        public ICollection<Cage> Cages { get; set; }
    }
}
