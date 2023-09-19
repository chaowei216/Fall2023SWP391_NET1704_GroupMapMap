using System.ComponentModel.DataAnnotations;

namespace Api_ZooManagement_SWP391.Entities
{
    public class Food
    {
        public string FoodId { get; set; }
        public string FName { get; set; }
        public int Quantity { get; set; }
        public DateTime ImportDate { get; set; }
        public ICollection<AnimalFood> AnimalFoods { get; set; }
        public FoodCategory Category { get; set; }
    }
}
