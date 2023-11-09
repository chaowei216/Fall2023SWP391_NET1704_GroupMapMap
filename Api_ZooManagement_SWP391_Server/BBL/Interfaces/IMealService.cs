using DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Interfaces
{
    public interface IMealService
    {
        Meal GetMealById(string mealId);
        ICollection<Meal> GetMeals();
        bool AddMeal(Meal meal);
        bool UpdateMeal(Meal meal);
        bool DeleteMeal(string mealId);
    }
}
