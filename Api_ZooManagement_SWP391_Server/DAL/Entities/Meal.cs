using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Entities
{
    public class Meal
    {
        public string MealId { get; set; }
        public string MealName { get; set; }

        public ICollection<SpeciesMeal> SpeciesMeals { get; set; }
        public ICollection<FoodMeal> FoodMeals { get; set; }
    }
}
