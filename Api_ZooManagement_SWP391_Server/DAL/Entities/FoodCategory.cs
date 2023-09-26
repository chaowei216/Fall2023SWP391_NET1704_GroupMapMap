using System.ComponentModel.DataAnnotations;

namespace DAL.Entities
{
    public class FoodCategory
    {
        public string   Id { get; set; }
        public string CategoryName { get; set; }
        public ICollection<Food> Foods { get; set; }
    }
}
