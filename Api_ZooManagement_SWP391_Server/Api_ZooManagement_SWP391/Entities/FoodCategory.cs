using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class FoodCategory
    {
        public string CategoryId { get; set; }
        public string CategoryName { get; set; }
        public ICollection<Food> Foods { get; set; }
    }
}
