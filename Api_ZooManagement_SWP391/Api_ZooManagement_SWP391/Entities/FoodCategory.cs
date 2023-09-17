using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class FoodCategory
    {
        [Required]
        [MaxLength(10)]
        public string CategoryId { get; set; }

        [Required]
        [MaxLength(20)]
        public string CategoryName { get; set; }
        public ICollection<Food> Foods { get; set; }
    }
}
